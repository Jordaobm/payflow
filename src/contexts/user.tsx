import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext, ReactNode } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WEBCLIENTID } from "@env";
import { useEffect } from "react";
import { getSlips, login } from "../services/FirestoreDatabase";
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
  firstDueDate?: string;
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
  GoogleSignin.configure({});
  const [user, setUser] = useState<User>(initialDataUser ?? ({} as User));
  const [slips, setSlips] = useState<Slip[]>([]);

  const handleLogoff = async () => {
    await GoogleSignin.signOut();
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
          return userData;
        }
      }
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    if (user.id) {
      loadSlips();
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        handleSigInWithGoogle,
        slips,
        loadSlips,
        handleLogoff,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
