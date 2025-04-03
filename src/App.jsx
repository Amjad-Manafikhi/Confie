import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx';
import { Routes, Route, NavLink } from "react-router-dom"
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import Layout from './Components/Layout.jsx';
import Sign from './Components/Sign-in.jsx';
import Shop from './Components/Shop.jsx';
import photo from './HomeImage.jpg';
import AuthRequired from './Components/AuthRequired.jsx';
export default function App() {
  const products = [
    {
      imgSrc: './../HomeImage.jpg',
      price: "100",
      name: "White Sofa",
      description: "this is a comfortable good quality sofa",
      type: "sofa"
    },
    {
      imgSrc: './../HomeImage.jpg',
      price: "150",
      name: "White Chair",
      description: "this is a comfortable good quality chair",
      type: "chair"
    },
    {
      imgSrc: './../HomeImage.jpg',
      price: "200",
      name: "White Lamp",
      description: "this is a comfortable good quality lamp",
      type: "lamp"
    }
  ]
  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route element={<AuthRequired/>} >
            <Route path="/shop" element={<Shop products={products} />} />
          </Route>
          <Route path="/about" element={<></>} />
        </Route>

        <Route path="/login" element={<Sign />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="*" element={<h1>wrong url</h1>}/>
      </Routes>
    </>
  )
}

