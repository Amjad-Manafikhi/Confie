import React from "react"
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import {Outlet} from "react-router-dom"

export default function Layout(){
    return(
        <>
            <Header />
            <div className="header-space">
            
            </div>
            <Outlet />
            <Footer />
        </>
    )
}