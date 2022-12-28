import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Banner.css';
import logo_image from '../img/brand/logo-delhatoalplato.png'; 

const Banner = () => {
  return (
    <div className='banner-background'>
        <div className='banner-content'>
          <div className='banner-image-container'>
            <img src={logo_image} alt="logo Carnes del hato al plato"/>
          </div>
          <div className='banner-text-content'>
            <h1>En “carnes del hato al plato” <br /> 
            encontraras productos carnicos<br /> 
            con la frescura y calidad que tu<br />
            paladar merece.<br /></h1>
            <h2>A mercar.  Tu carrito de carnes <br />
            te espera!</h2>
            <Link to={"/products"}  className='products-button inline-block'>
            <span>Nuestros productos</span>
          </Link>
          </div>
        </div>
    </div>
  )
}

export default Banner