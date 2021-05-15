import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./userTypes";
import { auth, createUserProfile, getCurrentUser, googleProvider } from "../../firebase/untils";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./userAction";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfile, user);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfile, user);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* SignUp({payload: {email,password,displayName}}){
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email,password)
    const userInfo = {...user,displayName}
    yield call(createUserProfile, userInfo);
    yield put(signUpSuccess({user, additionalData : {displayName}}));
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* isAuthenticated(){
  try {
    const userAuth = yield getCurrentUser()
    if(!userAuth) return
    const userRef = yield call(createUserProfile, userAuth);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}
export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}
export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}
export function* onSignUpStart(){
  yield takeLatest(userActionTypes.SIGN_UP_START,SignUp)
}
export function* onCheckUserSession(){
  yield takeLatest(userActionTypes.CHECK_USER_SESSION,isAuthenticated)
}

export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onCheckUserSession),
    call(onSignUpStart)
  ]);
}
