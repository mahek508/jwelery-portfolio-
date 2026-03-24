import React from 'react'
import './Gallary.css';



const images = [
  "images/jewel1.jpg",
  "images/jewel2.jpg",
  "images/jewel3.jpg",
  "images/jewel4.jpg",
];



const Gallary = () => {
  return (
    <>
        <div className="image-row">
          {images.map((img, index) => (
              <div className="hover-box" key={index}>
                  <img src={img} alt='img'/>
                  <div className="overlay-border"></div>
              </div>
          ))}
        </div>
    </>
  )
}

export default Gallary;