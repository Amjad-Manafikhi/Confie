import React from "react"
import photo from './../HomeImage.jpg';
export default function Card({ imgSrc ,price ,description , name}){
   
    return (
        <div className="card"> 
            <img src={photo} alt={name} width="250px" />
            <h3 className="first-type">{name}</h3>
            <p className="card-desc">{description}</p>

            <p className="card-desc">price: {price}$</p>
        </div>
    )
}