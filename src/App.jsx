import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx';
import { Routes, Route, NavLink } from "react-router-dom"
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import Layout from './Components/Layout.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import Shop from './Components/Shop.jsx';
import photo from './HomeImage.jpg';
import AuthRequired from './Components/AuthRequired.jsx';
import Products from './Components/DashboardComponents/Products.jsx';
import Analytics from './Components/DashboardComponents/Analytics.jsx';
import GeneralInfo from './Components/DashboardComponents/GeneralInfo.jsx';
import DashboardLayout from './Components/DashboardComponents/DashboardLayout.jsx';
import About from './Components/About.jsx';
export default function App() {
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
    <>
      <Routes >
        <Route  path='/dashboard' element={<DashboardLayout/>}>
         <Route index element={<Products products={products}/>}/>
         <Route path="analytics" element={<Analytics />}/>
         <Route path="generalInfo" element={<GeneralInfo />}/>
        </Route>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home products={products} />} />
          <Route element={<AuthRequired/>} >
            <Route path="shop" element={<Shop products={products} />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<h1>wrong url</h1>}/>
      </Routes>
    </>
  )
}

