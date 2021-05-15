<<<<<<< HEAD
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
=======
import React from "react";
import "./cart.scss";
import { ReactComponent as ShoppingCart } from "../../assests/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartAction";
import { selectCartItemCount } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
const cart = ({ toggleCartHidden, countItem }) => {
  return (
    <div className="cart" onClick={toggleCartHidden}>
      <ShoppingCart className="cart-icon" />
      <span className="cart-count">{countItem}</span>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  countItem: selectCartItemCount,
});

const mapDispathToProps = (dispath) => ({
  toggleCartHidden: () => dispath(toggleCartHidden()),
});

export default (connect(mapStateToProps, mapDispathToProps)(cart))
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
