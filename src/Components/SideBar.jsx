import React from "react";
import {NavLink,BrowserRouter, useLocation} from "react-router-dom" 
import 'hamburgers/dist/hamburgers.min.css';
import HamburgerButton from "./HamburgerButton";
import { MdVisibility } from "react-icons/md";

export default function SideBar({links}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const style={
    color:"black",
    textDecoration:"none",
}
const navStyle={
    height:"1000vh",
    transform:"translateX(-1px)  translateY(-1px) " ,
    border:"solid 1px black",
    backgroundColor:"rgb(250,250,250)",
    boxShadow:" 0 2px 5px rgba(0,0,0,0.2)"
    
}
const hamStyle={
    backgroundColor:"rgb(250,250,250)"

}

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

function handleHamburger(){
    setIsOpen(prev => !prev);
}


    console.log(open);
  return (
    <nav style={isOpen ? navStyle : null}>
        
        <HamburgerButton 
            isOpen={isOpen} 
            handleHamburger={handleHamburger}
        />
      
       <div className="hamburger-links" style={isOpen ? hamStyle : null}>
            {LinkElemnets}        
        </div>
      </nav>
  );
}
