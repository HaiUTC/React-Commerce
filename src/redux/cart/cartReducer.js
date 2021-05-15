import cartActionType from "./cartTypes";
import { addToCart, clearFromCart, removeFromCart, addFromCart } from "./cartUtils";
const initialState = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART_ITEM:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload),
      };
    case cartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearFromCart(state.cartItems, action.payload),
      };
    case cartActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload),
      };
    case cartActionType.ADD_FROM_CART:
      return {
        ...state,
        cartItems: addFromCart(state.cartItems, action.payload),
      };
    case cartActionType.CLEAR_CART:
      return{
        ...state,
        cartItems : []
      }
    default:
      return state;
  }
};

export default cartReducer;
