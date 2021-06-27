import React from "react";
import { StatusBar, Text, View } from "react-native";
import {
  BackgroundOrange,
  BarCodeImage,
  Container,
  ContainerImagePeople,
  ContentSmallButtonAdd,
  ContentSmallButtonList,
  ImagePeople,
  LoginContent,
  LoginText,
} from "./styles";
import people from "../../../assets/images/people.png";
import { SmallButton } from "../../components/Button";
import RadialGradient from "react-native-radial-gradient";
import { iconAdd, iconBarCode, iconList } from "../../icons";

export const Login = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#FF941A" />
      <RadialGradient
        style={{ width: "100%", height: "35%" }}
        colors={["#FFC480", "#FF941A"]}
        radius={130}
      ></RadialGradient>

      <ContainerImagePeople>
        <ImagePeople source={people}></ImagePeople>
      </ContainerImagePeople>

      <ContentSmallButtonAdd>
        <SmallButton
          onPress={() => {}}
          title="Adicionar boleto"
          icon={iconAdd}
        />
      </ContentSmallButtonAdd>

      <ContentSmallButtonList>
        <SmallButton
          onPress={() => {}}
          title="Adicionar boleto"
          icon={iconList}
        />
      </ContentSmallButtonList>

      <LoginContent>
        <BarCodeImage source={iconBarCode} />

        <LoginText>Organize seus boletos em um só lugar</LoginText>
      </LoginContent>
    </Container>
  );
};
