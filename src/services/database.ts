import database from "@react-native-firebase/database";
import { Slip, User } from "../contexts/user";

const databaseRef = database();

export async function saveUserData(user: User) {
  const users = (await databaseRef.ref("users").once("value")).val();

  if (users) {
    const existUser = Object.entries(users).find(
      (e: any) => e[1].id === user.id
    );

    if (existUser) {
      return existUser[0];
    }
    const createUser = databaseRef.ref("users").push({
      ...user,
    });
    return createUser.key;
  }

  const createUser = databaseRef.ref("users").push({
    ...user,
  });
  return createUser.key;
}

export async function saveSlip(slip: Slip, user: User) {
  return databaseRef.ref(`users/${user.databaseId}/slips`).push({ ...slip });
}

export async function deleteSlip(slip: Slip, user: User) {
  return databaseRef
    .ref(`users/${user.databaseId}/slips/${slip.databaseId}`)
    .remove();
}

export async function updateSlip(slip: Slip, user: User) {
  return databaseRef
    .ref(`users/${user.databaseId}/slips/${slip.databaseId}`)
    .update({ paid: true });
}
