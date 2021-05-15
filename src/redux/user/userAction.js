import userActionTypes from './userTypes'

export const googleSigninStart = () =>({
    type : userActionTypes.GOOGLE_SIGNIN_START
})

export const emailSigninStart = emailAndPassword =>({
    type : userActionTypes.EMAIL_SIGNIN_START,
    payload : emailAndPassword
})

export const signInSuccess = user =>({
    type : userActionTypes.SIGN_IN_SUCCESS,
    payload : user
})

export const signInFailure = error =>({
    type : userActionTypes.SIGN_IN_FAILURE,
    payload : error
})


export const signOutStart = () =>({
    type : userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () =>({
    type : userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) =>({
    type : userActionTypes.SIGN_OUT_FAILURE,
    payload : error
})

export const signUpStart = (userInfo) =>({
    type : userActionTypes.SIGN_UP_START,
    payload : userInfo
})

export const signUpSuccess = ({user,additionalData}) =>({
    type : userActionTypes.SIGN_UP_SUCCESS,
    payload : {user,additionalData}
})

export const signUpFailure = (error) =>({
    type : userActionTypes.SIGN_UP_FAILURE,
    payload : error
})

export const checkUserSession = () =>({
    type : userActionTypes.CHECK_USER_SESSION
})
