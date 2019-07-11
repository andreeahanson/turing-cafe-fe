import React, { Component } from 'react';
import './App.css';
import { fetchData, addReservation } from './apiCalls';
import ReservationContainer from './ReservationContainer';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetchData()
      .then(data => this.setState({reservations : data}))
      .catch(error => this.setState({error: 'Error fetching data'}))
  }

  updateReservation = (newReservation) => {
    const updatedReservations = [...this.state.reservations, newReservation]
    this.setState({reservations: updatedReservations})
  }



  render() {
    let reservations = this.state.reservations
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form reservations={reservations} addReservation={this.updateReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
