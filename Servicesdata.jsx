import React from 'react';
import './Servicesdata.css';
import { IoMdPaperPlane } from "react-icons/io";
import { FaRotateLeft } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";



const Servicesdata = () => {
  return (
    <>
       <div className="services">
      
      <div className="service-box">
        <div className="iconsss">
        <IoMdPaperPlane />
        </div>
        <h3>FREE SHIPPING</h3>
        <p>Free for all order over $99.00</p>
      </div>

      <div className="service-box">
        <div className="iconsss">
         <FaRotateLeft />
        </div>
        <h3>MONEY BACK</h3>
        <p>100% money back - 30 days</p>
      </div>

      <div className="service-box">
        <div className="iconsss">
        <BsChatDots />
        </div>
        <h3>24H SUPPORT</h3>
        <p>Service support fast 24/7</p>
      </div>

    </div>
        
    </>
  )
}

export default Servicesdata;