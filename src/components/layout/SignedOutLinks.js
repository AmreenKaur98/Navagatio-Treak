import React from 'react';
import { NavLink }  from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
        <li class="waves-effect"><NavLink to='/visitpalce'> Visiting Place </NavLink> </li>
        <li class="waves-effect"><NavLink to='/about'> About </NavLink> </li>
    </ul>
  )
}

export default SignedOutLinks;
