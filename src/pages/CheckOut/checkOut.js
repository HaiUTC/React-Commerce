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

export default connect(mapStateToProps)(checkOut);