import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
const auth = getAuth(app);


export const AuthContext = createContext()


import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


    const createNewUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }


    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        setUser,
        createNewUser,
        signInUser,
        googleSignIn,
        logout
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('Currentuser:', currentUser);
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser?.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                // ToDo: remove token(if token stored in the client side)
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })

        return ()=>{
            return unSubscribe();
        }
    },[axiosPublic])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;