import {userActionTypes} from './userTypes'
export const userCurrent = user =>({
    type : userActionTypes.SET_CURRENT_USER,
    payload : user
})
