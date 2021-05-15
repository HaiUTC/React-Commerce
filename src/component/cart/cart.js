import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cartAction";
import { selectCartItemCount } from "../../redux/cart/cartSelector";
import { CartContainer, CartCountContainer, CartIconContainer } from './Cart-Styled';


const cart = ({ toggleCartHidden, countItem }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <CartIconContainer />
      <CartCountContainer>{countItem}</CartCountContainer>
    </CartContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  countItem: selectCartItemCount,
});

const mapDispathToProps = (dispath) => ({
  toggleCartHidden: () => dispath(toggleCartHidden()),
});

export default (connect(mapStateToProps, mapDispathToProps)(cart))
