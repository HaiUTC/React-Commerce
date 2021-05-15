<<<<<<< HEAD
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASU ,
};

export const createUserProfile = async (userAuth, additionsData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionsData,
      });
    } catch (error) {
      console.log("Some error create user : " + error.message);
    }
  }
  return userRef;
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionSnapshotToMap = collections =>{
  const transformedCollecton = collections.docs.map(doc=>{
    const {title, items} = doc.data()

    return{
      routeName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items
    }
  })
  return transformedCollecton.reduce((accumulator, collection)=>{
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  },{})
}

firebase.initializeApp(config);

export const getCurrentUser = () =>{
  return new Promise((resolve, reject) =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });



export default firebase;
=======
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD80wikbDACROZ5YndCsdSlyKJMtSl9GUE",
  authDomain: "react-89441.firebaseapp.com",
  projectId: "react-89441",
  storageBucket: "react-89441.appspot.com",
  messagingSenderId: "535251726080",
  appId: "1:535251726080:web:df1959045e897f46804de5",
  measurementId: "G-K9XPJBQ0QH",
};



export const createUserProfile = async (userAuth, additionsData) =>{
  if(!userAuth) return
  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if(!snapShot.exists){
    const {displayName, email} = userAuth
    const createAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionsData
      })
    } catch (error) {
      console.log('Some error create user : '+error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt : 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
>>>>>>> 9b05af884294eed7eecd753d150631b0fa065e4c
