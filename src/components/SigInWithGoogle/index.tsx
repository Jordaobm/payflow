import React from "react";
import {
  ActivityIndicator,
  ButtonProps,
  Text,
  TouchableHighlight,
} from "react-native";
import { iconGoogle } from "../../icons";
import {
  ButtonStyle,
  ContentImageGoogle,
  ContentText,
  Fill,
  Image,
  Loading,
  TextGoogleButton,
} from "./styles";

interface SmallButtonProps extends ButtonProps {
  loading: boolean;
}

export const SigInWithGoogle = ({ loading, ...rest }: SmallButtonProps) => {
  return (
    <ButtonStyle {...rest}>
      {loading ? (
        <Loading>
          <ActivityIndicator size="large" color="#FF941A" />
        </Loading>
      ) : (
        <>
          <ContentImageGoogle>
            <Image source={iconGoogle} />
          </ContentImageGoogle>
          <Fill />
          <ContentText>
            <TextGoogleButton>Entrar com o Google</TextGoogleButton>
          </ContentText>
        </>
      )}
    </ButtonStyle>
  );
};
