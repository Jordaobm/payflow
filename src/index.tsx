import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { useState } from "react";
import { User, UserProvider } from "./contexts/user";
import { Routes } from "./routes";

import SplashScreen from "react-native-splash-screen";
import { login } from "./services/FirestoreDatabase";

export function App() {
  const [initialDataUser, setInitialDataUser] = useState<User>();

  useEffect(() => {
    getUserLocalStorage();
    SplashScreen.hide();
  }, []);

  const getUserLocalStorage = async () => {
    const localUser = await AsyncStorage.getItem("@PayFlow-user");
    if (localUser) {
      const parsedUser = JSON.parse(localUser);
      const userLogin = await login(parsedUser);
      if (userLogin) {
        setInitialDataUser(userLogin);
      }
      // setInitialDataUser({} as User); // desloga usuário
    } else {
      setInitialDataUser({} as User);
    }
  };

  if (initialDataUser) {
    return (
      <UserProvider initialDataUser={initialDataUser}>
        <Routes />
      </UserProvider>
    );
  }

  return <></>;
}
