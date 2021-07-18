import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NotificationProvider } from "./contexts/notifications";
import { User, UserProvider } from "./contexts/user";
import { Routes } from "./routes";

import { login } from "./services/FirestoreDatabase";

export function App() {
  const [initialDataUser, setInitialDataUser] = useState<User>();

  const getUserLocalStorage = async () => {
    const localUser = await AsyncStorage.getItem("@PayFlow-user");
    if (localUser) {
      const parsedUser = JSON.parse(localUser);
      const userLogin = await login(parsedUser);
      if (userLogin) {
        setInitialDataUser(userLogin);
      }
    } else {
      setInitialDataUser({} as User);
    }
  };

  useEffect(() => {
    getUserLocalStorage();
  }, []);

  if (initialDataUser) {
    return (
      <UserProvider initialDataUser={initialDataUser}>
        <NotificationProvider>
          <Routes />
        </NotificationProvider>
      </UserProvider>
    );
  }

  return <></>;
}
