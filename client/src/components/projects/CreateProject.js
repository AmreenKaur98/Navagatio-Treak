import React, {Component} from 'react';
import axios from 'axios';

class CreateProject extends Component {
    constructor(props) {
      super(props);
        this.onChangeNameofplace = this.onChangeNameofplace.bind(this);
        this.onChangeCheckIn = this.onChangeCheckIn.bind(this);
        this.onChangeCheckOut = this.onChangeCheckOut.bind(this);
        this.onChangeNoOfPeople = this.onChangeNoOfPeople.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
      this.state ={
        name_of_place:'',
        check_in:'',
        check_out:'',
        no_of_people:'',
        price:''
    }
  }

    onChangeNameofplace(e) {
      this.setState({
        name_of_place: e.target.value
      });
    }
    onChangeCheckIn(e) {
      this.setState({
        check_in:e.target.value
      });
    }
     onChangeCheckOut(e) {
        this.setState({
          check_out:e.target.value
        });
      }
      onChangeNoOfPeople(e) {
        this.setState({
          no_of_people:e.target.value
        });
      }
      onChangePrice(e) {
        this.setState({
          price:e.target.value
        });
      }

    onSubmit(e) {
      e.preventDefault();
      console.log(`state:${this.state.name_of_place}`);
      console.log(`state:${this.state.price}`);

      const newstate = {
                  name_of_place: this.state.name_of_place,
                  check_in: this.state.check_in,
                  check_out: this.state.check_out,
                  no_of_people: this.state.no_of_people,
                  price:this.state.price
      }

        axios.post('http://localhost:4000/nav/add', newstate)
        .then(res => console.log(res.data));

    this.setState({
      name_of_place:'',
      check_in:'',
      check_out:'',
      no_of_people:'',
      price:''
    })
  }

  render(){
    return(
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
        <b>  <h5 className="grey-text text-darken-3"> Information About Place To Visit </h5> </b>

          <div className="input-feild">
            <label htmlFor="title"> NAME OF PLACE </label>
            <input type="text" name="name_of_place" value={this.state.name_of_place} onChange={this.onChangeNameofplace} />
          </div>

          <div className="input-feild">
            <label htmlFor="date"> Check-in date </label>
            <input type="date" name="check_in" value={this.state.check_in} onChange={this.onChangeCheckIn} />
          </div>

          <div className="input-feild">
            <label htmlFor="date"> Check-out date </label>
            <input type="date" name="check_out" value={this.state.check_out} onChange={this.onChangeCheckOut} />
          </div>

          <div className="input-feild">
            <label htmlFor="number"> Number of people </label>
            <input type="number" name="no_of_people" value={this.state.no_of_people} onChange={this.onChangeNoOfPeople} />
          </div>

          <div className="input-feild">
            <label htmlFor="price"> Price </label>
            <input type="number" name="price" value={this.state.price} onChange={this.onChangePrice} />
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
