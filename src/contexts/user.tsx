import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext, ReactNode } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WEBCLIENTID } from "@env";
import { saveUserData } from "../services/database";
import { useEffect } from "react";
import { useSlips } from "./useSlips";
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
  slips: Slip[];
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
  const slips = useSlips(user);

  const saveInLocalStorage = async (key: string, data: any) => {
    await AsyncStorage.setItem(`@PayFlow-${key}`, JSON.stringify(data));
  };

  console.log("user", user);

  const handleSigInWithGoogle = async () => {
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

      const databaseId = await saveUserData(userData);

      setUser({ ...userData, databaseId: databaseId ?? "" });

      saveInLocalStorage("user", { ...userData, databaseId: databaseId ?? "" });

      return userData;
    }
  };

  return (
    <UserContext.Provider value={{ user, handleSigInWithGoogle, slips }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
