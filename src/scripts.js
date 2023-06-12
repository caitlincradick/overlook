// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './dist/images/water-image.jpg'
// import {calculateTotalSpent, showBookings } from '../src/featureCode.js';
// import {customersTestData,bookingsTestData,roomsTestData } from '../src/test-data.js';
import {savePromises, postAPI, fetchAPI} from './apiCalls';
import { displayCustomer, displayTotalSpent, displayAvailableRooms, displayAllBookings, filterButtons, findBookingsButton, setCalendarAttributes, calendarInput, displayFilteredRooms, showFilterSection, viewRooms, logOutButton, loginButton, showBookingPage, usernameInput, passwordInput, loginErrorHandling, displayNoRooms, displayNoFilteredRooms, login} from './domUpdates';
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
    // loginErrorHandling(passwordInput.value, usernameInput.value, customers[4].id), 
    login(passwordInput.value, usernameInput.value, customers, rooms, bookings)
    showBookings(customers[4],rooms, bookings)
    // displayTotalSpent(customers[4], rooms, bookings)
    // displayAllBookings(customers[4],rooms, bookings)
    showAllFilters(rooms)
  });
  setCalendarAttributes()
  
});
// })

// window.addEventListener('load', () => {
//   savePromises()
//   .then(data => {
//     customers = data[0].customers;
//     rooms = data[1].rooms;
//     bookings = data[2].bookings;
//     displayCustomer(customers[4])
//     showBookings(customers[4],rooms, bookings)
//     displayTotalSpent(customers[4], rooms, bookings)
//     displayAllBookings(customers[4],rooms, bookings)
//     showAllFilters(rooms)
//   });
//   setCalendarAttributes()
  
// });

findBookingsButton.addEventListener('click', () => {
  if(!calendarInput.value){
    alert('Please select a date!')
  } else {
    displayAvailableRooms(calendarInput.value.split('-').join('/'),rooms, bookings)
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

const getData = () => {
  savePromises().then(data => {
    customers = data[0].customers;
    // console.log('CUSTERMERS', customers)
    rooms = data[1].rooms;
    // console.log('ROOOOOM', rooms)
    bookings = data[2].bookings;
    // console.log('BOOKINGS BACK', bookings)
  })
}

viewRooms.addEventListener('click', (event) =>  {
  if(event.target.classList.contains('book-room')){
    const bookingID = event.target.id 
    console.log(bookingID)
    postAPI(customers[4].id, calendarInput.value.split('-').join('/'), event.target.id)
    getData()
    preventDoubleBooking(bookings, calendarInput.value.split('-').join('/'), event.target.id)
    // console.log('AHHHHHHH', bookings)
  }
})

// loginButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log('CLICKYYYYY')
//   // showBookingPage()
//   login(passwordInput.value, usernameInput.value)
//   console.log(passwordInput.value)
//   // console.log('GET DATA', getData())
// })


