// import {bookingsTestData,roomsTestData } from '../src/test-data.js';
import {customersTestData,bookingsTestData,roomsTestData } from '../src/test-data.js';

//Functions
const calculateTotalSpent = (currentCustomer, room, booking) => {
  console.log(currentCustomer)
  return room.reduce((total, room) => {
    booking.forEach(booking => {
    if(booking.userID === currentCustomer.id && booking.roomNumber === room.number) {
     total += room.costPerNight
    }
      })
    return total 
  }, 0)
}


const showBookings = (currentCustomer, room, booking) => {
  return booking.reduce((arr, booking) => {
    room.forEach(room => {
      if(booking.userID === currentCustomer.id && booking.roomNumber === room.number) {
      const obj = {date: booking.date, roomNumber: booking.roomNumber, roomType: room.roomType, cost:   
      room.costPerNight }
      arr.push(obj)
      arr.sort((a,b) =>  new Date(b.date) - new Date(a.date))
      console.log(arr)
      }
    })
    return arr 
  }, [])
}


const showAvailableRooms = (todayDate, room, booking) => {
  return booking.reduce((arr, booking) => {
      room.forEach(availRoom => {
        if(booking.date === todayDate && booking.roomNumber === availRoom.number) {
       arr.push(availRoom)
        }
        })
    return arr
  }, [])
  }

  const filterAvailableRooms = (todayDate, roomType) => {
    let available = false 
    return bookingsTestData.reduce((arr, booking) => {
        roomsTestData.forEach(room => {
          if(booking.date === todayDate && booking.roomNumber === room.number && room.roomType === roomType) {
         arr.push(room)
        available = true 
          }
          })
      if( !available && booking.date != todayDate) {
        return `Room is unavailabe, please adjust your search!`
      } else {
      return arr
      }
    }, []) 
    }
    



export {
  calculateTotalSpent, 
  showBookings,
  showAvailableRooms, 
  filterAvailableRooms
}