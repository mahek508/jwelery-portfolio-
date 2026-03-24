import React from 'react'
import Header from './Components/Header';
import Hero from './Components/Hero';
import Category from './Components/Category';
import Productslider from './Components/Productslider';
import Gallary from './Components/Gallary';
import Products from './Components/Products';
import Product2 from './Components/Product2';
import Testimonial from './Components/Testimonial';
import Servicesdata from './Components/Servicesdata';
import Footer from './Components/Footer';



const Home = () => {
  return (
    <>
    <Header/>   
    <Hero/>
    <Category/>
    <Productslider/>
    <Gallary/>
    <Products/>
    <Product2/>
    <Testimonial/>
    <Servicesdata/>
    <Footer/>
    </>
  )
}

export default Home;