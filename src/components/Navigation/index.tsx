import { useNavigation } from "@react-navigation/native";
import React from "react";
import { home, homeFilled, iconAdd, list, listFilled } from "../../icons";
import {
  ButtonAddSlip,
  ButtonExtract,
  ButtonHome,
  Content,
  Image,
} from "./styles";

interface NavigationProps {
  page: string;
}

export const Navigation = ({ page }: NavigationProps) => {
  const homeIcon = page === "Home" ? homeFilled : home;
  const listIcon = page === "Extract" ? listFilled : list;

  const navigation = useNavigation();

  return (
    <Content
      colors={[
        "rgba(255, 255, 255, 0)",
        "rgba(255, 255, 255, 0.8)",
        "rgba(255, 255, 255, 1)",
      ]}
    >
      <ButtonHome onPress={() => navigation.navigate("Home")}>
        <Image source={homeIcon} />
      </ButtonHome>
      <ButtonAddSlip onPress={() => navigation.navigate("NewSlip")}>
        <Image source={iconAdd} />
      </ButtonAddSlip>
      <ButtonExtract onPress={() => navigation.navigate("Extract")}>
        <Image source={listIcon} />
      </ButtonExtract>
    </Content>
  );
};
