import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendar, FaHome, FaCommentAlt, FaListAlt, FaListUl, FaShoppingBag } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import useCart from '../hooks/useCart';


const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 ">
                    <li><NavLink to='/dashboard/userhome'><FaHome /> User home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet /> Payment History</NavLink></li>
                    <li>
                        <NavLink to='/dashboard/mycart'>
                            <FaShoppingCart /> My cart
                            <span className="badge badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>
                    </li>
                    <li><NavLink to='/dashboard/addreview'><FaCommentAlt />Add review</NavLink></li>
                    <li><NavLink to='/dashboard/orders'><FaListAlt /> My orders</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/dashboard/menu'><FaListUl /> Menu</NavLink></li>
                    <li><NavLink to='/dashboard/shop'><FaShoppingBag /> Shop</NavLink></li>
                    <li><NavLink to='/dashboard/contact'><MdEmail /> Contact</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;