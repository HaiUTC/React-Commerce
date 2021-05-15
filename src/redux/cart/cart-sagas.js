import {all,call,put,takeLatest} from 'redux-saga/effects'
import userActionTypes from '../user/userTypes'
import {clearCart} from './cartAction'


export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}

export function* cartSaga(){
    yield all([call(onSignOutSuccess)])
}