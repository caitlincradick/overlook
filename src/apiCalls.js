const fetchAPI = type => {
  return fetch(`http://localhost:3001/api/v1/${type}`)
     .then(response => response.json())
     .catch(err => console.log(err))
 }
 
 const savePromises = () => Promise.all([fetchAPI('customers'), fetchAPI('rooms'), fetchAPI('bookings')]);

const test = () => {
  console.log("howdy")
}



 export {savePromises, test}
