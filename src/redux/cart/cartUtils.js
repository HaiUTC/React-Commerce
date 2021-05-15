export const addToCart = (cartItems, itemAddToCart) =>{
    const existingItem = cartItems.find(cartItem => cartItem.id === itemAddToCart.id)
    if(existingItem){
        return cartItems.map(cartItem=> cartItem.id === itemAddToCart.id ? {...cartItem, qty : cartItem.qty + 1} : cartItem)
    }
    return [...cartItems, {...itemAddToCart, qty : 1}]
}
export const clearFromCart = (cartItems, itemRemove) =>{
    return cartItems.filter(cartItem => cartItem.id !== itemRemove.id)
}
export const removeFromCart = (cartItems, itemRemove) =>{
    const existingItem = cartItems.find(cartItem => cartItem.id === itemRemove.id)
    if(existingItem.qty===1){
        return cartItems.filter(cartItem => cartItem.id !== itemRemove.id)
    }
    return cartItems.map(cartItem=>
        cartItem.id === itemRemove.id ?
        {...cartItem, qty : cartItem.qty -1}
        : cartItem)
}
export const addFromCart = (cartItems, itemRemove) =>{
    return cartItems.map(cartItem=>
        cartItem.id === itemRemove.id ?
        {...cartItem, qty : cartItem.qty + 1}
        : cartItem)
}