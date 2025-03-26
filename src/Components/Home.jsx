import React from "react"
import HomeImage from './../HomeImage.jpg';
import BestSelling from "./BestSelling";
import {useNavigate} from "react-router-dom"
export default function Home(){
    const navigate=useNavigate();
    
    return (
        <>
            <div className="all-title">
                <div className="title">

                    <h1 id="name" >Confie</h1>
                    <h3 className="first-type">Quality..Trust..Trendy</h3>
                    <button className="button-first-type" onClick={()=>navigate("shop")}>SHOP NOW</button>
                    <button className="button-sec-type" onClick={()=>navigate("about")}>ABOUT US</button>
                </div>
                <img className="image-title" src={HomeImage} alt="home" width="200px"/>
            </div>
            <BestSelling />
        </>

    )

}