import { format, isAfter, isBefore } from "date-fns";
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

  const firstDayMonth = new Date(
    new Date().getFullYear(),
    StringToDate(slip.dueDate).getMonth(),
    1
  );

  const isRecurringAndExpirationMonthIsGreaterCurrentMonth =
    slip.everyMonth && isBefore(new Date(), firstDayMonth);

  return (
    <>
      {showModal && (
        <Modal
          type={type}
          closeModal={setShowModal}
          isOpen={showModal}
          slip={slip}
          isRecurringAndExpirationMonthIsGreaterCurrentMonth={
            isRecurringAndExpirationMonthIsGreaterCurrentMonth
          }
        />
      )}
      <SlipContainer onPress={() => edit && setShowModal(true)}>
        <SlipInfo>
          <SlipName
            isRecurringAndExpirationMonthIsGreaterCurrentMonth={
              isRecurringAndExpirationMonthIsGreaterCurrentMonth
            }
            slip={type === "EXTRACT" ? ({} as Slip) : slip}
            isExpiredAndNotBeenPaid={isExpiredAndNotBeenPaid}
          >
            {slip.name}
          </SlipName>
          <SlipDuoDate
            isRecurringAndExpirationMonthIsGreaterCurrentMonth={
              isRecurringAndExpirationMonthIsGreaterCurrentMonth
            }
            slip={type === "EXTRACT" ? ({} as Slip) : slip}
            isExpiredAndNotBeenPaid={isExpiredAndNotBeenPaid}
          >
            Vence em {format(StringToDate(slip.dueDate), "dd'/'MM'/'yyyy")} {""}
            {slip.everyMonth && (
              <EveryMonth
                isRecurringAndExpirationMonthIsGreaterCurrentMonth={
                  isRecurringAndExpirationMonthIsGreaterCurrentMonth
                }
                slip={type === "EXTRACT" ? ({} as Slip) : slip}
              >
                recorrente
              </EveryMonth>
            )}
          </SlipDuoDate>
        </SlipInfo>
        <SlipValue
          isRecurringAndExpirationMonthIsGreaterCurrentMonth={
            isRecurringAndExpirationMonthIsGreaterCurrentMonth
          }
          slip={type === "EXTRACT" ? ({} as Slip) : slip}
          isExpiredAndNotBeenPaid={isExpiredAndNotBeenPaid}
        >
          {formatCurrency(Number(slip.value))}
        </SlipValue>
      </SlipContainer>
    </>
  );
};
