import styled from "styled-components";

export const WrapperInfoDetailProduct = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperHeaderInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 65px;
`;

export const WrapperInfoCart = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const StyledHeading = styled.h2`
  font-size: 26px;
`;

export const StyledPrice = styled.p`
  font-size: 20px;
  color: #a18a68;
`;

export const WrapperRatingProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 100px;
`;

export const WrapperFlexRatingProduct = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StyledRatingCount = styled.p`
  color: #707070;
`;

export const MiniDescriptionProduct = styled.p`
  color: #707070;
`;

export const WrapperFooterInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const WrapperLinks = styled.div`
  display: flex;
  gap: 24px;

  & > .icon-link {
    cursor: pointer;
    color: #707070;
    transition: 0.3s ease-in-out;
  }

  & > .icon-link:hover {
    color: #000;
  }
`;

export const BoldCategories = styled.b`
  color: #000;
`;

export const InfoCategories = styled.p`
  color: #707070;
`;
