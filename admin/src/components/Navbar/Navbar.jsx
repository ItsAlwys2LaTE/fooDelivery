import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
          <img src={assets.logo} alt="" className='logo-image' />
          <p className='logo-name'>foo<span id='logo-D'>D</span>elicious</p>
        </div>
        <p className='admin-panel-p'>ADMIN PANEL</p>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
