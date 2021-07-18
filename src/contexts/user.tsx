import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext, ReactNode } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WEBCLIENTID } from "@env";
import { useEffect } from "react";
import { getSlips, login, updateSlip } from "../services/FirestoreDatabase";
import { format } from "date-fns";

export interface User {
  databaseId?: string;
  id: string;
  name: string;
  avatar_url: string;
  loginDate: Date;
}

export interface Slip {
  databaseId?: string;
  name: string;
  dueDate: string;
  value: string;
  everyMonth: boolean;
  paid: boolean;
  code?: string;
}

interface UserContextData {
  user: User;
  handleSigInWithGoogle(): Promise<User | undefined>;
  handleLogoff(): void;
  slips: Slip[];
  loadSlips(): Promise<Slip[] | undefined>;
  updateSlipsRecurrent(data: Slip[]): void;
}

const UserContext = createContext({} as UserContextData);

interface UserProviderProps {
  children: ReactNode;
  initialDataUser?: User | undefined;
}

export const UserProvider = ({
  children,
  initialDataUser,
}: UserProviderProps) => {
  const [user, setUser] = useState<User>(initialDataUser ?? ({} as User));
  const [slips, setSlips] = useState<Slip[]>([]);

  // const clearLocalStorage = async () => {
  //   await AsyncStorage.clear();
  //   console.log("limpou");
  // };
  // clearLocalStorage();

  const handleLogoff = async () => {
    GoogleSignin.signOut();
    setUser({} as User);
    setSlips([]);
    await AsyncStorage.clear();
  };

  const loadSlips = async () => {
    const slipsdb = await getSlips(user);

    if (slipsdb) {
      const organizeArray = slipsdb
        .sort((a, b) => {
          if (a.everyMonth > b.everyMonth) {
            return -1;
          } else {
            return 0;
          }
        })
        .sort((a, b) => {
          if (a.paid > b.paid) {
            return -1;
          } else {
            return 0;
          }
        });

      setSlips(organizeArray);
      return organizeArray;
    }
  };

  const updateSlipsRecurrent = (data: Slip[]) => {
    const recurringAndAlreadyPaid = data.filter((slip) => {
      if (slip.everyMonth && slip.paid) {
        return slip;
      }
    });

    const currentMonth = format(new Date(), "MM");

    const updateSlips = recurringAndAlreadyPaid.filter((slip) => {
      const monthDueDate = slip.dueDate.split("/")[1];

      if (Number(currentMonth) > Number(monthDueDate)) {
        return slip;
      }
    });

    if (updateSlips.length > 0) {
      const updateDataSlips = updateSlips.map((slip) => {
        const day = slip.dueDate.split("/")[0];
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const newDate = new Date(currentYear, currentMonth, Number(day));

        const parsedDate = format(newDate, "dd/MM/yyyy");

        return {
          ...slip,
          dueDate: parsedDate,
          paid: false,
        };
      });

      return updateDataSlips;
    }

    return [];
  };

  const saveInLocalStorage = async (key: string, data: any) => {
    await AsyncStorage.setItem(`@PayFlow-${key}`, JSON.stringify(data));
  };

  const handleSigInWithGoogle = async () => {
    try {
      GoogleSignin.configure({
        webClientId: WEBCLIENTID,
      });

      const { idToken } = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const response = await auth().signInWithCredential(googleCredential);

      if (
        response?.user?.displayName &&
        response?.additionalUserInfo?.profile?.picture
      ) {
        const userData = {
          id: response?.user.uid,
          name: response?.user?.displayName,
          avatar_url: response?.additionalUserInfo?.profile?.picture,
          loginDate: new Date(),
        };

        const userLogin = await login(userData);

        if (userLogin) {
          setUser(userLogin);
          saveInLocalStorage("user", userLogin);
          // loadSlips();
          return userData;
        }
      }
    } catch (error) {
      return;
    }
  };

  const findSlipsRecurrentExpiredAlreadyPaid = updateSlipsRecurrent(slips);

  useEffect(() => {
    if (user.id) {
      const slipsDB = loadSlips().then((data) => {
        if (data) {
          if (findSlipsRecurrentExpiredAlreadyPaid.length > 0) {
            const slipsUpdate = updateSlipsRecurrent(data);

            if (slipsUpdate) {
              slipsUpdate.forEach(async (slip) => {
                if (slip) {
                  await updateSlip(slip, {
                    ...slip,
                    code: slip?.code ?? "",
                    databaseId: slip?.databaseId ?? "",
                  });
                }
              });
            }
          }

          loadSlips();
        }
      });
    }
    return;
  }, [user, findSlipsRecurrentExpiredAlreadyPaid.length]);

  return (
    <UserContext.Provider
      value={{
        user,
        handleSigInWithGoogle,
        slips,
        loadSlips,
        handleLogoff,
        updateSlipsRecurrent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
