import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [axiosSecure] = useAxiosSecure()
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageResponse =>{
            console.log(imageResponse);
            if(imageResponse.success){
                const imgURL = imageResponse.data.display_url;
                console.log(imgURL);
                const {name, price, category, recipe} = data;
                const newMenu = {name, price: parseFloat(price), category, recipe, image: imgURL}
                console.log(newMenu);
                axiosSecure.post('/menu', newMenu)
                .then(data =>{
                    console.log(data.data);
                    if(data.data.insertedId){
                        Swal.fire({
                            icon: 'success',
                            title: 'Food added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };



    return (
        <div className='w-full'>
            <SectionTitle subHeding="What's new" heading="add an item" />
            <form onSubmit={handleSubmit(onSubmit)} className='w-[800px] bg-base-200 mx-auto p-10 mt-4'>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input type="text" {...register("name")} placeholder="name" className="input input-bordered " />
                </div>
                <div className='flex w-full mx-auto space-x-6'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue={'Pick One'} {...register("category")} className="select select-bordered">
                            <option disabled>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="text" {...register("price")} placeholder="Price" className="input input-bordered " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24"
                    {...register("recipe")} placeholder="Recipe detail"></textarea>
                </div>
                <div className="form-control w-full max-w-xs my-3">
                    <label className="label">
                        <span className="label-text">Choose File</span>
                    </label>
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input className='btn bg-[#B58130] border-none' type="submit" value="Add item" />
            </form>
        </div>
    );
};

export default AddItem;