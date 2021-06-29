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

interface UserContextData {
  user: User;
  handleSigInWithGoogle(): Promise<User | undefined>;
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

    console.log(response);

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
    <UserContext.Provider value={{ user, handleSigInWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
