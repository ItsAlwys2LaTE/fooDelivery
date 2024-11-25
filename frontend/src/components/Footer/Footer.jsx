import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <div className="logo-footer">
          <p className='logo-name'>foo<span id='logo-D'>D</span>elicious</p>
        </div>
            <p>fooDelivery offers fast and reliable food delivery from local restaurants straight to your door. With real-time tracking and a focus on quality, we ensure fresh meals arrive on time. Enjoy convenient, hassle-free food delivery wherever you are!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-222-345-7880</li>
                <li>contact@fooDelivery.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © fooDelivery.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
