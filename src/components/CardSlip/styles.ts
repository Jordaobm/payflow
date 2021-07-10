import styled from "styled-components/native";
import { Slip } from "../../contexts/user";

export const SlipContainer = styled.TouchableOpacity`
  margin: 16px 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const SlipInfo = styled.View`
  max-width: 70%;
`;

interface SlipNameProps {
  slip?: Slip;
  isExpiredAndNotBeenPaid?: boolean;
}

export const SlipName = styled.Text<SlipNameProps>`
  font-family: "Lexend-SemiBold";
  font-size: 17px;
  line-height: 21px;

  color: ${(props) =>
    props?.isExpiredAndNotBeenPaid
      ? "#F56565"
      : props?.slip?.paid
      ? "rgba(88, 86, 102, 0.2)"
      : "#585666"};
`;

export const SlipDuoDate = styled.Text<SlipNameProps>`
  margin-top: 6px;
  font-family: "Lexend-Regular";
  font-size: 13px;
  line-height: 16px;
  /* color: ${(props) =>
    props?.slip?.paid ? "rgba(88, 86, 102, 0.2)" : "#706e7a"}; */
  color: ${(props) =>
    props?.isExpiredAndNotBeenPaid
      ? "#F56565"
      : props?.slip?.paid
      ? "rgba(88, 86, 102, 0.2)"
      : "#585666"};
`;

export const EveryMonth = styled.Text<SlipNameProps>`
  font-family: "Lexend-Regular";
  font-size: 13px;
  line-height: 16px;
  color: ${(props) =>
    props?.slip?.paid ? "rgba(255, 148, 26, 0.2)" : "#FF941A"};
`;

export const SlipValue = styled.Text<SlipNameProps>`
  font-family: "Lexend-SemiBold";
  font-size: 16px;
  line-height: 19px;
  color: ${(props) =>
    props?.isExpiredAndNotBeenPaid
      ? "#F56565"
      : props?.slip?.paid
      ? "rgba(88, 86, 102, 0.2)"
      : "#585666"};
`;
