import React from "react"
import photo from './../HomeImage.jpg';
import Card from './card.jsx';
import {useNavigate ,useSearchParams ,useLocation} from "react-router-dom"
import FlipMove from 'react-flip-move';

export default function Shop({products}){
   
    const [searchParams ,setSearchParams]=useSearchParams();
    
    const initialPrice=searchParams.get("price") || "price";
    const initialType=searchParams.get("type") || "type";

    const navigate=useNavigate();
    const location=useLocation();
    
    function changePrice(event) {    
        const price = event.target.value;
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("price", price);
        setSearchParams(newSearchParams);
    }
    function changeType(event) {
        const type = event.target.value;
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("type", type);
        setSearchParams(newSearchParams);
    }
    const s="White sofa";
    
    
    const filteredProducts =
  initialType && initialType !== "type"  && initialType !=="all"
    ? products.filter((product) =>
        product.type===initialType
      )
    : products;
    
    let sortedProducts = filteredProducts;

    if (initialPrice === "HtoL") {
        sortedProducts = [...filteredProducts].reverse();
    }   
    const elementProducts = sortedProducts.map((product) => (
            <div key={product.id}>
                <Card 
                    imgSrc={product.imgSrc} 
                    price={product.price} 
                    name={product.name} 
                    description={product.description} 
                />
            </div>
        ));



    return(
        <div className="shop">
            <div className="sub-shop">
                <h1 className="filter-name">Filters</h1>

                <form>
                    <select name="Price" defaultValue={initialPrice} onChange={changePrice}>
                        <option value="price"  disabled>Price</option>
                        <option value="HtoL">High To Low </option>
                        <option value="LtoH">Low To High </option>
                    </select>
                    <select name="Type" defaultValue={initialType} onChange={changeType}>    
                    <   option value="type"  disabled>Type</option>
                        <option value="all">All</option>
                        <option value="sofa">Sofa</option>
                        <option value="chair">Chair</option>
                        <option value="lamp">Lamp</option>
                    </select>
                </form>
            </div>

            <FlipMove
                className="cards-container"
                duration={500}
                staggerDurationBy={0}
            >
                {elementProducts}       
            </FlipMove> 
        </div>
    )
}