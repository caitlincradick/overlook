// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './dist/images/water-image.jpg'
// import {calculateTotalSpent, showBookings } from '../src/featureCode.js';
// import {customersTestData,bookingsTestData,roomsTestData } from '../src/test-data.js';
import {savePromises} from './apiCalls';
import { displayCustomer, displayTotalSpent, displayAvailableRooms, displayAllBookings, filterButtons, findBookingsButton, setCalendarAttributes, calendarInput, displayFilteredRooms, showFilterSection, viewRooms} from './domUpdates';
// import { customersTestData, bookingsTestData, roomsTestData } from './test-data';
import {showAllFilters, showBookings, showAvailableRooms} from './featureCode';

console.log('This is the JavaScript entry file - your code begins here.'); 
let customers;
let rooms;
let bookings;


//Event Listeners 
window.addEventListener('load', () => {
  savePromises()
  .then(data => {
    // console.log('LOADING?')
    customers = data[0].customers;
    rooms = data[1].rooms;
    bookings = data[2].bookings;
    // console.log('global', bookings[0].date)
    displayCustomer(customers[4])
    showBookings(customers[4],rooms, bookings)
    displayTotalSpent(customers[4], rooms, bookings)
    displayAllBookings(customers[4],rooms, bookings)
    showAllFilters(rooms)
  });
    setCalendarAttributes()
  
});

findBookingsButton.addEventListener('click', () => {
  if(!calendarInput.value){
    alert('Please select a date!')
  } else {
  displayAvailableRooms(calendarInput.value.split('-').join('/'),rooms, bookings)
  showFilterSection()
  }
})

filterButtons.forEach(filterBtn => {
  filterBtn.addEventListener('click', () => {
  displayFilteredRooms(calendarInput.value.split('-').join('/'),filterBtn.id.split('-').join(' '), rooms, bookings)
})
})

viewRooms.addEventListener('click', (event) =>  {
  if(event.target.classList.contains('book-room')){
    const bookingID = event.target.id 
    console.log(bookingID)
  }
})

