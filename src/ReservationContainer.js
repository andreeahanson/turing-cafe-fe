import React from 'react';
import ReservationCard from './ReservationCard';
import './ReservationContainer.css'

const ReservationContainer = ({reservations}) => {
  const allReservations = reservations.map(reservation => {
    return (
      <main>
        <ReservationCard id={reservation.id}  name={reservation.name} date={reservation.date} time={reservation.time} numberOfGuests={reservation.number} />
      </main>
    )
  })
  return allReservations;
}

export default ReservationContainer;