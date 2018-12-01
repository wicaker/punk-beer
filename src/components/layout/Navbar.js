import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav>
          <div className="nav-wrapper green darken-2">
            <Link to='/' className="brand-logo">Beans Love Beer</Link>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to='/' className='right home'>Home</Link></li>
              <li><Link to='/favorites' className='right favorites'>Favorites</Link></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li><Link to='/' className='right home'>Home</Link></li>
          <li><Link to='/favorites' className='right favorites'>Favorites</Link></li>
        </ul>
      </div>
    )
  }
}


export default Navbar;