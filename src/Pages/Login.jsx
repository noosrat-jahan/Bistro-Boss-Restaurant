import React, { useContext, useEffect, useState } from 'react';

import authbg from '../assets/authentication.png'
import loginauthbg from '../assets/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import useAxiosPublic from '../Hooks/useAxiosPublic';


const Login = () => {

    const { setUser, signInUser, googleSignIn } = useContext(AuthContext)

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleLogin = e => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signInUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user);
                setUser(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Signed In Successfully",
                    showConfirmButton: false,
                    timer: 3500
                });
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log('Error:', err.message);
            })
    }


    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user
                console.log(user);
                setUser(user)
                // create user entry in the mongodb atlas database users api
                const userInfo = {
                    name: user.displayName,
                    email: user.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Signed In Successfully",
                            showConfirmButton: false,
                            timer: 3500
                        });
                        navigate(from, { replace: true })
                    })

            })
            .catch(err => {
                console.log('Error:', err.message);
            })
    }

    const handleCaptchaValidate = e => {
        const user_captcha_value = e.target.value
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Sign In</title>
            </Helmet>

            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url("${authbg}")`,
                }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <div className="hero  h-4/5 shadow-gray-500 shadow-2xl">
                            <div className="hero-content  flex-col lg:flex-row-reverse">
                                
                                <div className="card  w-full max-w-md shrink-0 ">
                                    <form onSubmit={handleLogin} className="card-body text-black">
                                        <h1 className='text-3xl text-black font-semibold'>Login</h1>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name='email' placeholder="Type here" className="input input-bordered " required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label bg-white mb-2 rounded-md flex flex-col items-center gap-2">
                                                <LoadCanvasTemplate />
                                            </label>
                                            <input onBlur={handleCaptchaValidate} type="text" name='captcha' placeholder="Type the captcha here" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button disabled={disabled} className="btn bg-[#D1A054] text-white font-semibold">Sign In</button>
                                        </div>

                                        <h3 className='text-[#D1A054]'>New here? <Link to="/register" className='font-bold'> Create a New Account </Link></h3>

                                        <p className='text-black text-xl'>Or sign up with</p>

                                        <div className='flex text-[#444444]  w-full justify-center gap-5 mt-3 text-xl'>
                                            <div className='border-2 border-black p-3 rounded-full'>
                                                <FaFacebook></FaFacebook>
                                            </div>
                                            <div className='border-2 border-black p-3 rounded-full'>
                                                <button onClick={handleGoogleLogin}><FaGoogle></FaGoogle></button>
                                            </div>
                                            <div className='border-2 border-black p-3 rounded-full'>
                                                <FaGithub></FaGithub>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div>
                                    <img src={loginauthbg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;