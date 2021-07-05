import React, { useState } from "react";

import { useUser } from "../../contexts/user";
import { useNavigation } from "@react-navigation/native";
import {
  BarCode,
  ButtonAddSlip,
  ButtonExtract,
  Container,
  ContentBarCode,
  Gradiente,
  Icon,
  People,
  Title,
} from "./styles";
import { barCode, iconAdd, iconList, people } from "../../icons";
import { SigInWithGoogle } from "../../components/SigInWithGoogle";
import { StatusBar } from "react-native";

export const Login = () => {
  const { handleSigInWithGoogle, user } = useUser();

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#FF941A" />

      <Gradiente
        style={{ width: "100%", height: "35%" }}
        colors={["#FFC480", "#FF941A"]}
        center={[200, 150]}
        radius={150}
      >
        <People resizeMode="contain" source={people} />
        <ButtonAddSlip>
          <Icon source={iconAdd} />
        </ButtonAddSlip>

        <ButtonExtract>
          <Icon source={iconList} />
        </ButtonExtract>
      </Gradiente>

      <ContentBarCode>
        <BarCode source={barCode} />
        <Title>Organize seus boletos em um só lugar</Title>
        <SigInWithGoogle
          loading={loading}
          title="SigIn With Google"
          onPress={async () => {
            setLoading(true);
            const logged = await handleSigInWithGoogle();

            if (logged?.name) {
              navigation.navigate("Home");
              setLoading(false);
            }
          }}
        />
      </ContentBarCode>
    </Container>
  );
};
