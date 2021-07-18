const [notifications, setNotifications] = useState<Notification[]>([]);

const getInLocalStorage = async () => {
  const local = await AsyncStorage.getItem(`@PayFlow-notifications`);
  if (local) {
    const parsed = JSON.parse(local);

    return parsed;
  }
};

console.log("SLIPS", slips);
console.log("NOTIFICATIONS", notifications);

const saveInLocalStorage = async (data: any) => {
  await AsyncStorage.setItem(`@PayFlow-notifications`, JSON.stringify(data));
};

const createNotifications = (notif) => {
  const filterSlips = slips.filter((slip) => !slip.paid);

  filterSlips.forEach((slip) => {
    const alreadyExistNotification = notifications.find((notif: any) => {
      if (
        Number(notif.id) === transformStringInNumberId(slip.databaseId ?? "")
      ) {
        return notif;
      }
    });

    if (alreadyExistNotification) {
      console.log("notificação encontrada");
    } else {
      if (slip.databaseId) {
        notifService.scheduleNotif(
          transformStringInNumberId(slip.databaseId),
          `O boleto ${slip.name} vence em ${slip.dueDate}`,
          StringToDate(slip.dueDate)
        );

        setNotifications([
          ...notifications,
          {
            data: {
              id: transformStringInNumberId(slip.databaseId).toString(),
              sceen: "home",
            },
            date: StringToDate(slip.dueDate),
            id: transformStringInNumberId(slip.databaseId).toString(),
            message: "payflow",
          },
        ]);
      }
    }
  });
};

useEffect(() => {
  // saveInLocalStorage(notifications);
}, [notifications]);

const cancelNotification = (slip: Slip) => {
  if (slip.databaseId) {
    notifService.cancelNotif(transformStringInNumberId(slip.databaseId));
    setNotifications(
      notifications.filter(
        (filterSlip) =>
          filterSlip.id !==
          transformStringInNumberId(slip.databaseId ?? "").toString()
      )
    );
  }
};

useEffect(() => {
  const notif = getInLocalStorage();
  createNotifications(notif);
  // DELETAR TODAS AS NOTIFICAÇÕES
  // notifService.cancelAll();

  // DELETAR NOTIFICAÇÕES DO STORAGE
  // AsyncStorage.setItem("@PayFlow-notifications", JSON.stringify([]));
}, [slips]);
