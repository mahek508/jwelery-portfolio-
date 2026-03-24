import React, { useEffect, useState } from 'react'
import "./Testimonial.css";



const testimonials = [
     {
    img: "images/testimonial-img-1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercit aliquip ex ea commodo consequat. Adipiscing elit minim incididunt laborisexea nisi consectetur. Amet consectetur adipiscing elit sed do eiusmod tempor.",
    name: "JOHN DOE",
    role: "Designer",
  },
  {
    img: "images/testimonial-img-2.png",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercit aliquip ex ea commodo consequat. Adipiscing elit minim incididunt laborisexea nisi consectetur. Amet consectetur adipiscing elit sed do eiusmod tempor.",
    name: "JOHN DOE",
    role: "Designer",
  },
];

const Testimonial = () => {
     const [index, setIndex] = useState(0);

        useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000); // 👉 3 sec pause

        return () => clearInterval(interval);
        }, []);
    return (
   <>   
        <section className="testimonial">
      <div className="overlay">
        {/* Static */}
        <h2 className="test-title">WHAT THEY SAYS ABOUT US</h2>
        <p className="test-subtitle">Testimonials</p>

        {/* Slider */}
        <div className="slider-section">
          <div
            className="slider-track-section"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div className="slide-section" key={i}>
                <img src={item.img} className="test-img-section" alt='' />

                <p className="test-text-section">{item.text}</p>

                <h3 className="test-name-section">{item.name}</h3>
                <span className="test-role">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Testimonial;