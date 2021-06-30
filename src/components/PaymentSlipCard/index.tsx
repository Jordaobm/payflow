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
import { useUser } from "../../contexts/user";

export const PaymentSlipCard = () => {
  const { slips } = useUser();

  return (
    <Container>
      <BarCodeImage source={barCodeWhite} />
      <Fill />
      <Information>
        Você tem{" "}
        <BolderText>
          {slips.filter((slip) => slip.paid === false).length} boletos
        </BolderText>{" "}
        cadastrados para pagar
      </Information>
    </Container>
  );
};
