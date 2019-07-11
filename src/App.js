import React, { Component } from 'react';
import './App.css';
import getData from './apiCalls';
import fetchData from './apiCalls';
import ReservationContainer from './ReservationContainer'

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

  render() {
    let reservations = this.state.reservations
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
