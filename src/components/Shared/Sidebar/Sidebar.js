import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { AiFillControl, AiFillFileAdd, AiTwotoneHome } from "react-icons/ai";
import { GoSignOut } from "react-icons/go"
const Sidebar = () => {


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh", width: '100vw' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/home" className="text-white">
                        <AiTwotoneHome /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addBlog" className="text-white">
                        <AiFillFileAdd /> <span>Add Blog</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageBlogs" className="text-white">
                        <AiFillControl /> <span>Manage Blogs</span>
                    </Link>
                </li>



                <Link to="/" className="text-white"><GoSignOut /><span>Logout</span></Link>
            </ul>

        </div>


    );
};

export default Sidebar;