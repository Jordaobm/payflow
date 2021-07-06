import { useNavigation } from "@react-navigation/core";
import React from "react";
import { useUser } from "../../contexts/user";
import {
  BolderText,
  ContentText,
  ProfileButton,
  ProfileData,
  ProfileImage,
  Welcome,
  WelcomeText,
} from "./styles";

export function Profile() {
  const { user, slips, handleLogoff } = useUser();

  const navigation = useNavigation();

  return (
    <ProfileData>
      <Welcome>
        <WelcomeText>
          Olá, <BolderText>{user?.name?.split(" ")[0]}</BolderText>
        </WelcomeText>
        <ContentText>Mantenha suas contas em dia</ContentText>
      </Welcome>
      <ProfileButton
        onPress={() => {
          navigation.navigate("Login");
          handleLogoff();
        }}
      >
        <ProfileImage source={{ uri: user.avatar_url }} />
      </ProfileButton>
    </ProfileData>
  );
}
