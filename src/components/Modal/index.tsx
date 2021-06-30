import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native-animatable";
import ReactModal from "react-native-modal";
import { Slip } from "../../contexts/user";
import { trash } from "../../icons";
import { formatCurrency } from "../../utils/formatValue";
import {
  Actions,
  BolderText,
  CancelButton,
  ConfirmButton,
  Container,
  DeleteButton,
  DeleteSlip,
  Fill,
  FillBottom,
  IconTrash,
  SlipInfo,
  TextCancelButton,
  TextConfirmButton,
} from "./styles";

interface ModalProps {
  isOpen: boolean;
  closeModal: (value: boolean) => void;
  slip: Slip;
}

export const Modal = ({ closeModal, isOpen, slip }: ModalProps) => (
  <View>
    <ReactModal
      onSwipeComplete={() => closeModal(false)}
      swipeDirection="down"
      testID={"modal"}
      isVisible={isOpen}
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
    >
      <Container>
        <Fill />
        <SlipInfo>
          O boleto <BolderText>{slip.name}</BolderText> no valor de{" "}
          <BolderText>{formatCurrency(slip.value)}</BolderText> foi pago?
        </SlipInfo>

        <Actions>
          <CancelButton onPress={() => closeModal(false)}>
            <TextCancelButton>Ainda não</TextCancelButton>
          </CancelButton>
          <ConfirmButton onPress={() => closeModal(false)}>
            <TextConfirmButton>Sim</TextConfirmButton>
          </ConfirmButton>
        </Actions>

        <FillBottom />

        <DeleteButton onPress={() => closeModal(false)}>
          <IconTrash source={trash} />
          <DeleteSlip>Deletar boleto</DeleteSlip>
        </DeleteButton>
      </Container>
    </ReactModal>
  </View>
);
