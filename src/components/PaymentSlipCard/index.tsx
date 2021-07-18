import React from "react";
import {
  BarCodeImage,
  BolderText,
  Container,
  Fill,
  Information,
} from "./styles";
import barCodeWhite from "../../../assets/images/barCodeWhite.png";
import { useUser } from "../../contexts/user";

interface PaymentSlipCardProps {
  totalSlipsNotPaid: number;
}

export const PaymentSlipCard = ({
  totalSlipsNotPaid,
}: PaymentSlipCardProps) => {
  return (
    <Container>
      <BarCodeImage source={barCodeWhite} />
      <Fill />
      <Information>
        Você tem <BolderText>{totalSlipsNotPaid} boletos</BolderText>{" "}
        cadastrados para pagar
      </Information>
    </Container>
  );
};
