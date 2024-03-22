import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateCurrentUser, signOut } from "firebase/auth";

import app from './../fireBase/firebase.config';
const auth = getAuth(app);

export const Authcontext = createContext(null);

const Authprovider = ({ children }) => {

    // const user = {displayName: 'MD ABDUS SHOBHAN'} 

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
//This Block is for sign in.....
    const createUser = (email, password) =>{

        return createUserWithEmailAndPassword(auth, email, password)
    }


//This Block is for Login section... 
    const signIn = (email, password) =>{

        return createUserWithEmailAndPassword(auth, email, password)
    }

    //logOut
const logOut = () =>{

    return signOut(auth);
}


    // UseEffect....
//observe Auth State Change....
    useEffect(()=>{

     const unsubscribe= onAuthStateChanged(auth,updateCurrentUser=>{

            console.log('auth state change',updateCurrentUser);
            setUser(updateCurrentUser);
            setLoading(false);
           
        })
        
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {

        user,
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;