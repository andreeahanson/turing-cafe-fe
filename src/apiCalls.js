export const fetchData = () => {
  const myData = fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .catch(error => console.log('error'))
    return Promise.resolve(myData)
}

// export const addReservation = reservation => {
//   return fetch('http://localhost:3001/api/v1/reservations', {
//     method: 'POST',
//     body: JSON.stringify({ reservation }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     if(!response.ok) {
//       throw Error('Error adding grocery')
//     } else {
//       return response.json()
//     }
//   }
// }