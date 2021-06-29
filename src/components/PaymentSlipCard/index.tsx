import React from "react";
import {
  BarCodeContent,
  BarCodeImage,
  BolderText,
  Container,
  Fill,
  Information,
} from "./styles";
import barCodeWhite from "../../../assets/images/barCodeWhite.png";

export const PaymentSlipCard = () => {
  return (
    <Container>
      <BarCodeImage source={barCodeWhite} />
      <Fill />
      <Information>
        Você tem <BolderText>6 boletos</BolderText> cadastrados para pagar
      </Information>
    </Container>
  );
};
