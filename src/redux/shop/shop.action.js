import ShopActionTypes from "./shop.type";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/untils";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});
export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionFailure = (errMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errMessage,
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart())

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
        
      })
      .catch((err) => dispatch(fetchCollectionFailure(err.message)));
  };
};

