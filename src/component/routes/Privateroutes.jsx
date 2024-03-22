import React, { useContext } from 'react';
import { Authcontext } from '../../provider/Authprovider';
import { Navigate } from 'react-router-dom';

const Privateroutes = ({children}) => {
    const {user,loading} = useContext(Authcontext);
    if(loading){
        return <div className="skeleton w-32 h-32"></div>
    }
    console.log(user);
    if(user){

        return children;
    }
    return <Navigate to= "/login" replace ={true}></Navigate>
};

export default Privateroutes;