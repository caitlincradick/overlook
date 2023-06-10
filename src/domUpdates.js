import { calculateTotalSpent, showAvailableRooms } from "./featureCode";
import { bookingsTestData, roomsTestData } from './test-data';

//Global Variables
const customerName = document.querySelector('.customer-name');
const totalSpent = document.querySelector('.total-spent');
const viewRooms = document.querySelector('.view-all-rooms');

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
`
})
}




export {
  displayCustomer, 
  displayTotalSpent, 
  displayAvailableRooms
}