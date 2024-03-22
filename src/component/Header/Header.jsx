import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../provider/Authprovider';

const Header = () => {

    const {user,logOut} = useContext(Authcontext);
    console.log(user);

    const handelout = () =>{

        console.log('click me');
        logOut()
        .then(()=>{})
        .catch(error =>console.error(error))
    }
    return (
        <div >
            <div className='flex'>
                
               
                <div className="navbar bg-primary text-primary-content">
                <Link to='/auth' className="btn btn-ghost text-xl">Auth Master</Link>
                <Link to='/home' className="btn btn-ghost text-xl">Home</Link>
                <Link to='/order' className="btn btn-ghost text-xl">Order</Link>
               {user && <Link to='/profile' className="btn btn-ghost text-xl">Profile</Link>}
                    <Link to='/login' className="btn btn-ghost text-xl">Login</Link>
                    <Link to='/about' className="btn btn-ghost text-xl">Sign up</Link>
                    {
                        user? <>
                        <span>{user.email}</span>
                        <button onClick={handelout} className="btn btn-xs">Log Out</button>
                        </> : <Link to="/login">Login</Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Header;