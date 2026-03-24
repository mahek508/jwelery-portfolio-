import React from "react";
import "./Header.css";
import { FaSearch, FaBars, FaShoppingBag } from "react-icons/fa";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img src="images/zewelry-logo-1550473835.png" alt="logo" />
      
      </div>

      <nav className="navbar">
        <a href="#">HOME</a>
        <a href="#" className="shop-menu">SHOP

            <div className="shop-dropdown">

                <div className="shop-column">
                    <h4>FASHION</h4>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>
                    <p>Accessories</p>
                    <p>Football</p>
                    <p>Vollyball</p>
                    <p>Cricket</p>
                </div>
                 <div className="shop-column">
                    <h4>JEWELLERY</h4>
                    <p>Rings</p>
                    <p>Bracelets</p>
                    <p>Necklaces</p>
                    <p>Wedding Bands</p>
                </div>
            
                <div className="shop-column">
                    <h4>FURNITURE</h4>
                    <p>Living Room</p>
                    <p>Kitchen</p>
                    <p>Office</p>
                    <p>Home Decor</p>
                </div>

                <div className="shop-column">
                    <h4>AUTOPARTS</h4>
                    <p>Engine Parts</p>
                    <p>Exhaust Parts</p>
                    <p>Brake Parts</p>
                    <p>Body Parts</p>
                </div>
            </div>
        </a>
        <a href="#" className="electronics-menu">ELECTRONICS
          <div className="electronics-dropdown">
            <div className="electronics-column">
              <h4>MOBILES</h4>
              <p>Apple</p>
              <p>BlackBerry</p>
              <p>OnePlus</p>
              <p>Sony</p>
            </div>

            <div className="electronics-column">
              <h4>CAMERAS</h4>
              <p>DSLR</p>
              <p>Lenses</p>
              <p>Tripods</p>
              <p>Batteries</p>
            </div>
          </div>
        </a>
        <a href="#" className="sports-menu">SPORTS
          <div className="sports-dropdown">
            <div className="sports-column">
              <h4>ACCESSORIES</h4>
            </div>
            <div className="sports-column">
              <h4>BOOKS</h4>
              <p>Litelature</p>
              <p>Philosophy</p>
              <p>Academics</p>
            </div>
          </div>
        </a>
        <a href="#">CONTACT US</a>
      </nav>

      <div className="icons">
        <FaSearch className="icon"/>
        <FaBars className="icon"/>

        <div className="cart">
          <FaShoppingBag className="carts"/>
          <span>0</span>
        </div>

      </div>

    </header>
  );
}

export default Header;