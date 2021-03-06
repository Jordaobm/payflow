import { format, isAfter } from "date-fns";
import React from "react";
import { useState } from "react";
import { Slip } from "../../contexts/user";
import { formatCurrency } from "../../utils/formatValue";
import { StringToDate } from "../../utils/StringToDate";
import { Modal } from "../Modal";

import {
  EveryMonth,
  SlipContainer,
  SlipDuoDate,
  SlipInfo,
  SlipName,
  SlipValue,
} from "./styles";

interface CardSlipProps {
  slip: Slip;
  edit?: boolean;
  type?: "HOME" | "EXTRACT";
}

export const CardSlip = ({
  slip,
  edit = false,
  type = "HOME",
}: CardSlipProps) => {
  const [showModal, setShowModal] = useState(false);

  const isExpiredAndNotBeenPaid =
    isAfter(new Date(), StringToDate(slip.dueDate)) && !slip.paid;
  return (
    <>
      {showModal && (
        <Modal
          type={type}
          closeModal={setShowModal}
          isOpen={showModal}
          slip={slip}
        />
      )}
      <SlipContainer onPress={() => edit && setShowModal(true)}>
        <SlipInfo>
          <SlipName
            slip={type === "EXTRACT" ? ({} as Slip) : slip}
            isExpiredAndNotBeenPaid={isExpiredAndNotBeenPaid}
          >
            {slip.name}
          </SlipName>
          <SlipDuoDate
            slip={type === "EXTRACT" ? ({} as Slip) : slip}
            isExpiredAndNotBeenPaid={isExpiredAndNotBeenPaid}
          >
            Vence em {format(StringToDate(slip.dueDate), "dd'/'MM'/'yyyy")} {""}
            {slip.everyMonth && (
              <EveryMonth slip={type === "EXTRACT" ? ({} as Slip) : slip}>
                recorrente
              </EveryMonth>
            )}
          </SlipDuoDate>
        </SlipInfo>
        <SlipValue
          slip={type === "EXTRACT" ? ({} as Slip) : slip}
          isExpiredAndNotBeenPaid={isExpiredAndNotBeenPaid}
        >
          {formatCurrency(Number(slip.value))}
        </SlipValue>
      </SlipContainer>
    </>
  );
};
