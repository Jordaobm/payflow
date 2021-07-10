import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  ToastAndroid,
} from "react-native";
import Toast from "react-native-toast-message";
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

  const [error, setError] = useState(false);

  const { user, loadSlips } = useUser();

  const navigation = useNavigation();

  const handleSaveSlip = async () => {
    if (slip.name && slip.dueDate && slip.value) {
      await saveSlip(user, {
        ...slip,
        paid: false,
        everyMonth: slip.everyMonth ?? false,
      });
      await loadSlips();
      navigation.navigate("Home");
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: "Ocorreu um erro",
        text2: "Preencha ao menos um nome, data de vencimento e valor",
        autoHide: true,
        onHide: () => {
          setError(false);
        },
      });
    }
  }, [error]);

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
