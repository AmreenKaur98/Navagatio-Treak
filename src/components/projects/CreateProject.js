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
          <h5 className="grey-text text-darken-3"> Create New Project </h5>

          <div className="input-feild">
            <label htmlFor="title">Title </label>
            <input type="text" name="title" ref="name" />
          </div>

          <div className="input-feild">
            <label htmlFor="content"> Content </label>
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
