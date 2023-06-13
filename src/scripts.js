// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import {calculateTotalSpent, showBookings } from '../src/featureCode.js';
// import {customersTestData,bookingsTestData,roomsTestData } from '../src/test-data.js';
import {savePromises, postAPI, fetchAPI} from './apiCalls';
import { displayCustomer, displayTotalSpent, displayAvailableRooms, displayAllBookings, filterButtons, findBookingsButton, currentCustomer, setCalendarAttributes, calendarInput, displayFilteredRooms, showFilterSection, viewRooms, logOutButton, loginButton, showBookingPage, usernameInput, passwordInput, loginErrorHandling, displayNoRooms, displayNoFilteredRooms, login, logOut, calendarErrorHandling} from './domUpdates';
// import { customersTestData, bookingsTestData, roomsTestData } from './test-data';
import {showAllFilters, showBookings, showAvailableRooms, preventDoubleBooking} from './featureCode';

console.log('This is the JavaScript entry file - your code begins here.'); 
let customers;
let rooms;
let bookings;


//function to get data back

//Event Listeners 
loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  savePromises()
  .then(data => {
    customers = data[0].customers;
    rooms = data[1].rooms;
    bookings = data[2].bookings;
    login(passwordInput.value, usernameInput.value, customers, rooms, bookings)
    showBookings(currentCustomer,rooms, bookings)
    showAllFilters(rooms)
  });
  setCalendarAttributes()
  
});


findBookingsButton.addEventListener('click', () => {
  if(!calendarInput.value){
    alert('Please select a date!')
  } else {
    displayAvailableRooms(calendarInput.value.split('-').join('/'),rooms, bookings, currentCustomer)
    showFilterSection()
    displayNoRooms(calendarInput.value.split('-').join('/'), rooms, bookings)
  }
})



filterButtons.forEach(filterBtn => {
  filterBtn.addEventListener('click', () => {
    // noDuplicates(calendarInput.value.split('-').join('/'),filterBtn.id.split('-').join(' '), rooms, bookings)
    displayFilteredRooms(calendarInput.value.split('-').join('/'),filterBtn.id.split('-').join(' '), rooms, bookings)
    displayNoFilteredRooms(calendarInput.value.split('-').join('/'),filterBtn.id.split('-').join(' '), rooms, bookings)
  })
})


viewRooms.addEventListener('click', (event) =>  {
  if(event.target.classList.contains('book-room')){
    const roomNum = event.target.id
    event.target.parentElement.parentElement.remove()
       console.log(postAPI(currentCustomer.id, calendarInput.value.split('-').join('/'), event.target.id))
        getData()
       for(let i = 0; i < bookings.length; i++){
        let booking = bookings[i]
         alert(`Thank you for booking with us, your confirmation is ${booking.id}`)
         break
       }
      
        // displayAvailableRooms(calendarInput.value.split('-').join('/'), rooms, bookings)
        displayAllBookings (currentCustomer, rooms, bookings)
        console.log('revent aray', preventDoubleBooking(bookings, calendarInput.value.split('-').join('/'), event.target.id, currentCustomer))
      }
    })
    
    const getData = () => {
      savePromises().then(data => {
        customers = data[0].customers;
        // console.log('CUSTOMERS', customers)
        rooms = data[1].rooms;
        // console.log('ROOOOOM', rooms)
        bookings = data[2].bookings;
        console.log('BOOKINGS BACK', bookings)
      })
    }
    // console.log('AHHHHHHH', bookings)
    // noDuplicates(calendarInput.value.split('-').join('/'),filterBtn.id.split('-').join(' '), rooms, bookings)
logOutButton.addEventListener('click', () => {
  logOut()
})