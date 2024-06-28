import { FC } from "react";

import * as StyledComponents from "./styled";
import { InfoModalProps } from "./types";

const InfoModal: FC<InfoModalProps> = ({ show, children, onClose }) => {
  if (!show) return null;

  return (
    <StyledComponents.ModalBackground>
      <StyledComponents.ModalWrapper>
        <StyledComponents.ModalBody>{children}</StyledComponents.ModalBody>
        <StyledComponents.ModalFooter>
          <StyledComponents.ModalButton onClick={onClose}>
            Close
          </StyledComponents.ModalButton>
        </StyledComponents.ModalFooter>
      </StyledComponents.ModalWrapper>
    </StyledComponents.ModalBackground>
  );
};

export default InfoModal;
