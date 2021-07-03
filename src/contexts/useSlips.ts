import database from "@react-native-firebase/database";
import { useEffect, useState } from "react";
import { Slip, User } from "./user";

export const useSlips = (user: User) => {
  const databaseRef = database().ref(`users/${user.databaseId}/slips`);

  const [slips, setSlips] = useState<Slip[]>([]);

  useEffect(() => {
    databaseRef.on("value", (slip) => {
      const slips = slip.val();

      if (slips) {
        const parsedSlips = Object.entries(slips).map((e: any) => {
          const restDataSlip = e[1];

          return {
            databaseId: e[0],
            ...restDataSlip,
          };
        });

        setSlips(parsedSlips);
      } else {
        setSlips([]);
      }
    });

    return () => {
      databaseRef.off("value");
    };
  }, []);

  return slips;
};
