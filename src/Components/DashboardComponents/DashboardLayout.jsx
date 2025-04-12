import React from "react"
import { Outlet } from "react-router-dom";
import SideBar from './SideBar.jsx';


export default function DashboardLayout(){

    return (
        <>
            <SideBar />
            <Outlet />
        </>
    )
}