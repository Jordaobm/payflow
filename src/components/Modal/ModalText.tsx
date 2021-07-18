import React from "react";
import { Slip } from "../../contexts/user";
import { BolderText, SlipInfo, Warning, WarningStrong } from "./styles";

interface ModalTextProps {
  slip: Slip;
}

export const ModalText = ({ slip }: ModalTextProps) => {
  return (
    <>
      <SlipInfo>
        Deseja deletar o boleto <BolderText>{slip.name}</BolderText>?
      </SlipInfo>
      {slip.everyMonth && (
        <Warning>
          <WarningStrong>Alerta:</WarningStrong> este é um boleto recorrente,
          deletá-lo apagará todos os registros referentes à esse boleto
        </Warning>
      )}
    </>
  );
};
