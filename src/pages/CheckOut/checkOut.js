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

export default connect(mapStateToProps)(checkOut);