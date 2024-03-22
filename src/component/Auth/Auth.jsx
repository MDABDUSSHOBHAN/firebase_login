import React, { useContext } from 'react';
import { Authcontext } from '../../provider/Authprovider';


const Auth = () => {
    const user = useContext(Authcontext);

    return (
        <div>
            <h3>This is Auth Master {user && <span>{user.displayName}</span>}</h3>
        </div>
    );
};

export default Auth;