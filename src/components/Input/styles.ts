import styled from "styled-components/native";
import CurrencyInput from "react-native-currency-input";
import TextInputMask from "react-native-text-input-mask";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const BoxIcon = styled.View`
  width: 56px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

export const InputStyle = styled(TextInputMask)`
  flex: 1;
  margin-left: 16px;

  font-family: "Lexend-Regular";
  font-size: 15px;
  line-height: 18px;
  color: #b1b0b8;
`;

export const CheckBoxStyle = styled.View`
  margin-left: 16px;
  flex-direction: row;
  align-items: center;
`;

export const Recurrent = styled.Text`
  margin-left: 16px;

  font-family: "Lexend-Regular";
  font-size: 15px;
  line-height: 18px;
  color: #b1b0b8;
`;

export const ContentIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const FillRight = styled.View`
  width: 1px;
  height: 48px;
  background-color: #e3e3e5;
`;

export const FillBottom = styled.View`
  flex: 1;
  max-height: 1px;
  background-color: #e3e3e6;
  margin-bottom: 16px;
`;

export const CurrencyInputStyle = styled(CurrencyInput)`
  flex: 1;
  margin-left: 16px;

  font-family: "Lexend-Regular";
  font-size: 15px;
  line-height: 18px;
  color: #b1b0b8;
`;
