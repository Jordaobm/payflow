import React from "react";
import { ButtonProps, Text, TouchableHighlight } from "react-native";
import { iconGoogle } from "../../icons";
import {
  ButtonStyle,
  ContentImageGoogle,
  ContentText,
  Fill,
  Image,
  TextGoogleButton,
} from "./styles";

interface SmallButtonProps extends ButtonProps {}

export const SigInWithGoogle = ({ ...rest }: SmallButtonProps) => {
  return (
    <ButtonStyle {...rest}>
      <ContentImageGoogle>
        <Image source={iconGoogle} />
      </ContentImageGoogle>
      <Fill />
      <ContentText>
        <TextGoogleButton>Entrar com o Google</TextGoogleButton>
      </ContentText>
    </ButtonStyle>
  );
};
