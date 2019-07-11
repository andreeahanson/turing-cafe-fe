import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      numberOfGuests: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSumbit = (event) => {
    event.preventDefault();
    let newReservation = {...this.state, id:Date.now()}
    this.props.addReservation(newReservation);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Name" onChange={this.handleChange} name="name" value={this.state.name} />
        <input type="text" placeholder="Date (mm/dd)" onChange={this.handleChange} name="date" value={this.state.date} />
        <input type="text" placeholder="Time" onChange={this.handleChange} name="time" value={this.state.time} />
        <input type="text" placeholder="Number of guests" onChange={this.handleChange} name="numberOfGuests" value={this.state.numberOfguests} />
        <button onClick={this.handleSumbit}>Make Reservation</button>
      </form>
    )
  }
} 

export default Form;