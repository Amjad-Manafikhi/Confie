import React from "react";
import {NavLink,BrowserRouter, useLocation} from "react-router-dom" 
import 'hamburgers/dist/hamburgers.min.css';

export default function HamburgerButton({isOpen ,handleHamburger}) {


  return (
        <button
        className={`hamburger hamburger--collapse ${isOpen ? "is-active" : ""}`}
        type="button"
        onClick={handleHamburger}

        >
        <span className="hamburger-box">
            <span className="hamburger-inner">
            </span>
        </span>
        </button>
      
       
  );
}
