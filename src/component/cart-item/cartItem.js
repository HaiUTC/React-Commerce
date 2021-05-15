<<<<<<< HEAD
import React from 'react';
import {CartItemContainer,CartItemDetails,CartItemPriceAndName,CartImg} from './CartItem-Styled'
const cartItem = ({item : {imageUrl, name, price, qty}}) =>{
    return (
        <CartItemContainer>
            <CartImg src={imageUrl} alt='cartItem' />
            <CartItemDetails>
                <CartItemPriceAndName>{name}</CartItemPriceAndName>
                <CartItemPriceAndName>
                    {qty} x {price}$
                </CartItemPriceAndName>
            </CartItemDetails>
        </CartItemContainer>
    );
}

=======
import React from 'react';
import './cartItem.scss'
const cartItem = ({item : {imageUrl, name, price, qty}}) =>{
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='cartItem' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {qty} x {price}$
                </span>
            </div>
        </div>
    );
}

>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
export default cartItem;