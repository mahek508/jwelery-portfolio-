import React from 'react'
import "./Footer.css";
import { IoHomeSharp } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCcVisa,FaCcPaypal, FaCcDiscover,FaCcAmex, FaCcMastercard  } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
const Footer = () => {
  return (
   <>
          {/* Newsletter Section */}
        <div className="newsletter">
            <h2>GET THE LATEST FROM ZEWELRY</h2>
            <p className="sub">Sign up for our newsletter!</p>

            <div className="divider">
                <span>..................</span>
                    <i className="diamond"><IoDiamondOutline /></i>
                <span>..................</span>
            </div>
            
            <p className="desc">
                Subscribe to our newsletter to get exclusive discounts
                <br />
                and new theme launches right in your inbox.
            </p>

            <div className="subscribe-box">
                <input type='email' placeholder='you email address'/>
                <button>SUBSCRIBE</button>
            </div>
        </div>
                {/* Footer Section */}
            <footer className="footer">
                <div className="footer-container">
                    <div>
                        <h4>YOUR ACCOUNT</h4>
                        <ul>
                            <li>Personal info</li>
                            <li>Orders</li>
                            <li>Credit slips</li>
                            <li>Addresses</li>
                        </ul>
                    </div>
                    <div>
                        <h4>PRODUCTS</h4>
                        <ul>
                            <li>Prices drop</li>
                            <li>New products</li>
                            <li>Best sales</li>
                        </ul>
                    </div>

                    <div>
                        <h4>OUR COMPANY</h4>
                        <ul>
                            <li>About us</li>
                            <li>Secure payment</li>
                            <li>Contact us</li>
                            <li>Sitemap</li>
                            <li>Stores</li>
                        </ul>
                    </div>
                    <div>
                        <h4>GET IN TOUCH</h4>
                        <p><span className='iconssss'><IoHomeSharp /> Address:</span><br /> 265, Lorem, Ipsum, United States</p>
                        <p><span className='iconssss'><FaPaperPlane />Mail us:</span><br /><span className='email'>sales@domain.com</span></p>
                        <p><span className='iconssss'><FaPhoneAlt />Phone:</span> <br />(123)-456-7890</p>
                    </div>
                </div>
                    {/* Bottom Bar */}
                    <div className="footer-bottom">
                        <p>© 2026 - Ecommerce software by PrestaShop™</p>
                        <div className="payments">
                            <FaCcVisa className='payment' />
                            <FaCcPaypal  className='payment'/>
                            <FaCcDiscover  className='payment'/>
                            <FaCcAmex  className='payment'/>
                            <FaCcMastercard  className='payment'/>
                        </div>
                    </div>
            </footer>
   </>   
  )
}

export default Footer;