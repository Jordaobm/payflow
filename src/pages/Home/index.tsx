import React from "react";
import { StatusBar, ScrollView } from "react-native";
import { useUser } from "../../contexts/user";
import {
  Container,
  ContentMySlips,
  ContentPaymentSlipCard,
  ContentSlips,
  EmptyView,
  FillSeparatorMySlips,
  MySplips,
  TotalSplips,
} from "./styles";
import RadialGradient from "react-native-radial-gradient";
import { PaymentSlipCard } from "../../components/PaymentSlipCard";
import { CardSlip } from "../../components/CardSlip";
import { Navigation } from "../../components/Navigation";
import { Profile } from "../../components/Profile";

const Home: React.FC = () => {
  const { slips } = useUser();
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#FF941A" />
      <RadialGradient
        style={{ width: "100%", height: "23%" }}
        colors={["#FFC480", "#FF941A"]}
        center={[200, 150]}
        radius={150}
      >
        <Profile />
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
            .filter((slip) => slip.paid === false || slip.everyMonth)
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
