import React from 'react';
import { NavLink }  from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
        <li class="waves-effect"><NavLink to='/signin'> Login </NavLink> </li>
        <li class="waves-effect"><NavLink to='/signup'> SignUp </NavLink> </li>
        <li class=""><NavLink to='/about'> About </NavLink> </li>
    </ul>
  )
}

export default SignedInLinks;
