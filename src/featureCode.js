// import {bookingsTestData,roomsTestData } from '../src/test-data.js';
// import {customersTestData,bookingsTestData,roomsTestData } from '../src/test-data.js';


//Functions
const calculateTotalSpent = (currentCustomer, rooms, booking) => {
  console.log("currentCUstomer",currentCustomer)
  return rooms.reduce((total, room) => {
    booking.forEach(booking => {
    if(booking.userID === currentCustomer.id && booking.roomNumber === room.number) {
     total += room.costPerNight
    }
      })
    return total
  }, 0)
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
  console.log('selectedDate', selectedDate)
  const filteredRms = bookings.filter(booking => booking.date === selectedDate)
  // console.log("BOOKED ROOMS", filteredRms)
  const unavailRoomNums = filteredRms.map(room => room.roomNumber)
  // console.log('unavailRoomNums', unavailRoomNums)
  const availRooms = rooms.filter(room => !unavailRoomNums.includes(room.number))
  // console.log('availRooms', availRooms)
  return availRooms
}
  const filterAvailableRooms = (selectedDate, roomType, rooms, booking) => {
    let available = false 
    const filtered = booking.reduce((arr, booking) => {
        rooms.forEach(room => {
          if(booking.date != selectedDate && booking.roomNumber === room.number && room.roomType === roomType) {
         arr.push(room)
        available = true 
          }
          })
      if( !available && booking.date === selectedDate) {
        return `Room is unavailabe, please adjust your search!`
      } else {
      return arr
      }
    }, []) 
    console.log("FILTERED", filtered)
    
    return filtered.filter((item, index) => filtered.indexOf(item) === index);
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

  const preventDoubleBooking = (bookings, selectedDate, roomNumber) => {
    const alreadyBooked = bookings.filter(booking => booking.date === selectedDate)
    console.log('ALREADY BOOKED', alreadyBooked)
    const doubleBooked = alreadyBooked.filter(booked => booked.roomNumber === parseInt(roomNumber));
    console.log('DOUBLE BOOKED', doubleBooked)
  }

export {
  calculateTotalSpent, 
  showBookings,
  showAvailableRooms, 
  filterAvailableRooms, 
  getTodayDate, 
  showAllFilters, 
  formatTodayDate, 
  preventDoubleBooking
}