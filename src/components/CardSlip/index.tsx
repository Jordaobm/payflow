import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import { Slip } from "../../contexts/user";
import { formatCurrency } from "../../utils/formatValue";
import { StringToDate } from "../../utils/StringToDate";
import { Modal } from "../Modal";

import {
  SlipContainer,
  SlipDuoDate,
  SlipInfo,
  SlipName,
  SlipValue,
} from "./styles";

interface CardSlipProps {
  slip: Slip;
  edit?: boolean;
}

export const CardSlip = ({ slip, edit = false }: CardSlipProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal closeModal={setShowModal} isOpen={showModal} slip={slip} />
      )}
      <SlipContainer onPress={() => edit && setShowModal(true)}>
        <SlipInfo>
          <SlipName>{slip.name}</SlipName>
          <SlipDuoDate>
            Vence em {format(StringToDate(slip.dueDate), "dd'/'MM'/'yyyy")}
          </SlipDuoDate>
        </SlipInfo>
        <SlipValue>{formatCurrency(Number(slip.value))}</SlipValue>
      </SlipContainer>
    </>
  );
};
