import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileSignedInLinks = () => {
  return (
    <div>
      <ul className="sidenav" id="mobile-demo">
        <li><NavLink to='/' className='right home'>Home</NavLink></li>
        <li><NavLink to='/favorites' className='right favorites'>Favorites</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
      </ul>
    </div>
  )
}

export default MobileSignedInLinks