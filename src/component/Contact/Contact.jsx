import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Authcontext } from '../../provider/Authprovider';
const Contact = () => {
    const handelsignUP = event =>{

        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password =from.password.value;
       console.log(name,email , password);
       signIn(email,password)
       .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser);
          from.reset();
          
       })
       .catch(error =>{
        console.log(error);
     })
    }

    const {user,signIn} = useContext(Authcontext);
    console.log(signIn);

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Section!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form  onSubmit={handelsignUP} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                <Link to="/login"><button className="btn btn-link"> Already have an account?</button></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;