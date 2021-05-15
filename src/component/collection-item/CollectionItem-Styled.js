import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton";

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;
export const CustomButtonStyled = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
`;
export const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.8;
    }
    ${CustomButtonStyled} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const InfoName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const InfoPrice = styled.span`
  width: 10%;
`;
