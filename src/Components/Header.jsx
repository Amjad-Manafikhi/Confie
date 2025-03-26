import React from "react"
import {NavLink,BrowserRouter} from "react-router-dom" 



export default function Header(){
    const style={
        color:"black",
        textDecoration:"none",
        fontWeight:"800"
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
                    >LOG IN
                </NavLink>
                
                <NavLink
                    to="/sign up"
                    className="sign-up"
                    
                    style={ ({isActive}) => isActive ? style : null } 
                    >SIGN UP
                </NavLink>
                
            </div>
            

        </div>
    )
} 