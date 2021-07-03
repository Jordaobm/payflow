import React from "react";
import {
  BolderText,
  Container,
  ContentMySlips,
  ContentSlips,
  ContentText,
  EmptyView,
  FillSeparatorMySlips,
  MySplips,
  ProfileData,
  ProfileImage,
  TotalSplips,
  Welcome,
  WelcomeText,
} from "./styles";
import RadialGradient from "react-native-radial-gradient";
import { useUser } from "../../contexts/user";
import { Navigation } from "../../components/Navigation";
import { ScrollView } from "react-native";
import { CardSlip } from "../../components/CardSlip";

export const Extract = () => {
  const { user, slips } = useUser();

  return (
    <Container>
      <RadialGradient
        style={{ width: "100%", height: "23%" }}
        colors={["#FFC480", "#FF941A"]}
        center={[200, 150]}
        radius={150}
      >
        <ProfileData>
          <Welcome>
            <WelcomeText>
              Olá, <BolderText>{user.name.split(" ")[0]}</BolderText>
            </WelcomeText>
            <ContentText>Mantenha suas contas em dia</ContentText>
          </Welcome>
          <ProfileImage source={{ uri: user.avatar_url }} />
        </ProfileData>
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
