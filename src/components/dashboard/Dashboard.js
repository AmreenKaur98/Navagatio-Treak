import React,{Component} from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
  render()
  {
    return(
      <div className="dashboard container">
        <div className="row">
            <div className="col s12 m6">
              <ProjectList />
              <ProjectList />
              <ProjectList />
              </div>
              <div className="col s12 m5 offset-m1">
              <Notification />
              <div>
              <br /><br />
              <button className="btn waves-effect waves-light"> ADD </button>
              <br /><br />
              <button className="btn waves-effect waves-light"> DELETE </button>
              </div>
              </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
