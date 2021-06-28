import React from "react";
import { ButtonProps, Text, TouchableHighlight } from "react-native";
import { ButtonStyle, Image } from "./styles";

interface SmallButtonProps extends ButtonProps {
  icon?: any;
}

export const SmallButton = ({ icon, ...rest }: SmallButtonProps) => {
  return <ButtonStyle {...rest}>{icon && <Image source={icon} />}</ButtonStyle>;
};
