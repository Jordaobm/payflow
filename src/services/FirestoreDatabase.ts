import firestore from "@react-native-firebase/firestore";
import { Slip, User } from "../contexts/user";

export async function login(user: User) {
  const users = await firestore()
    .collection("users")
    .get()
    .then((querySnapshot) => {
      const usersdb = querySnapshot.docs;

      const parsedUsers = usersdb.map((userdb) => {
        const data = userdb.data();

        return {
          databaseId: userdb.id,
          id: data.id,
          name: data.name,
          avatar_url: data.avatar_url,
          loginDate: data.loginDate,
        };
      });

      return parsedUsers;
    });
  if (user) {
    const existUser = users.find((findUser) => findUser.id === user?.id);

    if (existUser) {
      return existUser;
    }
    const addUser = await firestore()
      .collection("users")
      .add({
        ...user,
      })
      .then(() => {});
    if (user.id) {
      const findUser = await firestore()
        .collection("users")
        .where("id", "==", user?.id)
        .get()
        .then((querySnapshot) => {
          const userdb = querySnapshot.docs[0];
          const data = userdb.data();

          return {
            databaseId: userdb.id,
            id: data.id,
            name: data.name,
            avatar_url: data.avatar_url,
            loginDate: data.loginDate,
          };
        });

      return findUser;
    }
  }
}

export async function saveSlip(user: User, slip: Slip) {
  await firestore()
    .collection("slips")
    .add({
      ...slip,
      userId: user.id,
      firstDueDate: slip.dueDate,
    });
}

export async function getSlips(user: User) {
  if (user.id) {
    const slips = await firestore()
      .collection("slips")
      .where("userId", "==", user.id)
      .get()
      .then((querySnapshot) => {
        const slipsdb = querySnapshot.docs;

        const parsedSlips = slipsdb.map((slipdb) => {
          const data = slipdb.data();

          return {
            databaseId: slipdb.id,
            name: data.name,
            dueDate: data.dueDate,
            value: data.value,
            everyMonth: data.everyMonth,
            paid: data.paid,
            code: data.code,
            firstDueDate: data.firstDueDate,
          };
        });

        return parsedSlips;
      });

    return slips;
  }
}

export async function updateSlip(slip: Slip, updatedFields: Slip) {
  if (slip && updatedFields) {
    delete updatedFields.firstDueDate;
    const update = firestore()
      .collection("slips")
      .doc(slip.databaseId)
      .update({ ...updatedFields })
      .then(() => {});
  }
}

export async function deleteSlip(slip: Slip) {
  await firestore()
    .collection("slips")
    .doc(slip.databaseId)
    .delete()
    .then(() => {});
}
