import { createContext,useState,useEffect,useContext } from "react";
import { auth } from '../config/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'

const AuthContext = createContext()


export function AuthContextProvider ({children}){

    const [user,setUser] = useState({})

    function signUp (email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function signIn (email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logout(){
        return signOut(auth)
    }

    useEffect(() => {
      const  unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser)
      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    



    return(
        <AuthContext.Provider value={{signUp,signIn,logout,user}}>
            {children}
        </AuthContext.Provider>
    )
}


export function UserAuth(){
    return useContext(AuthContext)
}