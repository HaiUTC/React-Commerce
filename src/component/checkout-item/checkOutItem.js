import React from 'react';
import { connect } from "react-redux";
import { clearItemFromCart, removeItemFromCart, addItemFromCart } from '../../redux/cart/cartAction';
import './checkOutItem.scss';
const checkOutItem = ({ cartItem,clearItem,removeItem, addItem }) =>{
    const {imageUrl, name, qty, price } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> removeItem(cartItem)}>&#10094;</div>
                {qty}
                <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
        </div>
    );
}
const mapDispatchToProps = dispatch =>({
    clearItem : (item) => dispatch(clearItemFromCart(item)),
    removeItem : (item) => dispatch(removeItemFromCart(item)),
    addItem : (item) => dispatch(addItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(checkOutItem);