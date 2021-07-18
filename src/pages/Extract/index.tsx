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
import { Slip, useUser } from "../../contexts/user";
import { Navigation } from "../../components/Navigation";
import { ScrollView } from "react-native";
import { CardSlip } from "../../components/CardSlip";
import { Profile } from "../../components/Profile";
import { StringToDate } from "../../utils/StringToDate";
import { DateToString } from "../../utils/DateToString";

export const Extract = () => {
  const { slips } = useUser();

  let AllSlips: Slip[] = [];

  slips.forEach((slip) => {
    if (slip.everyMonth) {
      const rangeMonth =
        StringToDate(slip.dueDate).getMonth() +
        1 -
        (StringToDate(slip.firstDueDate ?? "").getMonth() + 1);

      let i = rangeMonth;
      for (i; i > 0; i--) {
        const month = StringToDate(slip?.firstDueDate ?? "").getMonth() + i - 1;
        const day = StringToDate(slip?.firstDueDate ?? "").getDate();

        const date = new Date(new Date().getFullYear(), month, day);

        AllSlips.push({
          ...slip,
          paid: true,
          dueDate: DateToString(date) ?? "",
        });
      }
    } else {
      AllSlips.push({
        ...slip,
      });
    }
  });

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
          {AllSlips.filter((slip) => slip.paid).length} ao total
        </TotalSplips>
      </ContentMySlips>
      <FillSeparatorMySlips />
      <ScrollView>
        <ContentSlips>
          {AllSlips.filter((slip) => slip.paid).map((slip, index) => (
            <CardSlip type="EXTRACT" edit slip={slip} key={index} />
          ))}
        </ContentSlips>
        <EmptyView />
      </ScrollView>

      <Navigation page="Extract" />
    </Container>
  );
};
