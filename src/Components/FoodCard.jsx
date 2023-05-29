import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const FoodCard = ({ item }) => {
    const { recipe, image, price, name, _id } = item;
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart();
    const location = useLocation()

    const navigate = useNavigate()

    const handleAddToCart = item => {
        if (user && user.email) {
            const cartItem = {foodItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch(); //refetch cart to update the item number of cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order foods',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <img src={image} alt="Shoes" />
                <p className='absolute right-5 top-5 py-2 px-4 font-semibold rounded-sm bg-slate-800 text-white'>$ {price}</p>
                <div className="card-body text-center flex flex-col justify-center items-center bg-base-300">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-b-[#BB8506] text-[#BB8506] bg-gray-300 ">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;