import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: space-between;
`;

export const GoBack = styled.TouchableOpacity`
  margin-top: 18px;
  margin-left: 20px;

  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const ArrowLeft = styled.Image`
  width: 24px;
  height: 24px;
`;

export const Content = styled.View`
  margin-top: 24px;
  padding: 0 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: "Lexend-Regular";
  font-size: 20px;
  line-height: 25px;
  color: #585666;
  max-width: 189px;
  text-align: center;
`;
export const Form = styled.View`
  margin-top: 24px;
  /* width: 100%;
  height: 100%; */
`;

export const Actions = styled.View`
  width: 100%;
  position: relative;
  bottom: 0;
`;
export const ContentButtons = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const Fill = styled.View`
  width: 100%;
  height: 1px;
  background: #e3e3e6;
`;
export const CancelButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  max-height: 55px;
  align-items: center;
  justify-content: center;
`;
export const ConfirmButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  max-height: 55px;
  align-items: center;
  justify-content: center;
`;
export const TextButtonCancel = styled.Text`
  font-family: "Lexend-Regular";
  font-size: 15px;
  line-height: 18px;
  color: #706e7a;
`;
export const TextButtonConfirm = styled.Text`
  font-family: "Lexend-Regular";
  font-size: 15px;
  line-height: 18px;
  color: #ff941a;
`;
export const Group1 = styled.View``;

export const FillVertical = styled.View`
  width: 1px;
  height: 55px;
  background: #e3e3e6;
`;
