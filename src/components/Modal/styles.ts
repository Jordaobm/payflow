import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 270px;

  align-items: center;
`;

export const Fill = styled.View`
  width: 43px;
  height: 2px;
  background-color: #b1b0b8;
  margin-top: 12px;
  margin-bottom: 24px;
`;

export const SlipInfo = styled.Text`
  font-family: "Lexend-Regular";
  font-size: 20px;
  line-height: 25px;
  color: #585666;

  max-width: 219px;
  text-align: center;
`;

export const BolderText = styled.Text`
  font-family: "Lexend-Bold";
`;

export const Actions = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 155px;
  height: 55px;
  justify-content: center;
  align-items: center;
  background: #fafafc;
  border: 1px solid #e3e3e6;
  border-radius: 5px;

  margin: 0 5px;
`;

export const TextCancelButton = styled.Text`
  font-family: "Lexend-Regular";
  font-size: 15px;
  line-height: 18px;
  color: #666666;
`;
export const ConfirmButton = styled.TouchableOpacity`
  width: 155px;

  height: 55px;
  justify-content: center;
  align-items: center;
  background: #ff941a;
  border-radius: 5px;
  margin: 0 5px;
`;

export const TextConfirmButton = styled.Text`
  font-family: "Lexend-Regular";
  font-size: 15px;
  line-height: 18px;
  color: #fff;
`;

export const FillBottom = styled.View`
  margin-top: 25px;
  width: 100%;
  height: 1px;
  background-color: #e3e3e6;
  margin-bottom: 16px;
`;

export const DeleteButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const IconTrash = styled.Image`
  width: 18px;
  height: 18px;
`;

export const DeleteSlip = styled.Text`
  margin-left: 16px;
  font-family: "Lexend-Regular";
  font-size: 15px;
  line-height: 18px;
  color: #e83f5b;
`;
