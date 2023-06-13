const fetchAPI = type => {
  return fetch(`http://localhost:3001/api/v1/${type}`)
     .then(response => response.json())
     .catch(err => console.log(err))
 }
 
 const savePromises = () => Promise.all([fetchAPI('customers'), fetchAPI('rooms'), fetchAPI('bookings')]);

const test = () => {
  console.log("howdy")
}

const postAPI = (userID, date, roomNumber) => {
  return fetch ('http://localhost:3001/api/v1/bookings', {
    method:'POST', 
    body: JSON.stringify({userID: userID, date: date, roomNumber: parseInt(roomNumber)}), 
    headers: { "Content-Type": "application/json"}
  })
    .then(response => response.json())
    .then(json => console.log(json.message))
    .catch( () => alert("Server is down, please try again later."))

}

 export {savePromises, test, postAPI, fetchAPI}
