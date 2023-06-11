// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './dist/images/water-image.jpg'
// import {calculateTotalSpent, showBookings } from '../src/featureCode.js';
// import {customersTestData,bookingsTestData,roomsTestData } from '../src/test-data.js';
import {savePromises, test} from './apiCalls';
import { displayCustomer, displayTotalSpent, displayAvailableRooms, displayAllFilters, displayAllBookings, filterButtons, findBookingsButton, setCalendarAttributes, getInput, calendarInput, displayFilteredRooms, showFilterSection} from './domUpdates';
// import { customersTestData, bookingsTestData, roomsTestData } from './test-data';
import { getTodayDate, showAllFilters, showBookings, filterAvailableRooms, showAvailableRooms } from './featureCode';

console.log('This is the JavaScript entry file - your code begins here.'); 
let customers;
let rooms;
let bookings;

//Event Listeners 
window.addEventListener('load', () => {
  savePromises()
  .then(data => {
    customers = data[0].customers;
    rooms = data[1].rooms;
    bookings = data[2].bookings;
    console.log(customers[4])
    // getCurrentCustomer(customers[4])
    displayCustomer(customers[4])
    showBookings(customers[4],rooms, bookings)
    displayTotalSpent(customers[4], rooms, bookings)
    displayAllBookings(customers[4],rooms, bookings)
    showAllFilters(rooms)
  });
  setCalendarAttributes()
  
});


filterButtons.forEach(filterBtn => {
  filterBtn.addEventListener('click', () => {
    console.log('BUTTTTON', filterBtn.id.split('-').join(' '))
  filterAvailableRooms(calendarInput.value.split('-').join('/'),filterBtn.id.split('-').join(' '), rooms, bookings)
  displayFilteredRooms(calendarInput.value.split('-').join('/'),filterBtn.id.split('-').join(' '), rooms, bookings)
})
})

 
  findBookingsButton.addEventListener('click', () => {
    if(!calendarInput.value){
      alert('Please select a date!')
    } else {
    getInput()
    // showAvailableRooms(calendarInput.value.split('-').join('/'),rooms, bookings)
    displayAvailableRooms(calendarInput.value.split('-').join('/'),rooms, bookings)
    showFilterSection()
    }
    console.log('sup')
  })

