import React from 'react';
import { Link }  from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className="nav-class #0097a7 cyan darken-2">
    <div className="container">
      <Link to='/' className="brand-logo"> Navagatio Trek </Link>
      <SignedInLinks />
      <SignedOutLinks />
    </div>
    </nav>
  )
}

export default Navbar;
