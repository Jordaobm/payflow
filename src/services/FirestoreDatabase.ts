import firestore from "@react-native-firebase/firestore";
import { Slip, User } from "../contexts/user";

// databaseId?: string;
//   id: string;
//   name: string;
//   avatar_url: string;
//   loginDate: Date;

export async function login(user: User) {
  // buscando usuários na base
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

  // verificando se o usuário que logou já existe na base
  if (user) {
    const existUser = users.find((findUser) => findUser.id === user?.id);

    if (existUser) {
      //retornando usuário que já existe
      return existUser;
    }

    // adicionando usuário que não existe
    const addUser = await firestore()
      .collection("users")
      .add({
        ...user,
      })
      .then(() => {});

    //buscando o usuário que acabou de ser adicionado
    if (user.id) {
      const findUser = await firestore()
        .collection("users")
        // Filter results
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
    });
}

export async function getSlips(user: User) {
  if (user) {
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
          };
        });

        return parsedSlips;
      });

    return slips;
  }
}

export async function updateSlip(slip: Slip) {
  const update = firestore()
    .collection("slips")
    .doc(slip.databaseId)
    .update({
      paid: true,
    })
    .then(() => {});
}

export async function deleteSlip(slip: Slip) {
  await firestore()
    .collection("slips")
    .doc(slip.databaseId)
    .delete()
    .then(() => {});
}
