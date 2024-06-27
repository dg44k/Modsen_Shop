import styled from "styled-components";

export const WrapperAsideStyled = styled.div`
  height: auto;
  grid-area: aside;
  max-width: 300px;
`;

export const WrapperSearchStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 250px;
  border-bottom: 1px #d8d8d8 solid;
  padding: 10px 0;
  margin-bottom: 40px;
`;

export const InputSearchStyled = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  color: #707070;
  padding-right: 30px;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }

  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }

  &::-ms-clear {
    display: none;
  }
`;

export const WrapperIconSearchStyled = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    width: 19px;
    cursor: pointer;
  }
`;
