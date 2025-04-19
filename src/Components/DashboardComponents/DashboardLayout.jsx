import React from "react"
import { Outlet } from "react-router-dom";
import SideBar from './../SideBar.jsx';
import Navbar from './../Navbar.jsx';
export default function DashboardLayout(){
    const links=[
        {
            path:"/dashboard/products",
            name:"Products"
        },
        {
            path:"/dashboard/Analytics",
            name:"Analytics"
        },
        {
            path:"/dashboard/generalInfo",
            name:"General Info"
        },
        {
            path:"/",
            name:"← back home"
        },
    ]
    return (
        <div>
             <SideBar links={links} />

            
            <Outlet />
        </div>
    )
}