import { takeEvery, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/untils";
import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop.action";
import ShopActionTypes from "./shop.type";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap,snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message))
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}

export function* shopSaga(){
  yield all([
    call(fetchCollectionStart)
  ])
}