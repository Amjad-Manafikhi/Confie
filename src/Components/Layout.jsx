import React from "react"
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import {Outlet} from "react-router-dom"

export default function Layout(){
    return(
        <>
            <Navbar />
            <div className="navbar-space">
            
            </div>
            <Outlet />
            <Footer />
        </>
    )
}