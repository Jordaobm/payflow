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

  return (
    <Content
      colors={[
        "rgba(255, 255, 255, 0)",
        "rgba(255, 255, 255, 0.8)",
        "rgba(255, 255, 255, 1)",
      ]}
    >
      <ButtonHome>
        <Image source={homeIcon} />
      </ButtonHome>
      <ButtonAddSlip>
        <Image source={iconAdd} />
      </ButtonAddSlip>
      <ButtonExtract>
        <Image source={listIcon} />
      </ButtonExtract>
    </Content>
  );
};
