import { calculateTotalSpent, showAvailableRooms, showBookings, filterAvailableRooms, getTodayDate } from "./featureCode";

//GLOBAL VARIABLES
const customerName = document.querySelector('.customer-name');
const totalSpent = document.querySelector('.total-spent');
const viewRooms = document.querySelector('.view-all-rooms');
const filters = document.querySelector('.filters');
const bookingsView = document.querySelector('.all-reservations');
const filterButtons = document.querySelectorAll('.filter-btn');
const logOutButton = document.querySelector('.log-out');
const findBookingsButton = document.querySelector('.find-button');
const calendarInput = document.getElementById('booking-calendar');
const loginButton = document.querySelector('.login-button');
const mainBookingPage = document.querySelector('.booking-page');
const loginPage = document.querySelector('.login-page');
const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');

let currentCustomer;

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

const showFilterSection = () => {
  show(filters)
}

const login = (password, username, customers, rooms, bookings) => {
 const userID = username.replace("customer" , "");
 const customersX = customers.find(customer => customer.id === parseInt(userID)); 
 currentCustomer = customersX
  if(!password || !username){
    alert('Please fill in username and/or password')
  } else if(password !== 'overlook2021') {
   alert('Incorrect Password')
  } else if (username !== `customer${userID}` || userID > 50) {
    alert('Please correct username')
  }
    if(password === 'overlook2021' && username === `customer${userID}` && userID <= 50) {
      show(mainBookingPage);
      hide(loginPage);
      displayCustomer(customersX);
      displayTotalSpent(customersX, rooms, bookings);
      displayAllBookings(customersX,rooms, bookings);
    }
  return customersX
};
  

const displayCustomer = (customer) => {
    customerName.innerText = customer.name
};

const displayTotalSpent = (currentCustomer, rooms, booking) => {
  let totalAmount =  calculateTotalSpent(currentCustomer, rooms, booking);
  totalSpent.innerText = `You've spent $${totalAmount} at the Overlook Hotel.`
};

const displayAvailableRooms = (selectedDate, rooms, booking) => {
  let today =  getTodayDate();
    if(calendarInput.value < today || calendarInput.value.length > 10){
      viewRooms.innerHTML = ''
      viewRooms.innerHTML = `<p> ERROR ! Please select a valid date !<p>`
    } else {
      const roomInfo = showAvailableRooms (selectedDate, rooms, booking);
      viewRooms.innerHTML = ''
      roomInfo.forEach(room => {
      viewRooms.innerHTML += `
      <section class = 'room-display-container'>
        <div class='avail-room-container'>
          <h3 class='room-type'> ${room.roomType}</h3>
          <p class='room-num'> Room #${room.number} </p>
          <p class='bed-size'>Bed Size:${room.bedSize} </p>
          <p class='num-beds'>Number of Beds:${room.numBeds}</p>
          <p class='cost'> Cost per Night: $${room.costPerNight}</p>
          <p class='bidet'> This room has a bidet: ${room.bidet} </p>
          <button class='book-room' id='${room.number}'> Book Room </button>
        </div>
      `
        });
    };
};

const displayFilteredRooms = (selectedDate, roomType, rooms, booking) => {
  const roomInfo = filterAvailableRooms(selectedDate, roomType, rooms, booking);
  viewRooms.innerHTML = ''
  roomInfo.forEach(room => {
  viewRooms.innerHTML += `
  <section class = 'room-display-container'>
    <div class='avail-room-container'>
      <h3 class='room-type'> ${room.roomType}</h3>
      <p class='room-num'> Room #${room.number} </p>
      <p class='bed-size'>Bed Size:${room.bedSize} </p>
      <p class='num-beds'>Number of Beds:${room.numBeds}</p>
      <p class='cost'> Cost per Night: $${room.costPerNight}</p>
      <p class='bidet'> This room has a bidet: ${room.bidet} </p>
      <button class='book-room' ID="${room.number}"> Book Room </button>
    </div>
  `
    });
};

const displayAllBookings = (currentCustomer, rooms, booking) => {
  const bookings = showBookings(currentCustomer, rooms, booking);
  bookingsView.innerHTML = ''
  bookings.forEach(book => {
  bookingsView.innerHTML += `
  <div class='individual-reservation-container'>
    <p class='reserved-date'>Date: ${book.date}</p>
    <p class= 'reserved-type'>Room: ${book.roomType}, # ${book.roomNumber}</p>
    <p class='reserved-cost'> Cost: ${book.cost}</p>
  </div>
  `
  });
};

const setCalendarAttributes = () => {
  let today =  getTodayDate();
  calendarInput.setAttribute("min", today);
}

const displayNoRooms = (selectedDate, rooms, booking) => {
  const roomInfo = showAvailableRooms (selectedDate, rooms, booking); 
  if(!roomInfo.length){
    viewRooms.innerHTML = 
    `<p>Sorry, there are no rooms available on this date. Please select a new date. `
  };
};

const displayNoFilteredRooms = (selectedDate, roomType, rooms, booking) => {
  const roomInfo = filterAvailableRooms(selectedDate, roomType, rooms, booking); 
  if(!roomInfo.length){
    viewRooms.innerHTML = 
    `<p>Sorry, there are no ${roomType}s available on this date. Please select a new fitler. `
  };
};

const logOut = () => {
  usernameInput.value = ''
  passwordInput.value = ''
  hide(mainBookingPage);
  show(loginPage);
};

export {
  displayCustomer, 
  displayAvailableRooms, 
  displayFilteredRooms,  
  filterButtons, 
  logOutButton, 
  findBookingsButton,
  filters, 
  setCalendarAttributes, 
  calendarInput, 
  showFilterSection,
  viewRooms, 
  loginButton, 
  usernameInput, 
  passwordInput, 
  displayNoRooms, 
  displayNoFilteredRooms, 
  login,
  logOut, 
  currentCustomer,
  displayAllBookings
};