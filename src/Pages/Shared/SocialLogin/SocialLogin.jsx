import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSingIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='w-full text-center my-4'>
                <button onClick={handleGoogleSingIn} className="btn btn-outline btn-circle">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;