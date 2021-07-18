import React from "react";
import { View } from "react-native-animatable";
import ReactModal from "react-native-modal";
import { useNotification } from "../../contexts/notifications";
import { Slip, useUser } from "../../contexts/user";
import { trash } from "../../icons";
import { deleteSlip, updateSlip } from "../../services/FirestoreDatabase";
import { DateToString } from "../../utils/DateToString";
import { formatCurrency } from "../../utils/formatValue";
import { StringToDate } from "../../utils/StringToDate";
import { ModalText } from "./ModalText";
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
  Warning,
  WarningStrong,
} from "./styles";

interface ModalProps {
  isOpen: boolean;
  closeModal: (value: boolean) => void;
  slip: Slip;
  type?: "HOME" | "EXTRACT";
  isRecurringAndExpirationMonthIsGreaterCurrentMonth?: boolean;
}

export const Modal = ({
  closeModal,
  isOpen,
  slip,
  type = "HOME",
  isRecurringAndExpirationMonthIsGreaterCurrentMonth = false,
}: ModalProps) => {
  const { loadSlips } = useUser();

  const { cancelNotifications } = useNotification();

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
          {!slip?.paid ? (
            isRecurringAndExpirationMonthIsGreaterCurrentMonth ? (
              <ModalText slip={slip} />
            ) : (
              <SlipInfo>
                O boleto <BolderText>{slip.name}</BolderText> no valor de {""}
                <BolderText>
                  {formatCurrency(Number(slip.value))}
                </BolderText>{" "}
                foi pago?
              </SlipInfo>
            )
          ) : (
            <ModalText slip={slip} />
          )}

          {!slip?.paid && !isRecurringAndExpirationMonthIsGreaterCurrentMonth && (
            <Actions>
              <CancelButton onPress={() => closeModal(false)}>
                <TextCancelButton>Ainda não</TextCancelButton>
              </CancelButton>
              <ConfirmButton
                onPress={() => {
                  if (slip.everyMonth) {
                    const dateSlip = StringToDate(slip.dueDate);

                    dateSlip.setMonth(dateSlip.getMonth() + 1);

                    const dateString = DateToString(dateSlip);

                    updateSlip(slip, {
                      ...slip,
                      paid: false,
                      dueDate: dateString,
                      code: slip?.code ?? "",
                      databaseId: slip?.databaseId ?? "",
                    });
                  } else {
                    updateSlip(slip, {
                      ...slip,
                      paid: true,
                      code: slip?.code ?? "",
                      databaseId: slip?.databaseId ?? "",
                    });
                  }

                  cancelNotifications(slip);
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
                cancelNotifications(slip);
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
