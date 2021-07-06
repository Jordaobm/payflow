import React from "react";
import {
  Container,
  ContentMySlips,
  ContentSlips,
  EmptyView,
  FillSeparatorMySlips,
  MySplips,
  TotalSplips,
} from "./styles";
import RadialGradient from "react-native-radial-gradient";
import { useUser } from "../../contexts/user";
import { Navigation } from "../../components/Navigation";
import { ScrollView } from "react-native";
import { CardSlip } from "../../components/CardSlip";
import { useNavigation } from "@react-navigation/native";
import { Profile } from "../../components/Profile";

export const Extract = () => {
  const { user, slips, handleLogoff } = useUser();

  const navigation = useNavigation();

  return (
    <Container>
      <RadialGradient
        style={{ width: "100%", height: "23%" }}
        colors={["#FFC480", "#FF941A"]}
        center={[200, 150]}
        radius={150}
      >
        <Profile />
      </RadialGradient>

      <ContentMySlips>
        <MySplips>Meus extratos</MySplips>
        <TotalSplips>
          {slips.filter((slip) => slip.paid).length} ao total
        </TotalSplips>
      </ContentMySlips>
      <FillSeparatorMySlips />
      <ScrollView>
        <ContentSlips>
          {slips
            .filter((slip) => slip.paid)
            .map((slip, index) => (
              <CardSlip type="EXTRACT" edit slip={slip} key={index} />
            ))}
        </ContentSlips>
        <EmptyView />
      </ScrollView>

      <Navigation page="Extract" />
    </Container>
  );
};
