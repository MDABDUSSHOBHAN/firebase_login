import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Authcontext } from '../../provider/Authprovider';
const Login = () => {

const handelLogin = event =>{

    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password =from.password.value;
   console.log(email , password);
   createUser(email,password)
   .then(result=> {

    const loggedUser = result.user;
    console.log(loggedUser);
    from.reset();
   })
   .catch(error =>{

      console.log(error);

   })
 
}
const {user,createUser} = useContext(Authcontext);
console.log(createUser);

    return (   
        <div>
           
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email'  placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                
                            </div>
                            <div className="form-control mt-6">
                                
                                <button  className="btn btn-primary">Login</button>
                            </div>
                            
                        </form>
                        <Link to="/about"><button className="btn btn-link">New to auth master?</button></Link>
                        
                    
                    </div>
                 
                </div>
            </div>
            
        </div>
    );
};

export default Login;