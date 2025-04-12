import React from "react"
import {NavLink }from "react-router-dom"

export default function SideBar(){
    const style={
        color:"black",
        textDecoration:"none",
    }

    return (
        <>
            <div className="sidebar">
                <NavLink
                        to="/dashboard"
                        className="navLink"
                        style={ ({isActive}) => isActive ? style : null } 
                        >Products
                </NavLink>
                <NavLink    
                    to="analytics"
                    className="navLink"
                    style={ ({isActive}) => isActive ? style : null } 
                    >Analytics
                </NavLink>
                <NavLink
                    to="generalInfo"
                    className="navLink"
                    style={ ({isActive}) => isActive ? style : null } 
                    >General Info
                </NavLink>
            </div>
            <NavLink 
                to="/"
                className="return-link"
            >retrun home</NavLink>
        </>
    )
}