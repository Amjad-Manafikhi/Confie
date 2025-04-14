import React from "react";
import {NavLink,BrowserRouter, useLocation} from "react-router-dom" 
import 'hamburgers/dist/hamburgers.min.css';

export default function About() {
  const [isOpen, setIsOpen] = React.useState(false);

  const style={
    color:"black",
    textDecoration:"none",
}
const navStyle={
    height:"1000vh",
    transform:"translateX(-2px)" ,
    border:"solid 1px black",
    backgroundColor:"rgb(250,250,250)"
}
const hamStyle={
    backgroundColor:"rgb(250,250,250)"

}
  return (
    <nav style={isOpen ? navStyle : null}>
        <button
        className={`hamburger hamburger--collapse ${isOpen ? "is-active" : ""}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}

        >
        <span className="hamburger-box">
            <span className="hamburger-inner">
            </span>
        </span>
        </button>
      
       <div className="hamburger-header-links" style={isOpen ? hamStyle : null}>
                
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
      </nav>
  );
}
