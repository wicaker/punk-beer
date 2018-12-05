import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLinks from './SignedOutLink';
import MobileSignedInLinks from './MobileSignedIn';
import MobileSignedOutLinks from './MobileSignedOut';

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav>
          <div className="nav-wrapper green darken-2">
            <Link to='/' className="brand-logo">Beans Love Beer</Link>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <SignedOutLinks />
            <SignedInLinks />
          </div>
        </nav>
        <MobileSignedInLinks />
        <MobileSignedOutLinks />
      </div>
    )
  }
}


export default Navbar;