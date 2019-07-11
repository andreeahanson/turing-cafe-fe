import React from 'react';
import './ReservationCard.css'

const ReservationCard = ({id, name, date, time, numberOfGuests}) => {
  return (
    <article key={id} id={id}>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{numberOfGuests}</p>
    </article>
  )
}

export default ReservationCard;