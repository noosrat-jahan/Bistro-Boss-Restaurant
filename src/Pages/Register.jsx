import React, { useContext } from 'react';
import authbg from '../assets/authentication.png'
import regauthbg from '../assets/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import useAxiosPublic from '../Hooks/useAxiosPublic';



const Register = () => {

    const { createNewUser, setUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        createNewUser(data.email, data.password)
            .then((result) => {
                const user = result.user
                console.log(user);
                setUser(user)

                // create user entry in the mongodb atlas database users api
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Signed Up Successfully",
                            showConfirmButton: false,
                            timer: 3500
                        });
                        navigate('/')
                    }
                })
                
            })
    }
    

    // const handleRegister = e => {
    //     e.preventDefault()

    //     const formData = new FormData(e.target)
    //     const userInfo = Object.fromEntries(formData.entries())

    //     const name = userInfo.name
    //     const email = userInfo.email
    //     const password = userInfo.password
    //     console.log(name, email, password);

    //     createNewUser(email, password)
    //         .then((result) => {
    //             const user = result.user
    //             console.log(user);
    //             setUser(user)
    //             Swal.fire({
    //                 position: "center",
    //                 icon: "success",
    //                 title: "Signed Up Successfully",
    //                 showConfirmButton: false,
    //                 timer: 3500
    //             });
    //             navigate('/')
    //         })
    // }


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
                    navigate('/')
                })
                
            })
            .catch(err => {
                console.log('Error:', err.message);
            })
    }

    return (
        <div>
            <Helmet>               
                <title>Bistro Boss || Sign Up</title>              
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
                            <div className="hero-content  flex-col lg:flex-row">

                                <div className="card  w-full max-w-md shrink-0 ">
                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body text-black">
                                        <h1 className='text-3xl text-black font-semibold'>Sign Up</h1>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Type here" className="input input-bordered " />
                                            {errors.name && <span className='text-left text-red-700'>Name is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" {...register("email", { required: true })} name='email' placeholder="Type here" className="input input-bordered " />
                                            {errors.email && <span className='text-left text-red-700'>Email is required</span>}
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password"
                                                {...register("password",
                                                    {
                                                        required: true,
                                                        minLength: 6,
                                                        maxLength: 20,
                                                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/
                                                    })}
                                                name='password' placeholder="Enter your password" className="input input-bordered" />
                                            
                                            {errors.password?.type === "required" && <span className='text-left text-red-700'>Password is required</span>}
                                            {errors.password?.type === "minLength" && <span className='text-left text-red-700'>Password must be 6 characters long.</span>}
                                            {errors.password?.type === "maxLength" && <span className='text-left text-red-700'>Password must be less than 20 characters .</span>}
                                            {errors.password?.type === "pattern" && <span className='text-left text-red-700'>Password must contain at least one uppercase letter, one lowecase letter, one digit and one special character.</span>}
                                        </div>
                                        <div className="form-control mt-6">
                                            <button type="submit" className="btn bg-[#D1A054] text-white font-semibold">Sign Up</button>
                                        </div>

                                        <h3 className='text-[#D1A054]'>Already registered? <Link to="/login" className='font-bold'>Go to log in</Link></h3>

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
                                    <img src={regauthbg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;