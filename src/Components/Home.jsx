import React from "react"
import HomeImage from './../HomeImage.jpg';
import {useNavigate} from "react-router-dom"
import EmblaCarousel from "./EmblaCarousel.jsx";
export default function Home({products}){
    const navigate=useNavigate();




    
    return (
        <>
            <div className="all-title">
                <div className="title">

                    <h1 className="name" >Confie</h1>
                    <h3 className="first-type">Quality..Trust..Trendy</h3>
                    <div className="title-buttons-container">
                        <button className="button-first-type" onClick={()=>navigate("shop")}>SHOP NOW</button>
                        <button className="button-sec-type" onClick={()=>navigate("about")}>ABOUT US</button>
                    </div>     
               
                </div>
                <img className="image-title" src={HomeImage} alt="home" width="200px"/>
            </div>
            <div className="best-selling">

                <h2 className="best-selling-title">Best Selling</h2>
                <EmblaCarousel products={products} />
            </div>
            <div className="about">
                <h2 className="about-title">About Us💚</h2>
                <p className="about-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum placeat exercitationem quas quasi itaque error a perspiciatis eos temporibus nemo tenetur, quaerat ipsam mollitia, possimus autem aliquid? Harum, doloribus ex. dolores dolor eum eveniet! Sed esse ad itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus, ad perferendis assumenda voluptas vero nemo aliquam architecto porro in commodi, deleniti, consequatur quaerat voluptatum laborum voluptates quidem. Perferendis, sequi! aspernatur accusamus iure commodi cupiditate sapiente officia repudiandae. Nostrum numquam voluptate eos nam?</p>
                 </div>
        </>

    )

}