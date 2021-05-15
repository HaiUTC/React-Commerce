import styled from "styled-components";
import { ReactComponent as ShoppingCart } from "../../assests/shopping-bag.svg";


export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CartIconContainer = styled(ShoppingCart)`
  width: 24px;
  height: 24px;
`;

export const CartCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
