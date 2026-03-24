import React from 'react';
import './Products.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";

const products = [
  {
    id: 1,
    name: "PORRO QUISQUAM",
    price: "₹358.88",
    image: "images/porro-quisquam.jpg",
    tag2: "NEW",
  },
  {
    id: 2,
    name: "ARCHITECTO BEATAE",
    price: "₹331.18",
    oldPrice: "₹403.38",
    image: "images/architecto-beatae.jpg",
    tag: "REDUCED PRICE",
    tag2: "NEW",
  },
  {
    id: 3,
    name: "NUMQUAM EIUS",
    price: "₹313.88",
    image: "images/numquam-eius.jpg",
    tag2: "NEW",
  },
  {
    id: 4,
    name: "MODI TEMPORA",
    price: "₹392.63",
    image: "images/modi-tempora.jpg",
    tag2: "NEW",
  },
];

const Products = () => {
  return (
    <>
    
    <div className="product-section">
      <h2 className="title">NEW PRODUCTS</h2>
      <p className="dot"><BsThreeDots /><BsThreeDots /><BsThreeDots /><BsThreeDots /><IoDiamondOutline /><BsThreeDots /><BsThreeDots /><BsThreeDots /><BsThreeDots /></p>

      <div className="product-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            
            {/* TAGS */}
            <div className="tags">
              {item.tag && <span className="tag">{item.tag}</span>}
              {item.tag2 && <span className="tag">{item.tag2}</span>}
            </div>

            {/* IMAGE */}
            <div className="image-box">
              <img src={item.image} alt={item.name} />

              {/* HOVER ICONS */}
              <div className="icons-pro">
                <FaShoppingCart className='iconss' />
                <FaEye className='iconss'/>
              </div>
            </div>

            {/* TEXT */}
            <h4>{item.name}</h4>

            <p className="price-pro">
              {item.oldPrice && <span className="old">{item.oldPrice}</span>}
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
)
}
export default Products;