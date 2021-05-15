<<<<<<< HEAD
import React from 'react'
import {CheckOutPage,CheckOutBlock,CheckOutHeader,Total} from './CheckOut-Styled'
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector';
import CheckOutItem from '../../component/checkout-item/checkOutItem';
import StripeButton from '../../component/stripe-button/stripeButton';
const checkOut = ({cartItems,totalPrice}) =>{
    return (
        <CheckOutPage>
            <CheckOutHeader>
                <CheckOutBlock>
                    <span>Product</span>
                </CheckOutBlock>
                <CheckOutBlock>
                    <span>Description</span>
                </CheckOutBlock>
                <CheckOutBlock>
                    <span>Quantity</span>
                </CheckOutBlock>
                <CheckOutBlock>
                    <span>Price</span>
                </CheckOutBlock>
                <CheckOutBlock>
                    <span>Remove</span>
                </CheckOutBlock>
            </CheckOutHeader>
            {
                cartItems.map(cartItem=>(
                    <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <Total>
                <span>{totalPrice}$</span>
            </Total>
            <StripeButton price={totalPrice}/>
        </CheckOutPage>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalPrice : selectCartTotal
})

=======
import React from 'react'
import './checkOut.scss'
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector';
import CheckOutItem from '../../component/checkout-item/checkOutItem';
import StripeButton from '../../component/stripe-button/stripeButton';
const checkOut = ({cartItems,totalPrice}) =>{
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem=>(
                    <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <div className='total'>
                <span>{totalPrice}$</span>
            </div>
            <StripeButton price={totalPrice}/>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalPrice : selectCartTotal
})

>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
export default connect(mapStateToProps)(checkOut);