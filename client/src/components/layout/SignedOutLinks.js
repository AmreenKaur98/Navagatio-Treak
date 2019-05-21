import React from 'react';
import { NavLink }  from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
        <li class="waves-effect"><NavLink to='/visitpalce'> Visited Places </NavLink> </li>
        <li class="waves-effect"><NavLink to='/create'> Create </NavLink> </li>
    </ul>
  )
}

export default SignedOutLinks;
