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

export default cartItem;