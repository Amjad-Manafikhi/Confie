import React from "react";
import 'hamburgers/dist/hamburgers.min.css';
import AddProduct from './DashboardComponents/AddProduct.jsx';
export default function About() {
  const [isOpen, setIsOpen] = React.useState(false);
  const products = [
    {
      id:1,
      imgSrc: './../HomeImage.jpg',
      price: "100",
      name: "White Sofa",
      description: "this is a comfortable good quality sofa",
      type: "sofa"
    },
    {
      id:2,
      imgSrc: './../HomeImage.jpg',
      price: "150",
      name: "White Chair",
      description: "this is a comfortable good quality chair",
      type: "chair"
    },
    {
      id:3,
      imgSrc: './../HomeImage.jpg',
      price: "200",
      name: "White Lamp",
      description: "this is a comfortable good quality lamp",
      type: "lamp"
    }
    ,
    {
      id:4,
      imgSrc: './../HomeImage.jpg',
      price: "250",
      name: "White Lamp",
      description: "this is a comfortable good quality lamp",
      type: "lamp"
    } 
    ,
    {
      id:5,
      imgSrc: './../HomeImage.jpg',
      price: "260",
      name: "White Lamp",
      description: "this is a comfortable good quality lamp",
      type: "lamp"
    }
    ,
    {
      id:6,
      imgSrc: './../HomeImage.jpg',
      price: "300",
      name: "White Lamp",
      description: "this is a comfortable good quality lamp",
      type: "lamp"
    }
    ,
    {
      id:7,
      imgSrc: './../HomeImage.jpg',
      price: "500",
      name: "White Lamp",
      description: "this is a comfortable good quality lamp",
      type: "lamp"
    }
  ]
  return (
    <AddProduct products={products}/>
  );
}
