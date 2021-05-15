<<<<<<< HEAD
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

=======
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
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
