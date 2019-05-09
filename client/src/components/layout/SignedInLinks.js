import React from 'react';
import { NavLink }  from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
        <li class="waves-effect"><NavLink to='/create'> Create </NavLink> </li>
        <li class="waves-effect"><NavLink to='/signin'> SignIn </NavLink> </li>
        <li class="waves-effect"><NavLink to='/signup'> SignUp </NavLink> </li>
        <li class="waves-effect"><NavLink to='/about'> About </NavLink> </li>
    </ul>
  )
}

export default SignedInLinks;
