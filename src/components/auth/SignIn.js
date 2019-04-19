import React, {Component} from 'react';

class SignIn extends Component {
  state ={
    email:'',
    password:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit =(e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render(){
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3"> Sign In </h5>
          <div className="input-feild">
            <label htmlFor="email">Email </label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-feild">
            <label htmlFor="password">password </label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
        <div className="input-field">
          <button className="btn waves-effect waves-light"> LOGIN </button>
          </div>
          </form>
        </div>
    )
  }
}

export default SignIn;