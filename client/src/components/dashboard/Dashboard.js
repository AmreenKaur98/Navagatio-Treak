import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

  const List = props => (
      <tr>
          <td>{props.cur.name_of_place}</td>
          <td>{props.cur.check_in}</td>
          <td>{props.cur.check_out}</td>
          <td>{props.cur.no_of_people}</td>
          <td>{props.cur.price}</td>
      </tr>
  )
class Dashboard extends Component {

  constructor(props) {
          super(props);
          this.state = {newstate: []};
      }

      componentDidMount() {
          axios.get('http://localhost:4000/nav/')
              .then(response => {
                  this.setState({newstate: response.data});
              })
              .catch(function (error) {
                  console.log(error);
              })
            }
      navlist()
      {
        return this.state.newstate.map(function(currentstate, i) {
            return <List cur={currentstate} key={i} />;
          });
      }
  render()
  {
    return(
    <div>
      <table>
      <thead class="z-depth-5 blue-text">
            <tr>
                <th>NAME OF PLACE</th>
                <th>CHECK IN DATE</th>
                <th>CHECK OUT DATE</th>
                <th>NUMBER OF PEOPLE</th>
                <th>PRICE</th>
            </tr>
       </thead>
        <tbody class="z-depth-5 white-text">
             { this.navlist() }
        </tbody>
      </table>
    </div>
    )
  }
}

export default Dashboard;
