import { FirebaseError, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDmgjKySv1jPM9Q_zLX7gjiVZq1mRsuxD4",
  authDomain: "netflix-clone-52d73.firebaseapp.com",
  projectId: "netflix-clone-52d73",
  storageBucket: "netflix-clone-52d73.firebasestorage.app",
  messagingSenderId: "74925620606",
  appId: "1:74925620606:web:17487da6715300b93d072f",
  measurementId: "G-ZTHQR6TNX2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name:string,email:string,password:string):Promise<void>=>{
    try {
       const res = await createUserWithEmailAndPassword(auth,email,password)
       const user = res.user
       await addDoc(collection(db,'user'),{
        uid:user.uid,
        name,
        authProvider:"local",
        email
       })
    } catch (error) {
        if(error instanceof FirebaseError){
            console.log(error);
            toast.error(error.code)
        }
    }
}

const login = async (email:string,password:string):Promise<void>=>{
    try {
       await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        if(error instanceof FirebaseError){
            console.log(error);
            toast.error(error.code)
        }
        
    }
}

const logout = async():Promise<void>=>{
        signOut(auth)
}

export {auth,db,login,signup,logout}