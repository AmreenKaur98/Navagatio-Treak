import React, {Component} from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor() {
  		super()
  		this.state = {
  			username: '',
  			password: '',
  			confirmPassword: ''
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
      event.preventDefault();
  		console.log('sign-up handleSubmit, username: ')
  		console.log(this.state.username)
      
  		axios.post('http://localhost:4000/user/', {
  			username: this.state.username,
  			password: this.state.password}
        )
  			.then(response => {
  				console.log(response)
  				if (!response.data.errmsg) {
  					console.log('successful signup')
  					this.setState({ //redirect to login page
  						redirectTo: 'http://localhost:4000/user/login'
  					})
  				} else {
  					console.log('username already taken')
  				}
  			}).catch(error => {
  				console.log('signup error: ')
  				console.log(error)

  			})
  	}

  render(){
    return(
      <div className="container">
        <form onSubmit={ this.handleSubmit } className="white">
          <h5 className="grey-text text-darken-3"> Sign Up </h5>

          <div className="input-feild">
            <label htmlFor="username"> USER NAME </label>
            <input type="text"
                  id="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange} />
          </div>

          <div className="input-feild">
            <label htmlFor="password"> Password </label>
            <input placeholder="password"
    							type="password"
    							name="password"
    							value={this.state.password}
                  onChange={this.handleChange} />
          </div>

        <div className="input-field">
          <button type="submit" className="btn waves-effect waves-light"> SIGN UP </button>
          </div>
          </form>
        </div>
    )
  }
}

export default Signup;
