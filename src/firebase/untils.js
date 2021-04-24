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