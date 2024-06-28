import styled from "styled-components";

export const StyledContactUs = styled.div`
  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  margin: 90px 0;
`;

export const StyledContactUsHeadingOne = styled.h1`
  font-weight: 500;
  font-size: 33px;
  text-align: center;
`;

export const StyledContactUsHeadingThree = styled.h3`
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  margin-top: 40px;
`;

export const StyledGridBlockInput = styled.div`
  display: grid;
  margin: 105px auto;
  grid-template-columns: 1fr 1fr;
  gap: 95px;
  width: 900px;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 10px 0;
  outline: none;
  border: none;
  border-bottom: 1px solid #d8d8d8;
  width: 100%;
`;

export const TextArea = styled.textarea`
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid #d8d8d8;
  width: 100%;
  resize: none;
`;

export const Button = styled.button`
  max-width: 500px;
  width: 100%;
  padding: 10px;
  color: #fff;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;

  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;

  .error-message {
    color: #d82700;
    font-size: 8px;
  }
`;
