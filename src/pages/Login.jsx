import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { LuEye, LuEyeClosed } from 'react-icons/lu';

const Login = () => {

    const { setUser, loginUser } = useContext(AuthContext);

    const [ showPass, setShowPass ] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;


        loginUser(email, password)
            .then(result => {
                setUser(result.user);
                navigate(location?.state ? location.state : "/");

            })
            .catch(error => {
                alert(error.code);
            });


    }
    return (
        <div className='min-h-[600px] flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-xl p-10 rounded-none">
                <div className="card-body">
                    <h2 className='text-4xl font-semibold text-center pb-10 border-b mb-6'>Login your account</h2>
                    <form action="" onSubmit={handleLogin}>
                        <fieldset className="fieldset space-y-5">
                            <div>
                                <label className="fieldset-label pb-1 font-semibold">Email</label>
                                <input name='email' type="email" className="input w-full bg-base-300 border-none text-xs" placeholder="Enter your Email" />
                            </div>
                            <div className='space-y-1 relative'>
                                <label className="fieldset-label font-semibold">Password</label>
                                <input
                                    name='password'
                                    type={showPass ? 'text' : 'password'}
                                    className="input w-full bg-base-300 border-none text-xs"
                                    placeholder="Enter your Password"
                                    required
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPass(!showPass)}
                                    className='btn shadow-none border-none bg-transparent absolute bottom-[22px] right-0'>
                                    {
                                        showPass ? <LuEyeClosed /> : <LuEye />
                                    }
                                </button>
                                <div><Link className="link link-hover">Forgot password?</Link></div>
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className='font-semibold text-center pt-5'>Don’t Have An Account ? <Link to="/auth/register" className='text-red-600'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;