import './css/styles.css';
import {savePromises, postAPI} from './apiCalls';
import { displayAvailableRooms, displayAllBookings, filterButtons, findBookingsButton, currentCustomer, setCalendarAttributes, calendarInput, displayFilteredRooms, showFilterSection, viewRooms, logOutButton, loginButton, usernameInput, passwordInput, displayNoRooms, displayNoFilteredRooms, login, logOut} from './domUpdates';
import {showAllFilters, showBookings} from './featureCode';

//GLOBAL VARIABLES
let customers;
let rooms;
let bookings;

//EVENT LISTENERS
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
});

filterButtons.forEach(filterBtn => {
  filterBtn.addEventListener('click', () => {
    displayFilteredRooms(calendarInput.value.split('-').join('/'),filterBtn.id.split('-').join(' '), rooms, bookings)
    displayNoFilteredRooms(calendarInput.value.split('-').join('/'),filterBtn.id.split('-').join(' '), rooms, bookings)
  });
});

viewRooms.addEventListener('click', (event) =>  {
  if(event.target.classList.contains('book-room')){
    event.target.parentElement.parentElement.remove()
    postAPI(currentCustomer.id, calendarInput.value.split('-').join('/'), event.target.id)
    getData()
    for(let i = 0; i < bookings.length; i++){
        let booking = bookings[i]
         alert(`Thank you for booking with us, your confirmation is ${booking.id}`)
         break
       }
        displayAllBookings (currentCustomer, rooms, bookings)
      }
    });
    
    logOutButton.addEventListener('click', () => {
      logOut()
    });

    const getData = () => {
      savePromises().then(data => {
        customers = data[0].customers;
        rooms = data[1].rooms;
        bookings = data[2].bookings;
      });
    };   