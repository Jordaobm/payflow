import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { Input } from "../../components/Input";
import { arrowLeft, barCodeSlip, slip, wallet, x } from "../../icons";
import { ArrowLeft, Container, Content, Form, GoBack, Title } from "./styles";

export const NewSlip = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />

      <GoBack
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ArrowLeft source={arrowLeft} />
      </GoBack>

      <Content>
        <Title>Preencha os dados do boleto</Title>
        <Form>
          <Input placeholder="Nome do boleto" icon={slip} />
          <Input placeholder="Vencimento" icon={x} />
          <Input placeholder="Valor" icon={wallet} />
          <Input placeholder="Código" icon={barCodeSlip} />
        </Form>
      </Content>

      {/* <Actions>
          <CancelButton>
              <Text>Cancelar</Text>
          </CancelButton>
          <
      </Actions> */}
    </Container>
  );
};
