import styled from "styled-components/native";

export const SlipContainer = styled.TouchableOpacity`
  margin: 16px 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const SlipInfo = styled.View``;

export const SlipName = styled.Text`
  font-family: "Lexend-SemiBold";
  font-size: 17px;
  line-height: 21px;
  color: #585666;
`;

export const SlipDuoDate = styled.Text`
  margin-top: 6px;
  font-family: "Lexend-Regular";
  font-size: 13px;
  line-height: 16px;
  color: #706e7a;
`;

export const SlipValue = styled.Text`
  font-family: "Lexend-SemiBold";
  font-size: 16px;
  line-height: 19px;
  color: #585666;
`;
