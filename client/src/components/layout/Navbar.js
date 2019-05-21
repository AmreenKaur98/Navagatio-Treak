import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import axios from 'axios';


class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('http://localhost:4000/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
          <nav className="nav-class #0097a7 cyan darken-2">
          <div className="container">
            <Link to='/' className="brand-logo" > Navagatio Trek </Link>
          </div>
              <ul className="right">
                            {loggedIn ? (
                                <section className="navbar-section">
                                    <Link to="#" class="waves-effect" onClick={this.logout}>
                                    <span>logout</span></Link>

                                </section>
                            ) : (
                                    <section className="navbar-section">
                                        <Link to="/login" class="waves-effect">
                                        <span >login</span>
    				                                </Link>
                                        <Link to="/signup" class="waves-effect">
                                        <span >sign up</span>
    				                                </Link>
                                    </section>
                                )}
              </ul>
              <ul className="right">
                  <li class="waves-effect"><Link to='/visitpalce'> Visited Places </Link> </li>
                  <li class="waves-effect"><Link to='/create'> Create </Link> </li>
                  <li class="waves-effect"><Link to='/about'> About </Link> </li>
              </ul>
          </nav>
        );

    }
}


/*

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
*/
export default Navbar;
