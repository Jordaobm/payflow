import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native-animatable";
import ReactModal from "react-native-modal";
import { Slip, useUser } from "../../contexts/user";
import { trash } from "../../icons";
import { deleteSlip, updateSlip } from "../../services/FirestoreDatabase";
import { formatCurrency } from "../../utils/formatValue";
import {
  Actions,
  BolderText,
  ButtonDeleteContainer,
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
  type?: "HOME" | "EXTRACT";
}

export const Modal = ({
  closeModal,
  isOpen,
  slip,
  type = "HOME",
}: ModalProps) => {
  const { loadSlips } = useUser();

  return (
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
            O boleto <BolderText>{slip.name}</BolderText> no valor de {""}
            <BolderText>{formatCurrency(Number(slip.value))}</BolderText> foi
            pago?
          </SlipInfo>

          {type === "HOME" && (
            <Actions>
              <CancelButton onPress={() => closeModal(false)}>
                <TextCancelButton>Ainda não</TextCancelButton>
              </CancelButton>
              <ConfirmButton
                onPress={() => {
                  updateSlip(slip);
                  loadSlips();
                  closeModal(false);
                }}
              >
                <TextConfirmButton>Sim</TextConfirmButton>
              </ConfirmButton>
            </Actions>
          )}
          <ButtonDeleteContainer>
            <FillBottom />

            <DeleteButton
              onPress={() => {
                deleteSlip(slip);
                loadSlips();
                closeModal(false);
              }}
            >
              <IconTrash source={trash} />
              <DeleteSlip>Deletar boleto</DeleteSlip>
            </DeleteButton>
          </ButtonDeleteContainer>
        </Container>
      </ReactModal>
    </View>
  );
};
