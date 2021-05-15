import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
        width: 100%;
        height: 100%;
      }
`;
export const Info = styled.span`
  width: 23%;
`;
export const Quantity = styled.span`
  width: 23%;
  padding-left: 20px;
  display: flex;
`;
export const QuantityArrow = styled.div`
  padding: 0 8px;
  cursor: pointer;
`;
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
