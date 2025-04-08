import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { LuEye, LuEyeClosed } from 'react-icons/lu';



// https://i.ibb.co.com/KtkT5J0/chatgptboy.png.   profile pic

const Register = () => {


    const { user, setUser, createNewUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const [showPass, setShowPass] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;



        // creating new user with firebase
        createNewUser(email, password)
            .then(result => {
                setUser(result.user);

                // updating user info 
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch(error => {
                        alert(error.code);
                    })
            })
            .catch(error => {
            });
    }



    return (
        <div className='min-h-[600px] flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-xl p-10 rounded-none">
                <div className="card-body">
                    <h2 className='text-4xl font-semibold text-center pb-10 border-b mb-6'>Register your account</h2>
                    <form action="" onSubmit={handleRegister}>
                        <fieldset className="fieldset space-y-5">
                            <div>
                                <label className="fieldset-label pb-1 font-semibold">Name</label>
                                <input
                                    name='name'
                                    type="text"
                                    className="input w-full bg-base-300 border-none text-xs"
                                    placeholder="Enter your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="fieldset-label pb-1 font-semibold">Photo</label>
                                <input
                                    name='photo'
                                    type="text"
                                    className="input w-full bg-base-300 border-none text-xs"
                                    placeholder="Enter your PhotoURL"
                                    required
                                />
                            </div>
                            <div>
                                <label className="fieldset-label pb-1 font-semibold">Email</label>
                                <input
                                    name='email'
                                    type="email"
                                    className="input w-full bg-base-300 border-none text-xs"
                                    placeholder="Enter your Email"
                                    required
                                />
                            </div>
                            <div className='space-y-1 relative'>
                                <label className="fieldset-label font-semibold">Password</label>
                                <input
                                    name='password'
                                    type= {showPass ? 'text' : 'password'}
                                    className="input w-full bg-base-300 border-none text-xs"
                                    placeholder="Enter your Password"
                                    required
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPass(!showPass)}
                                    className='btn shadow-none border-none bg-transparent absolute bottom-[1px] -right-1'>
                                    {
                                        showPass ? <LuEyeClosed /> : <LuEye />
                                    }
                                </button>
                            </div>
                            <div>
                                <label className="fieldset-label">
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        className="checkbox"
                                    />
                                    <span className='font-semibold'>Accept Our Terms & Conditions</span>
                                </label>
                            </div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link to="/auth/login" className='text-red-600'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;