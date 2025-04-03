import React from "react"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer(){


    return(
        <div className="footer">
            <section>
                <h1>
                    Confie
                </h1>
                <div>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />

                </div>
            </section>
            
            <section>
                <h1>
                    Pages
                </h1>
                <>
                <NavLink to="/" className="footer-navlink ">Home</NavLink>
                <NavLink to="/shop" className="footer-navlink "> Shop</NavLink>
                <NavLink to="/about" className="footer-navlink "> About Us</NavLink>

                </>
            </section>
           
            <section>
                <h1>
                    Address
                </h1>
                <>
                    <p>Syria - Damascus</p>
                    <p>Eygpt - Cairo</p>
                    <p>UAE - Dubai</p>

                </>
            </section>
            <div className="vertical-divider"></div>

        </div>
    )

}