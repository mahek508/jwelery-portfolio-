import React, { useState } from "react";
import "./Productslider.css";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const products = [
  { id: 1, img: "images/perspiciatis-unde.jpg", name: "Perspiciatis Unde", price: "₹98.01", oldPrice: "₹111.38",badge1: "REDUCED PRICE", badge2: "NEW"},
  { id: 2, img: "images/omnis-iste.jpg", name: "Omnis Iste", price: "₹183.58", oldPrice: "₹223.88", badge1: "REDUCED PRICE", badge2: "NEW",},
  { id: 3, img: "images/accusantium-dolore.jpg", name: "Accusantium Dolore", price: "₹252.28", oldPrice: "₹336.38", badge1: "REDUCED PRICE",badge2: "NEW"},
  { id: 4, img: "images/rem-aperiam.jpg", name: "Rem Aperiam", price: "₹280.13", badge2: "NEW"},
  { id: 5, img: "images/adipisci-velit.jpg", name: "ADIPISCI VELIT", price: "₹150.00", oldPrice: "₹325.13", badge1: "REDUCED PRICE", badge2: "NEW"},
  { id: 6, img: "images/numquam-eius.jpg", name: "NUMQUAM EIUS", price: "₹210.00", badge2: "NEW"},
  { id: 7, img: "images/modi-tempora.jpg", name: "MODI TEMPORA", price: "₹190.00", badge2: "NEW"},
  { id: 8, img: "images/dolore-magnam.jpg", name: "DOLORE MAGNAM", price: "₹300.00", badge2: "NEW"},
];

const Productslider = () => {
  const [index, setIndex] = useState(0);

  const visibleItems = 4;
  const maxIndex = products.length - visibleItems;

  const nextSlide = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slider-container">
      <h2 className="title">THE GLAM COLLECTION</h2>
        <p className="subtitle">Spark your imagination fuinfriol </p>
        <p className="dot"><BsThreeDots /><BsThreeDots /><BsThreeDots /><BsThreeDots /><IoDiamondOutline /><BsThreeDots /><BsThreeDots /><BsThreeDots /><BsThreeDots /></p>

      <div className="slider-wrapper">
        <button className="nav prev" onClick={prevSlide}>
          ← PREV
        </button>

        <div className="slider">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${index * 25}%)`,
            }}>
            {products.map((item) => (
                <div className="card" key={item.id}>
                    <div className="image-box">
                    <img src={item.img} alt="" />
                    {item.badge1 && (
                        <span className="badge red">{item.badge1}</span>
                      )}
                      {item.badge2 && (
                        <span className="badge new">{item.badge2}</span>
                      )}

                    <div className="icons-product">
                         <FaShoppingCart className="icon-product"/>
                        <FaEye className="icon-product"/>
                       
                    </div>
                </div>

                    <h4>{item.name}</h4>
                
                        <div className="price-box">
                            {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
                            <span className="new-price">{item.price}</span>
                        </div>
            </div>
            ))}
          </div>
        </div>

        <button className="nav next" onClick={nextSlide}>
          NEXT →
        </button>
      </div>
    </div>
  );
};

export default Productslider;