import { calculateTotalSpent, showAvailableRooms, showBookings, filterAvailableRooms, getTodayDate } from "./featureCode";
// import { bookingsTestData, roomsTestData } from './test-data';

//Global Variables
const customerName = document.querySelector('.customer-name');
const totalSpent = document.querySelector('.total-spent');
const viewRooms = document.querySelector('.view-all-rooms');
const filters = document.querySelector('.filters');
const bookingsView = document.querySelector('.all-reservations')
const filterButtons = document.querySelectorAll('.filter-btn')
const logOutButton = document.querySelector('.log-out')
const findBookingsButton = document.querySelector('.find-button') 
const calendarInput = document.getElementById('booking-calendar')
const bookRoomBtn = document.querySelector('.book-btn-container') 

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

const showFilterSection = () => {
  show(filters)
}

// const displayInputError = () => {
//   if(calendarInput.value.split('-').join('/') < )
// }

const displayCustomer = (customer) => {
    customerName.innerText = customer.name
};

const displayTotalSpent = (currentCustomer, rooms, booking) => {
 let totalAmount =  calculateTotalSpent(currentCustomer, rooms, booking)
 console.log('currentCustomer', currentCustomer)
 console.log(totalAmount)
totalSpent.innerText = `You've spent $${totalAmount} at the Overlook Hotel.`
}

//going to need to have the ID in there for selecting it !!!!!! 
const displayAvailableRooms = (selectedDate, rooms, booking) => {
// let dateValue = calendarInput.value.split('-').join('/')
const roomInfo = showAvailableRooms (selectedDate, rooms, booking) 
// console.log('DISPLAYroominfo', roomInfo)
viewRooms.innerHTML = ''
roomInfo.forEach(room => {
  // console.log('ROOOOOOOM', room)
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
})
}


const displayFilteredRooms = (selectedDate, roomType, rooms, booking) => {
// selectedDate = calendarInput.value.split('-').join('/')
const roomInfo = filterAvailableRooms (selectedDate, roomType, rooms, booking) 
console.log('FILTERroominfo', roomInfo)
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
})
}




const displayAllBookings = (currentCustomer, rooms, booking) => {
const bookings = showBookings(currentCustomer, rooms, booking)
bookings.forEach(book => {
bookingsView.innerHTML += `
<div class='individual-reservation-container'>
<p class='reserved-date'>Date: ${book.date}</p>
<p class= 'reserved-type'>Room: ${book.roomType}, # ${book.roomNumber}</p>
<p class='reserved-cost'> Cost: ${book.cost}</p>
</div>
`
})
}


const setCalendarAttributes = () => {
  let today =  getTodayDate()
  calendarInput.setAttribute("min", today)
}


// const getInput = () => {
// let bookingDate = calendarInput.value.split('-').join('/')
// console.log('BOOKING DATE', bookingDate)
// return bookingDate
// }




export {
  displayCustomer, 
  displayTotalSpent, 
  displayAvailableRooms, 
  displayFilteredRooms, 
  displayAllBookings, 
  filterButtons, 
  logOutButton, 
  findBookingsButton,
  filters, 
  setCalendarAttributes,
  // getInput,  
  calendarInput, 
  showFilterSection,
  viewRooms
}