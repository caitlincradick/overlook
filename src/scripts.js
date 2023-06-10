// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './dist/images/water-image.jpg'
// import {calculateTotalSpent, showBookings } from '../src/featureCode.js';
// import {customersTestData,bookingsTestData,roomsTestData } from '../src/test-data.js';
import {savePromises, test} from './apiCalls';
import { displayCustomer, displayTotalSpent, displayAvailableRooms, displayAllFilters, displayAllBookings, filterButtons, findBookingsButton, setCalendarAttributes} from './domUpdates';
import { customersTestData, bookingsTestData, roomsTestData } from './test-data';
import { getTodayDate, showAllFilters, showBookings, filterAvailableRooms } from './featureCode';

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
    console.log(customers)
  });
  // test()
  console.log(savePromises())
  displayCustomer(customersTestData)
  displayTotalSpent(customersTestData[4], roomsTestData, bookingsTestData)
  console.log('today date', getTodayDate())
  displayAvailableRooms('2022/04/22',roomsTestData, bookingsTestData)
  showBookings(customersTestData[4],roomsTestData, bookingsTestData)
  displayAllBookings(customersTestData[4],roomsTestData, bookingsTestData)
  showAllFilters(roomsTestData)
  setCalendarAttributes()
  // displayAllFilters(roomsTestData)
});


// console.log('buttons', filterButtons)
// filterButtons.forEach(filterBtn => {
//   filterBtn.addEventListener('mousedown', () => {
//    console.log('dang')
//   })
// })

// document.addEventListener('click', function(event) {
//   if (event.target.matches('.filter-btns')) {
//     console.log('dang')
//     clearView()
    
//   }
// });
  
  findBookingsButton.addEventListener('click', () => {
    console.log('sup')
  })
