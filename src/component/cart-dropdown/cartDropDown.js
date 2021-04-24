import React from "react";
import { connect } from "react-redux"
import "./cartDropDown.scss"
import {withRouter} from 'react-router-dom'
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/cartItem";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
const cartDropDown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty'>Cart is empty</span>
        )}
      </div>
      <CustomButton onClick={()=> history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(cartDropDown))
