import React, { Component } from 'react';
import axios from 'axios';

class Delrow extends Component {
  constructor(props) {
       super(props);
       this.delete = this.delete.bind(this);
   }

   delete(e) {
       axios.get('http://localhost:4000/nav/delete/'+this.props.cur._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
   }
  render() {
    return (
        <tr>
          <td>
            {this.props.cur.name_of_place}
          </td>
          <td>
            {this.props.cur.check_in}
          </td>
          <td>
            {this.props.cur.check_out}
          </td>
          <td>
            {this.props.cur.no_of_people}
          </td>
          <td>
            {this.props.cur.price}
          </td>
          <td>
            <button onClick={this.delete} className="btn waves-effect waves-light">Delete</button>
          </td>
        </tr>
    );
  }
}

export default Delrow;
