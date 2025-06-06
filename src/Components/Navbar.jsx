import React from "react"
import {NavLink,BrowserRouter, useLocation} from "react-router-dom" 
import SideBar from './SideBar.jsx';

export default function Navbar(){

    const links=[
        {
            path:".",
            name:"Home"
        },
        {
            path:"shop",
            name:"Shop"
        },
        {
            path:"about",
            name:"About"
        },
    ]

    const location=useLocation();
    const [windowWidth, setWindowWidth] = React.useState(0);
      const [isOpen, setIsOpen] = React.useState(false);
    

    React.useEffect(() => {
    const changeHeight = () => {
        setWindowWidth(window.innerWidth );
    };

    window.addEventListener("resize", changeHeight);

    // Call once on mount to set initial height
    changeHeight();

    // Return a function to remove listener on unmount
    return () => {
        window.removeEventListener("resize", changeHeight);
    };
    }, []);

    const LinkElemnets = links.map((link)=>{
        return(
            <NavLink
                key={link.name}
                to={link.path}
                className="navLink"
                style={ ({isActive}) => isActive ? style : null } 
                >{link.name}
            </NavLink>
    
        )
    })

    const style={
        color:"black",
        textDecoration:"none",
    }
    return(
        <div className="navbar">
            { windowWidth>600 ? <div className="navbar-links">
                
                {LinkElemnets}
    
            </div>
                : <SideBar links={links}/>
            }
            <div className="navbar-buttons">
                
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