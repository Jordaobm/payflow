import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { useUser } from "../../contexts/user";
import {
  BolderText,
  Container,
  ContentMySlips,
  ContentPaymentSlipCard,
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
import { PaymentSlipCard } from "../../components/PaymentSlipCard";
import { CardSlip } from "../../components/CardSlip";
import { Navigation } from "../../components/Navigation";

const Home: React.FC = () => {
  const { user, slips } = useUser();
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#FF941A" />
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

      <ContentPaymentSlipCard>
        <PaymentSlipCard />
      </ContentPaymentSlipCard>

      <ContentMySlips>
        <MySplips>Meus boletos</MySplips>
        <TotalSplips>
          {slips.filter((slip) => slip.paid === false).length} ao total
        </TotalSplips>
      </ContentMySlips>
      <FillSeparatorMySlips />
      <ScrollView>
        <ContentSlips>
          {slips
            .filter((slip) => slip.paid === false)
            .map((slip, index) => (
              <CardSlip edit slip={slip} key={index} />
            ))}
        </ContentSlips>
        <EmptyView />
      </ScrollView>
      <Navigation page="Home" />
    </Container>
  );
};

export default Home;
