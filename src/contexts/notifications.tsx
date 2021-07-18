import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext, ReactNode } from "react";
import NotifService from "../services/NotifService";
import { StringToDate } from "../utils/StringToDate";
import { transformStringInNumberId } from "../utils/transformStringInNumberId";
import { Slip, useUser } from "./user";

interface NotificationContextProps {
  cancelNotifications: (slip: Slip) => void;
}

interface Notification {
  date: Date;
  id: string;
  message: string;
}

const NotificationContext = createContext({} as NotificationContextProps);

interface NotificationProviderProps {
  children: ReactNode;
}

const notifService = new NotifService();

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const { slips } = useUser();

  const [notifications, setNotifications] = useState<Notification[]>();

  async function getLocalStorage() {
    const local = await AsyncStorage.getItem("@Payflow-notifications");

    if (local) {
      setNotifications(JSON.parse(local));
    } else {
      setNotifications([]);
    }
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  async function saveLocalStorage() {
    if (notifications) {
      await AsyncStorage.setItem(
        "@Payflow-notifications",
        JSON.stringify(notifications)
      );
    }
  }

  useEffect(() => {
    saveLocalStorage();
  }, [notifications]);

  const createNotifications = () => {
    const slipsNotPaid = slips.filter((slips) => !slips.paid);

    slipsNotPaid.forEach((slip) => {
      const alreadyExistInNotification = notifications?.find((notification) => {
        if (
          Number(notification.id) ===
          transformStringInNumberId(slip.databaseId ?? "")
        ) {
          return slip;
        }
      });

      if (alreadyExistInNotification) {
      } else {
        const updateNotifications = notifications;

        if (updateNotifications) {
          setNotifications([
            ...updateNotifications,
            {
              id: transformStringInNumberId(slip.databaseId ?? "").toString(),
              date: StringToDate(slip.dueDate),
              message: `O boleto ${slip.name} vence em ${slip.dueDate}`,
            },
          ]);
          notifService.scheduleNotif(
            transformStringInNumberId(slip.databaseId ?? ""),
            `O boleto ${slip.name} vence em ${slip.dueDate}`,
            StringToDate(slip.dueDate)
          );
        }
      }
    });
  };

  const cancelNotifications = (slip: Slip) => {
    notifService.cancelNotif(transformStringInNumberId(slip.databaseId ?? ""));
    const updateLocalNotifications = notifications?.filter(
      (notif) =>
        notif.id !== transformStringInNumberId(slip.databaseId ?? "").toString()
    );
    setNotifications(updateLocalNotifications);
  };

  useEffect(() => {
    if (slips.length > 0) {
      if (notifications) {
        createNotifications();
      }
    }
  }, [slips]);
  return (
    <NotificationContext.Provider value={{ cancelNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  return context;
};
