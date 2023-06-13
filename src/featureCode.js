// import {bookingsTestData,roomsTestData } from '../src/test-data.js';
// import {customersTestData,bookingsTestData,roomsTestData } from '../src/test-data.js';

// import { loginButton } from "./domUpdates"
//NOOOOO IMPORTING DOM 


//Functions
const calculateTotalSpent = (currentCustomer, rooms, booking) => {
  return rooms.reduce((total, room) => {
    booking.forEach(booking => {
    if(booking.userID === currentCustomer.id && booking.roomNumber === room.number) {
     total += room.costPerNight
    }
      })
    return total
  }, 0).toFixed(2)
}


const showBookings = (currentCustomer, rooms, booking) => {
  return booking.reduce((arr, booking) => {
    rooms.forEach(room => {
      if(booking.userID === currentCustomer.id && booking.roomNumber === room.number) {
      const obj = {date: booking.date, roomNumber: booking.roomNumber, roomType: room.roomType, cost:   
      room.costPerNight }
      arr.push(obj)
      arr.sort((a,b) =>  new Date(b.date) - new Date(a.date))
      }
    })
    return arr 
  }, [])
}


const showAvailableRooms = (selectedDate, rooms, bookings) => {
  // console.log('selectedDate', selectedDate)
  const filteredRms = bookings.filter(booking => booking.date === selectedDate)
  // console.log("BOOKED ROOMS", filteredRms)
  const unavailRoomNums = filteredRms.map(room => room.roomNumber)
  // console.log('unavailRoomNums', unavailRoomNums)
  const availRooms = rooms.filter(room => !unavailRoomNums.includes(room.number))
  console.log('availRooms', availRooms)
  return availRooms
}

    const getTodayDate = () => {
      let date = new Date().toJSON().slice(0, 10)
      return date
      }

    //data format for date 
    const formatTodayDate = () => {
      let date = new Date().toJSON().slice(0, 10).split('-').join('/')
          return date
      }

    const showAllFilters = (rooms) => {
      let filterArray = []
      rooms.forEach(room => {
        if(!filterArray.includes(room.roomType)){
        filterArray.push(room.roomType)
        }
      })
      return filterArray
    }

  const preventDoubleBooking = (bookings, selectedDate, roomNumber, currentCustomer) => {
    // console.log('preventBOokings', bookings)
    const filterUser = bookings.filter(booking => booking.userID === currentCustomer.id)
    // console.log('filtered USERS', filterUser)
    // const alreadyBooked = filterUser.filter(booking => booking.date === selectedDate)
    // const doubleBooked = alreadyBooked.filter(booked => booked.roomNumber === parseInt(roomNumber));
    // console.log('ALREADY BOOKED', alreadyBooked)
    // console.log('DOUBLE BOOKED', doubleBooked)
    // //slice it off the end
    // if(doubleBooked.length) {
    //   bookings.pop()
    //   // alert('room has already been booked')
    //   console.log("POP IT", bookings)
    // }
    return filterUser
  }

  const filterAvailableRooms = (selectedDate, roomType, rooms, booking) => {
    const availableRooms = showAvailableRooms(selectedDate, rooms, booking)
   return booking.reduce((arr, booking) => {
        availableRooms.forEach(room => {
          if(selectedDate && booking.roomNumber === room.number && room.roomType === roomType) {
            console.log('hello')
         arr.push(room)
          }
          })
      return arr.filter((item, index) => arr.indexOf(item) === index)
    }, [])  
    }
  






export {
  calculateTotalSpent, 
  showBookings,
  showAvailableRooms, 
  filterAvailableRooms, 
  getTodayDate, 
  showAllFilters, 
  formatTodayDate, 
  preventDoubleBooking, 
}