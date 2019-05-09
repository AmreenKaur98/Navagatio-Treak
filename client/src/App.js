import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import DefaultPage from './components/page/DefaultPage';
import MainPage from './components/page/MainPage';

class App extends React.Component
{
render()
  {
    return(
      <BrowserRouter>
      <div>
       <Navbar />
       <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/about' component={DefaultPage} />
        <Route path='/visitpalce' component={Dashboard} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateProject} />
       </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
