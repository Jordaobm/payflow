import React from "react";
import { TextInputProps } from "react-native";
import {
  BoxIcon,
  Container,
  ContentIcon,
  FillBottom,
  FillRight,
  Icon,
  InputStyle,
} from "./styles";

interface InputProps extends TextInputProps {
  icon?: any;
}

export const Input = ({ icon, ...rest }: InputProps) => {
  return (
    <>
      <Container>
        <ContentIcon>
          <BoxIcon>
            <Icon source={icon} />
          </BoxIcon>
          <FillRight />
        </ContentIcon>

        <InputStyle {...rest} />
      </Container>
      <FillBottom />
    </>
  );
};
