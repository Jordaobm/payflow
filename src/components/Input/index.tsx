import React from "react";
import { TextInputProps } from "react-native";
import {
  BoxIcon,
  CheckBoxStyle,
  Container,
  ContentIcon,
  CurrencyInputStyle,
  FillBottom,
  FillRight,
  Icon,
  InputStyle,
  Recurrent,
} from "./styles";
import CheckBox from "@react-native-community/checkbox";

interface InputProps extends TextInputProps {
  icon?: any;
  checkbox?: boolean;
  valueCheckBox?: boolean;
  onChangeCheckBox?: (value: boolean) => boolean | void;
  mask?: string;
  currency?: boolean;
}

export const Input = ({
  checkbox = false,
  icon,
  value,
  valueCheckBox = false,
  onChange,
  onChangeCheckBox,
  currency = false,
  ...rest
}: InputProps) => {
  return (
    <>
      <Container>
        <ContentIcon>
          <BoxIcon>
            <Icon source={icon} />
          </BoxIcon>
          <FillRight />
        </ContentIcon>

        {checkbox ? (
          <CheckBoxStyle>
            <CheckBox
              value={valueCheckBox}
              onValueChange={(e) => onChangeCheckBox && onChangeCheckBox(e)}
              tintColors={{ true: "#FF941A" }}
            />
            <Recurrent>Boleto recorrente?</Recurrent>
          </CheckBoxStyle>
        ) : currency ? (
          <CurrencyInputStyle
            placeholder={rest.placeholder}
            value={Number(value)}
            onChangeValue={(e) =>
              rest.onChangeText && rest.onChangeText(String(e))
            }
            prefix="R$"
            delimiter="."
            separator=","
            precision={2}
          />
        ) : (
          <InputStyle {...rest} />
        )}
      </Container>
      <FillBottom />
    </>
  );
};
