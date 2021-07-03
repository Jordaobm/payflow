import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, StatusBar } from "react-native";
import { Input } from "../../components/Input";
import { Slip, useUser } from "../../contexts/user";
import {
  arrowLeft,
  barCodeSlip,
  calendar,
  slip as iconSlip,
  wallet,
  x,
} from "../../icons";
import { saveSlip } from "../../services/FirestoreDatabase";
import {
  Actions,
  ArrowLeft,
  CancelButton,
  ConfirmButton,
  Container,
  Content,
  ContentButtons,
  Fill,
  FillVertical,
  Form,
  GoBack,
  Group1,
  TextButtonCancel,
  TextButtonConfirm,
  Title,
} from "./styles";

export const NewSlip = () => {
  const [slip, setSlip] = useState<Slip>({} as Slip);

  const { user, loadSlips } = useUser();

  const navigation = useNavigation();

  const handleSaveSlip = async () => {
    if (slip.name && slip.value) {
      await saveSlip(user, { ...slip, paid: false });
      await loadSlips();
      navigation.navigate("Home");
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView behavior="padding">
        <Group1>
          <StatusBar barStyle="light-content" backgroundColor="#fff" />

          <GoBack
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ArrowLeft source={arrowLeft} />
          </GoBack>
          <ScrollView>
            <Content>
              <Title>Preencha os dados do boleto</Title>
              <Form>
                <Input
                  value={slip?.name}
                  onChangeText={(e) => setSlip({ ...slip, name: e })}
                  placeholder="Nome do boleto"
                  icon={iconSlip}
                />
                <Input
                  value={slip.dueDate}
                  onChangeText={(e) => setSlip({ ...slip, dueDate: e })}
                  placeholder="Vencimento"
                  icon={x}
                  mask={"[00]/[00]/[0000]"}
                />
                <Input
                  value={slip.value}
                  onChangeText={(e) => {
                    setSlip({ ...slip, value: e });
                  }}
                  placeholder="Valor"
                  icon={wallet}
                  keyboardType="number-pad"
                  currency
                />
                <Input
                  value={slip.code}
                  onChangeText={(e) => setSlip({ ...slip, code: e })}
                  placeholder="Código"
                  icon={barCodeSlip}
                />
                <Input
                  valueCheckBox={slip.everyMonth}
                  onChangeCheckBox={(e) => {
                    setSlip({ ...slip, everyMonth: e });
                  }}
                  placeholder="Recorrente"
                  checkbox
                  icon={calendar}
                />
              </Form>
            </Content>
          </ScrollView>
        </Group1>
      </KeyboardAvoidingView>
      <Actions>
        <Fill />

        <ContentButtons>
          <CancelButton
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <TextButtonCancel>Cancelar</TextButtonCancel>
          </CancelButton>
          <FillVertical />
          <ConfirmButton onPress={handleSaveSlip}>
            <TextButtonConfirm>Cadastrar</TextButtonConfirm>
          </ConfirmButton>
        </ContentButtons>
      </Actions>
    </Container>
  );
};
