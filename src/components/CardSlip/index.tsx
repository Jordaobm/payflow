import { format } from "date-fns";
import React from "react";

import {
  SlipContainer,
  SlipDuoDate,
  SlipInfo,
  SlipName,
  SlipValue,
} from "./styles";

interface Slip {
  name: string;
  dueDate: Date;
  value: number;
  everyMonth: boolean;
}

interface CardSlipProps {
  slip: Slip;
}

export const CardSlip = ({ slip }: CardSlipProps) => {
  function formatCurrency(value: number) {
    return "R$" + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <SlipContainer>
      <SlipInfo>
        <SlipName>{slip.name}</SlipName>
        <SlipDuoDate>
          Vence em {format(slip.dueDate, "dd'/'MM'/'yyyy")}
        </SlipDuoDate>
      </SlipInfo>
      <SlipValue>{formatCurrency(slip.value)}</SlipValue>
    </SlipContainer>
  );
};
