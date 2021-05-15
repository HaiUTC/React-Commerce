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


export default cartItem;