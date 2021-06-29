import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #585666;
  height: 80px;
  padding: 20px;
  border-radius: 5px;
`;
export const BarCodeContent = styled.View`
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const BarCodeImage = styled.Image``;
export const Fill = styled.View`
  width: 1px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 24px;
`;
export const Information = styled.Text`
  flex: 1;

  font-family: "Lexend-Regular";
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
`;

export const BolderText = styled.Text`
  font-family: "Lexend-SemiBold";
`;
