import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const ContentMySlips = styled.View`
  margin-top: 32px;
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
  margin: 24px 24px 16px 24px;
`;

export const ContentSlips = styled.View`
  width: 100%;
  padding: 0 24px 55px 24px;
`;

export const EmptyView = styled.View`
  width: 100%;
  height: 20px;
`;
