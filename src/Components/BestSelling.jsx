import React from "react"
import photo from './../HomeImage.jpg';
import Card from './card.jsx';
export default function BestSelling(){


    return(
        <div className="best-selling">
            <h2 className="best-selling-title">Best Selling</h2>
            <div className="cards-container">
                <Card imgSrc={photo} price="100" name="White Sofa" description="this is a comfortable good quality sofa"/>
                <Card imgSrc={photo} price="200" name="White Sofa" description="this is a comfortable good quality sofa"/>
                <Card imgSrc={photo} price="300" name="White Sofa" description="this is a comfortable good quality sofa"/>
                <Card imgSrc={photo} price="400" name="White Sofa" description="this is a comfortable good quality sofa"/>
                <Card imgSrc={photo} price="500" name="White Sofa" description="this is a comfortable good quality sofa"/>
            </div>
            

        </div>
    )
}