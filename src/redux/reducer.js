<<<<<<< HEAD
import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './cart/cartReducer'
import directoryReducer from './directory/directoryReduce'
import shopReducer from './shop/shopReducer'
import userReducer from './user/userReducer'

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart','user']
}
const rootReducer =  combineReducers({
    user : userReducer,
    cart : cartReducer,
    directory : directoryReducer,
    shop : shopReducer
})

=======
import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './cart/cartReducer'
import directoryReducer from './directory/directoryReduce'
import shopReducer from './shop/shopReducer'
import userReducer from './user/userReducer'

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart','user']
}
const rootReducer =  combineReducers({
    user : userReducer,
    cart : cartReducer,
    directory : directoryReducer,
    shop : shopReducer
})

>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
export default persistReducer(persistConfig, rootReducer)