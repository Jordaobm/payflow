import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export const BackgroundOrange = styled.View`
  width: 100%;
  height: 35%;
  background-color: #ff941a;
`;

export const ContainerImagePeople = styled.View`
  position: relative;
  top: -33%;

  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImagePeople = styled.Image``;

export const ContentSmallButtonAdd = styled.View`
  position: relative;
  top: -55%;
  left: 17%;
`;

export const ContentSmallButtonList = styled.View`
  position: relative;
  top: -74%;
  left: 70%;
`;

export const LoginContent = styled.View`
  position: relative;
  top: -44%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BarCodeImage = styled.Image``;

export const LoginText = styled.Text`
  margin-top: 20px;
  width: 100%;
  max-width: 250px;

  font-family: "Lexend-Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  /* or 125% */

  text-align: center;

  /* Texts/heading */

  color: #585666;
`;

export const ButtonSigInWithGoogle = styled.View`
  margin-top: 30px;
`;
