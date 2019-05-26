import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';


class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('http://localhost:4000/user/logout')
          .then(response => { console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error from nav.js')
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
                                    <span class="waves-effect"><Link to='/visitpalce'> Visited Places </Link> </span>
                                    <span class="waves-effect"><Link to='/create'> Create </Link> </span>
                                    <span class="waves-effect"><Link to='/about'> About </Link> </span>
                                      <span class="waves-effect"><Link to='/login' >Login </Link></span>
                                      <span class="waves-effect"> <Link to='/signup' > Sign Up  </Link> </span>
                                    </section>
                                )}
              </ul>
              <ul className="right">
              <li></li>
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
