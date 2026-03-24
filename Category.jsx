import React from 'react'
import './Category.css';

const Category = () => {
  return (
   <>
        <div className="category-section">
            <div className="category-card">
                <img src='images/necklaces.jpg' alt=''/>
                <h3>NECKLACES</h3>
            </div>
            <div className="category-card">
                <img src='images/earrings.jpg' alt=''/>
                <h3>EARRINGS</h3>
            </div>
            <div className="category-card">
                <img src='images/rings.jpg' alt=''/>
                <h3>RINGS</h3>
            </div>
            <div className="category-card">
                <img src='images/bracelets.jpg' alt=''/>
                <h3>BRACELETS</h3>
            </div>
    
        </div>
   </>
  )
}

export default Category;