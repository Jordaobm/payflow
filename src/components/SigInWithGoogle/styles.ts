import styled from "styled-components/native";

export const ButtonStyle = styled.TouchableOpacity`
  width: 295px;
  height: 56px;

  display: flex;
  flex-direction: row;

  border-radius: 4px;
  background-color: #fafafc;

  border: 1px solid #e3e3e6;
`;

export const ContentImageGoogle = styled.View`
  width: 58px;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Fill = styled.View`
  width: 1px;
  height: 56px;
  background-color: #e3e3e6;
`;

export const ContentText = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image``;

export const TextGoogleButton = styled.Text`
  font-family: "Lexend-Regular";
  font-size: 15px;
  line-height: 18px;

  /* Gray */

  color: #666666;
`;
