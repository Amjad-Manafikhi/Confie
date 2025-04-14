import React from "react"
import {NavLink,BrowserRouter, useLocation} from "react-router-dom" 
import Hamburgers from './HamburgerButton.jsx';


export default function Header(){

    const location=useLocation();
    const [windowWidth, setWindowWidth] = React.useState(0);
      const [isOpen, setIsOpen] = React.useState(false);
    

    React.useEffect(() => {
    const changeHeight = () => {
        setWindowWidth(window.innerWidth );
        console.log("width changed");
    };

    window.addEventListener("resize", changeHeight);

    // Call once on mount to set initial height
    changeHeight();

    // Return a function to remove listener on unmount
    return () => {
        window.removeEventListener("resize", changeHeight);
    };
    }, []);



    const style={
        color:"black",
        textDecoration:"none",
    }
    return(
        <div className="header">
            { windowWidth>600 ? <div className="header-links">
                
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
                : <Hamburgers />
            }
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