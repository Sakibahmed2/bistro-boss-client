import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItem = () => {
    const [menu, , refetch] = useMenu()

    const [axiosSecure] = useAxiosSecure()

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't delete this item",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        // console.log(res.data);

                    })


                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
            }
        })
    }

    return (
        <div className='w-11/12 mx-auto'>
            <SectionTitle subHeding='Hurry up' heading='Manage items' />

            <div className="overflow-x-auto ">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item image</th>
                            <th>Item name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <td>
                                    <button className='btn btn-ghost btn-md bg-[#D1A054]  text-lg text-white'>
                                        <FaEdit />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-700 text-white btn-md"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItem;