import { FC } from "react";

import {
  ModalBackground,
  ModalBody,
  ModalButton,
  ModalFooter,
  ModalWrapper,
} from "./styled";
import { InfoModalProps } from "./types";

const InfoModal: FC<InfoModalProps> = ({ show, children, onClose }) => {
  if (!show) return null;

  return (
    <ModalBackground>
      <ModalWrapper>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <ModalButton onClick={onClose}>Close</ModalButton>
        </ModalFooter>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default InfoModal;
