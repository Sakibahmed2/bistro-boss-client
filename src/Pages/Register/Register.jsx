import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';



const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUser(data.name, data.photo)
                    .then(() => {
                        const savedUser = {name: data.name, email: data.email}
                        fetch('http://localhost:5000/users',{
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your work has been saved',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })


                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })
        console.log(data);
    };

    // console.log(watch("example"));





    return (
        <>
            <Helmet>
                <title>Bistro boss || Sing up</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Sing up now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className='text-xs mt-1 text-red-600'>Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Photo url" className="input input-bordered" />
                                    {errors.photo && <span className='text-xs mt-1 text-red-600'>Photo url is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email")} name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password && <span className='text-xs mt-1 text-red-600'>Password must be 6 letter</span>}
                                    <label className="label">
                                        <Link to='/login' className="btn-link link link-hover">Alredy have a account ?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn bg-[#D1A054B2] border-none' type="submit" value="Sing up" />
                                </div>
                            </form>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;