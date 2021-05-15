import React from "react";
import { connect } from "react-redux"
import {CartDropDownContainer,CartItemCOntainer,CartEmpty} from './CartDropDown-Styled'
import {withRouter} from 'react-router-dom'
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/cartItem";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
const cartDropDown = ({ cartItems, history }) => {
  return (
    <CartDropDownContainer>
      <CartItemCOntainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <CartEmpty>Cart is empty</CartEmpty>
        )}
        </CartItemCOntainer>
        <hr/><hr/>
      <CustomButton onClick={()=> history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </CartDropDownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default compose(
  connect(mapStateToProps),
  withRouter
)(cartDropDown)

