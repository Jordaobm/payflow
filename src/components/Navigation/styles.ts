import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Content = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 80px;
  height: 80px;
  align-items: flex-end;
  padding-bottom: 20px;
`;

export const ButtonHome = styled.TouchableOpacity`
  position: relative;
  top: 10px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image``;

export const ButtonAddSlip = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: #ff941a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ButtonExtract = styled.TouchableOpacity`
  position: relative;
  top: 10px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
