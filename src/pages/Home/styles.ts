import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const ProfileData = styled.View`
  display: flex;
  padding: 0 24px;
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Welcome = styled.View``;

export const WelcomeText = styled.Text`
  font-family: "Lexend-Regular";
  font-size: 20px;
  line-height: 25px;

  color: #ffffff;
`;

export const BolderText = styled.Text`
  font-family: "Lexend-SemiBold";
`;

export const ContentText = styled.Text`
  font-family: "Lexend-Regular";
  margin-top: 4px;
  font-size: 13px;
  line-height: 16px;
  color: #fafafc;
`;

export const ProfileImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 8px;
`;

export const ContentPaymentSlipCard = styled.View`
  position: relative;
  top: -6%;
  padding: 0 24px;
`;

export const ContentMySlips = styled.View`
  padding: 0 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MySplips = styled.Text`
  font-family: Lexend-SemiBold;
  font-size: 20px;
  line-height: 25px;

  color: #585666;
`;
export const TotalSplips = styled.Text`
  font-family: "Lexend-Regular";
  font-size: 14px;
  line-height: 16px;
  color: #706e7a;
`;

export const FillSeparatorMySlips = styled.View`
  height: 1px;
  background-color: #e3e3e6;
  margin: 24px 24px 32px 24px;
`;

export const ContentSlips = styled.View`
  width: 100%;
  padding: 0 24px;
`;

export const EmptyView = styled.View`
  width: 100%;
  height: 20px;
`;
