import React from "react"
import photo from './../HomeImage.jpg';
import { MdDelete, MdEditNote  } from "react-icons/md";
import { useLocation } from "react-router-dom";
export default function Card({id, imgSrc ,price ,description , name, handleDelete, handleEdit}){
   const location =useLocation().pathname
   return (
        <div className="card"> 
            <img src={photo} alt={name} className="card-img"     />
            <h3 className="card-desc">{name}</h3>
            <p className="card-desc">{description}</p>
            <p className="card-desc">price: {price}$</p>

            {location==="/dashboard/products" &&
             <div className="card-buttons">
                 <MdEditNote 
                     className="edit-button" 
                     onClick={()=>handleEdit(id)}
                 />
                <MdDelete 
                    className="delete-button" 
                    onClick={()=>handleDelete(id)}
                />
            </div>
            }
            
        </div>
    )
}