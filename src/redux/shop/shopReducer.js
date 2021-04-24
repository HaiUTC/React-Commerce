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

export default shopReducer