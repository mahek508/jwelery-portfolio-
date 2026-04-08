import React from 'react';
import './Product2.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const products = [
  {
    id: 1,
    name: "DOLORE MAGNAM",
    price: "₹488.88",
    image: "images/dolore-magnam.jpg",
    tag2: "NEW",
  },
  {
    id: 2,
    name: "VOLUPTAS NULLA",
    price: "₹437.63",
  
    image: "images/voluptas-nulla.jpg",
    
    tag2: "NEW",
  },
  {
    id: 3,
    name: "IRUE REPREHENDERIT",
    price: "₹426.38",
    image: "images/iure-reprehenderit.jpg",
    tag2: "NEW",
  },
  {
    id: 4,
    name: "PERSPICIATIS UNDE",
    price: "₹98.01",
    oldPrice: "111.38",
    image: "images/perspiciatis-unde.jpg",
    tag: "REDUCED PRICE",
    tag2: "NEW",
  },
];

const Product2 = () => {
  return (
    <>
    
    <div className="product-section">
      
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
              {/* ✅ Add to Cart Button */}
                        <div className="add-to-cart-btn">
                          ADD TO CART
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
export default Product2;
