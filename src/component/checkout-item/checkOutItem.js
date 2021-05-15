import React from 'react';
import { connect } from "react-redux";
import { clearItemFromCart, removeItemFromCart, addItemFromCart } from '../../redux/cart/cartAction';
import {CheckOutItemContainer,ImageContainer,Info,Quantity,QuantityArrow,RemoveButton} from './CheckOutItem-Styled'
const checkOutItem = ({ cartItem,clearItem,removeItem, addItem }) =>{
    const {imageUrl, name, qty, price } = cartItem
    return (
        <CheckOutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'/>
            </ImageContainer>
            <Info>{name}</Info>
            <Quantity>
                <QuantityArrow onClick={()=> removeItem(cartItem)}>&#10094;</QuantityArrow>
                {qty}
                <QuantityArrow onClick={()=> addItem(cartItem)}>&#10095;</QuantityArrow>
            </Quantity>
            <Info>{price}</Info>
            <RemoveButton onClick={()=>clearItem(cartItem)}>&#10005;</RemoveButton>
        </CheckOutItemContainer>
    );
}
const mapDispatchToProps = dispatch =>({
    clearItem : (item) => dispatch(clearItemFromCart(item)),
    removeItem : (item) => dispatch(removeItemFromCart(item)),
    addItem : (item) => dispatch(addItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(checkOutItem);