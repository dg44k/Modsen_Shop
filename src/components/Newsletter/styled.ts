import { styled } from "styled-components";

export const StyledFormNewsletter = styled.div`
  position: relative;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;

  .error-message {
    color: #d82700;
    font-size: 8px;
  }
`;

export const StyledInputNewsletter = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  color: #707070;
  width: 360px;
  padding: 10px 30px 10px 0;

  border-bottom: 1px #000 solid;
`;

export const StyledButtonNewsletter = styled.input`
  position: absolute;
  top: -15%;
  left: 92%;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: none;
  color: #707070;
  padding-bottom: 8px;
`;
