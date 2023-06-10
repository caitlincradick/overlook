// import {bookingsTestData,roomsTestData } from '../src/test-data.js';
import {customersTestData,bookingsTestData,roomsTestData } from '../src/test-data.js';


//Functions
const calculateTotalSpent = (currentCustomer, rooms, booking) => {
  console.log(currentCustomer)
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
      console.log(arr)
      }
    })
    return arr 
  }, [])
}


const showAvailableRooms = (todayDate, rooms, booking) => {
  return booking.reduce((arr, booking) => {
      rooms.forEach(availRoom => {
        if(booking.date === todayDate && booking.roomNumber === availRoom.number) {
       arr.push(availRoom)
        }
        })
    return arr
  }, [])
  }

  const filterAvailableRooms = (todayDate, roomType, rooms, booking) => {
    let available = false 
    return booking.reduce((arr, booking) => {
        rooms.forEach(room => {
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
    
    const getTodayDate = () => {
      const date = new Date();
      let day = new Date().getDate();
      let month = date.getMonth() + 1
      let year = date.getFullYear()
      let currentDate;
      let numString  = day.toString()
      
        if(numString.length === 1){
           currentDate =`${year}/${month}/0${day}`
        } else {
          currentDate =`${year}/${month}/${day}`  
        }
          return currentDate
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



export {
  calculateTotalSpent, 
  showBookings,
  showAvailableRooms, 
  filterAvailableRooms, 
  getTodayDate, 
  showAllFilters
  // currentDate
}