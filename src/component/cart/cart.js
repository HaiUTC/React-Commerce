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
