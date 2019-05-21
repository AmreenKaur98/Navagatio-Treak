import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
  constructor() {
      super()
      this.state = {
          username: '',
          password: '',
          redirectTo: null
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit(event) {
      event.preventDefault()
      console.log('handleSubmit')

      axios.post('http://localhost:4000/user/login', {
              username: this.state.username,
              password: this.state.password
          })
          .then(response => {
              console.log('login response: ')
              console.log(response)
              if (response.status === 200) {
                  // update App.js state
                  this.props.updateUser({
                      loggedIn: true,
                      username: response.data.username
                  })
                  // update the state to redirect to home
                  this.setState({
                      redirectTo: 'http://localhost:4000/user/'
                  })
              }
          }).catch(error => {
              console.log('login error: ')
              console.log(error);

          })
      }

  render(){
    return(
      <div className="container">
        <form onSubmit={ this.handleSubmit } className="white">
          <h5 className="grey-text text-darken-3"> Login </h5>

          <div className="input-feild">
            <label htmlFor="email">USER NAME </label>
            <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} />
          </div>

          <div className="input-feild">
            <label htmlFor="password">password </label>
            <input type="password" name="password" value={this.state.password} onChange={ this.handleChange } />
          </div>

        <div className="input-field">
          <button type="submit" className="btn waves-effect waves-light"> LOGIN </button>
          </div>
          </form>
        </div>
    )
  }
}

export default Login;
