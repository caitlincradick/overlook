import { calculateTotalSpent, showAvailableRooms, showAllFilters } from "./featureCode";
import { bookingsTestData, roomsTestData } from './test-data';

//Global Variables
const customerName = document.querySelector('.customer-name');
const totalSpent = document.querySelector('.total-spent');
const viewRooms = document.querySelector('.view-all-rooms');
const filters = document.querySelector('.filters')

const displayCustomer = (customer) => {
  customer.forEach(customer => {
    customerName.innerText = customer.name
  })
};

const displayTotalSpent = (currentCustomer, rooms, booking) => {
 let totalAmount =  calculateTotalSpent(currentCustomer, rooms, booking)
 console.log(totalAmount)
totalSpent.innerText = `You've spent $${totalAmount}, 10% of proceeds go to restoring the Overlook Hotel`
}

//going to need to have the ID in there for selecting it !!!!!! 
const displayAvailableRooms = () => {
const roomInfo = showAvailableRooms ('2022/04/22',roomsTestData, bookingsTestData) 
console.log('roominfo', roomInfo)
roomInfo.forEach(room => {
viewRooms.innerHTML += `
<section class = 'room-display-container' 
 <h3 class='room-type'> ${room.roomType}</h3>
 <p class='room-num'> Room #${room.number} </p>
 <p class='bed-size'>${room.bedSize} </p>
 <p class='num-beds'>Number of Beds:${room.numBeds}</p>
 <p class='cost'> Cost per Night: $${room.costPerNight}</p>
 <p class='bidet'> This room has a bidet: ${room.bidet} </p>
`
})
}

const displayAllFilters = (rooms) => {
const allFilters = showAllFilters(rooms);
 allFilters.forEach(filter =>  {
  filters.innerHTML += `<button class="tag" id="${filter}">${filter}</button>`
 });
}

const displayAllBookings = () => {

}


export {
  displayCustomer, 
  displayTotalSpent, 
  displayAvailableRooms, 
  displayAllFilters 
}