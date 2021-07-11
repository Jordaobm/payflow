import styled from "styled-components/native";
import RadialGradient from "react-native-radial-gradient";

export const Container = styled.View`
  flex: 1;
  background: white;
  justify-content: space-between;
  align-items: center;
`;
export const Gradiente = styled(RadialGradient)`
  align-items: center;
`;
export const People = styled.Image`
  width: 100%;
  height: 130%;
  position: relative;
  top: 15%;
`;

export const BarCode = styled.Image`
  width: 72px;
  height: 44px;
`;
export const ContentBarCode = styled.View`
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`;
export const Title = styled.Text`
  margin-top: 24px;
  font-family: "Lexend-SemiBold";
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #585666;
  margin-bottom: 40px;

  max-width: 236px;
`;

export const Icon = styled.Image`
  width: 22px;
  height: 22px;
`;
export const ButtonAddSlip = styled.View`
  position: relative;
  top: -44%;
  left: -21%;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background: #585666;
  border-radius: 5px;
`;

export const ButtonExtract = styled.View`
  position: relative;
  top: -98%;
  left: 24%;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background: #585666;
  border-radius: 5px;
`;
