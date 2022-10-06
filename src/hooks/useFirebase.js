import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase =()=>{
    const [user,setUser] =useState({});
    useEffect(()=>{

    },[]);

   const signinWithGoogle =()=>{
    
   signInWithPopup(auth, provider)
   .then((result) => {
    const user = result.user;
    setUser(user);
    console.log(user);
   })
   
   }

   const handleSignout =()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
   }

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        setUser(user)
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
   },[])

    // return[user,setUser];
    return{user,signinWithGoogle,handleSignout}
}
export default useFirebase;