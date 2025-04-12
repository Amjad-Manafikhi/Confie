import React from "react"
import {NavLink,BrowserRouter, useLocation} from "react-router-dom" 



export default function Header(){

    const location=useLocation();
    const style={
        color:"black",
        textDecoration:"none",
    }
    return(
        <div className="header">
            <div className="header-links">
                <NavLink
                    to="."
                    className="navLink"
                    style={ ({isActive}) => isActive ? style : null } 
                >Home
                </NavLink>
                <NavLink
                    to="/shop"
                    className="navLink"
                    style={ ({isActive}) => isActive ? style : null } 
                >Shop
                </NavLink>
                
                <NavLink
                    to="/about"
                    className="navLink"
                    style={ ({isActive}) => isActive ? style : null } 
                    >about
                </NavLink>
            </div>
            <div className="header-buttons">
                <NavLink
                    to="/login"
                    className="log-in"
                    style={ ({isActive}) => isActive ? style : null } 
                    state={{from:location.pathname + location.search}}
                    replace
                    >LOG IN
                </NavLink>
                
                <NavLink
                    to="/signup"
                    className="sign-up"
                    style={ ({isActive}) => isActive ? style : null } 
                    state={{from:location.pathname + location.search}}
                    replace
                    >SIGN UP
                </NavLink>
                
            </div>
            

        </div>
    )
} 