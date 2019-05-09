import React from 'react';
import { NavLink }  from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
        <li class="waves-effect"><NavLink to='/visitpalce'> Visited Places </NavLink> </li>
    </ul>
  )
}

export default SignedOutLinks;
