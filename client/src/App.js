import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateProject from './components/projects/CreateProject';
import DefaultPage from './components/page/DefaultPage';
import MainPage from './components/page/MainPage';

class App extends React.Component
{
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('http://localhost:4000/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

render()
  {
    return(
      <BrowserRouter>
      <div>
      <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
      {this.state.loggedIn && <h4 className="white-text"><center>  Welcome {this.state.username} Hope you enjoy it!</center></h4>}
       <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/about' component={DefaultPage} />
        <Route path='/visitpalce' component={Dashboard} />
        <Route path="/login" render={() => <Login updateUser={this.updateUser} />} />
        <Route path="/signup"  render={() => <Signup/>}   />
        <Route path='/create' component={CreateProject} />
       </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
