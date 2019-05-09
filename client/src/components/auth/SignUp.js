import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
      this.onChangeFirstName = this.onChangeFirstName.bind(this);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state ={
      firstname:'',
      lastname:'',
      email:'',
      password:''
  }
}

  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`name:${this.state.firstname}`);
    console.log(`lastname:${this.state.lastname}`);
    console.log(`password:${this.state.password}`);
  this.setState({
    firstname:'',
    lastname:'',
    email:'',
    password:''
  })
}

  render(){
    return(
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3"> Sign Up </h5>

          <div className="input-feild">
            <label htmlFor="firstname"> FIRST NAME</label>
            <input type="text" name="firstname" value={this.state.firstname} onChange={this.onChangeFirstName} />
          </div>

          <div className="input-feild">
            <label htmlFor="lastname"> LAST NAME</label>
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.onChangeLastName} />
          </div>

          <div className="input-feild">
            <label htmlFor="email">Email </label>
            <input type="email" name="email" value={this.state.email} onChange={this.onChangeEmail} />
          </div>

          <div className="input-feild">
            <label htmlFor="password">password </label>
            <input type="password" name="password" value={this.state.password} onChange={this.onChangePassword} />
          </div>
        <div className="input-field">
          <button className="btn waves-effect waves-light"> SignUp </button>
          </div>
          </form>
        </div>
    )
  }
}

export default SignUp;
