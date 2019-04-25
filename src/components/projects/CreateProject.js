import React, {Component} from 'react';
import axios from 'axios';

class CreateProject extends Component {
  state ={
  title:'',
  content:''
  }
  /*handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  onChange={this.handleChange}
  */
  addobj(obj) {
    axios.request({
      method:'post',
      url:'http://localhost:3000/visitpalce',
      data:obj
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e)
  {
    const obj ={
      title: this.refs.title.value,
      content: this.refs.content.value
    }
    this.addobj(obj);
    e.preventDefault();
  }

  render(){
    return(
      <div className="container">
        <form onSubmit={this.onSubmit.bind(this)} className="white">
        <b>  <h5 className="grey-text text-darken-3"> Information About Place To Visit </h5> </b>

          <div className="input-feild">
            <label htmlFor="title"> NAME OF PLACE </label>
            <input type="text" name="title" ref="name" />
          </div>

          <div className="input-feild">
            <label htmlFor="date"> Check-in date </label>
            <input type="date" name="checkin" ref="arrdate" />
          </div>

          <div className="input-feild">
            <label htmlFor="date"> Check-out date </label>
            <input type="date" name="checkout" ref="leavedate" />
          </div>

          <div>
            <label htmlFor="number"> Number of people </label>
            <input type="number" name="number" ref="number" />
          </div>

          <div className="input-feild">
            <label htmlFor="content">  Reviews </label>
            <textarea name="content" ref="content"  className="materialise-textarea">  </textarea>
          </div>

        <div className="input-field">
          <button value="Save" className="btn waves-effect waves-light"> CREATE </button>
        </div>

        </form>
        </div>
    )
  }
}

export default CreateProject;
