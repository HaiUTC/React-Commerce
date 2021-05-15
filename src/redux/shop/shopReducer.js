<<<<<<< HEAD
import ShopActionTypes from './shop.type'

const initialState = {
    collections : null,
    isFetching : false,
    errorMessage : undefined
}

const shopReducer = (state = initialState, action) =>{
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTION_START:
            return{
                ...state,
                isFetching : true
            }
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
            return{
                ...state,
                isFetching : false,
                collections : action.payload
            }
        case ShopActionTypes.FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching : false,
                errorMessage : action.payload
            }
        default:
            return state
    }
}

=======
import SHOP_DATA from '../../pages/shop/shop.data'

const initialState = {
    collections : SHOP_DATA
}

const shopReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return state
    }
}

>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
export default shopReducer