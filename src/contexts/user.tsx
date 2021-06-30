import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext, ReactNode } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { WEBCLIENTID } from "@env";

export interface User {
  name: string;
  avatar_url: string;
  loginDate: Date;
}

export interface Slip {
  name: string;
  dueDate: Date;
  value: number;
  everyMonth: boolean;
  paid: boolean;
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

  const [slips, setSlips] = useState<Slip[]>([
    {
      name: "Conta Vivo Fixo",
      dueDate: new Date(),
      value: 134,
      everyMonth: true,
      paid: true,
    },
    {
      name: "Conta Vivo Celular",
      dueDate: new Date(),
      value: 43,
      everyMonth: true,
      paid: true,
    },
    {
      name: "RTX 3070",
      dueDate: new Date(),
      value: 8499.9,
      everyMonth: false,
      paid: true,
    },
    {
      name: "Aluguel",
      dueDate: new Date(),
      value: 500,
      everyMonth: false,
      paid: false,
    },
    {
      name: "Luz",
      dueDate: new Date(),
      value: 100,
      everyMonth: false,
      paid: false,
    },
    {
      name: "Água",
      dueDate: new Date(),
      value: 90,
      everyMonth: false,
      paid: false,
    },
    {
      name: "Água",
      dueDate: new Date(),
      value: 90,
      everyMonth: false,
      paid: false,
    },
  ]);

  const saveInLocalStorage = async (key: string, data: any) => {
    await AsyncStorage.setItem(`@PayFlow-${key}`, JSON.stringify(data));
  };

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
        name: response?.user?.displayName,
        avatar_url: response?.additionalUserInfo?.profile?.picture,
        loginDate: new Date(),
      };

      setUser(userData);

      saveInLocalStorage("user", userData);

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
