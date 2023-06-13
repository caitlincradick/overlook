//FUNCTIONS
const calculateTotalSpent = (currentCustomer, rooms, booking) => {
  return rooms.reduce((total, room) => {
    booking.forEach(booking => {
      if(booking.userID === currentCustomer.id && booking.roomNumber === room.number) {
      total += room.costPerNight
      }
    });
    return total
  }, 0).toFixed(2);
};

const showBookings = (currentCustomer, rooms, booking) => {
  return booking.reduce((arr, booking) => {
    rooms.forEach(room => {
      if(booking.userID === currentCustomer.id && booking.roomNumber === room.number) {
      const obj = {date: booking.date, roomNumber: booking.roomNumber, roomType: room.roomType, cost:   
      room.costPerNight }
      arr.push(obj)
      arr.sort((a,b) =>  new Date(b.date) - new Date(a.date))
      }
    });
    return arr 
  }, []);
};

const showAvailableRooms = (selectedDate, rooms, bookings) => {
  const filteredRms = bookings.filter(booking => booking.date === selectedDate)
  const unavailRoomNums = filteredRms.map(room => room.roomNumber)
  const availRooms = rooms.filter(room => !unavailRoomNums.includes(room.number))
  return availRooms
};

const getTodayDate = () => {
  let date = new Date().toJSON().slice(0, 10)
  return date
};

const showAllFilters = (rooms) => {
  let filterArray = [];
  rooms.forEach(room => {
  if(!filterArray.includes(room.roomType)){
  filterArray.push(room.roomType)
    }
  });
  return filterArray
    };

const filterAvailableRooms = (selectedDate, roomType, rooms, booking) => {
  const availableRooms = showAvailableRooms(selectedDate, rooms, booking);
   return booking.reduce((arr, booking) => {
        availableRooms.forEach(room => {
          if(selectedDate && booking.roomNumber === room.number && room.roomType === roomType) {
         arr.push(room)
          }
          });
      return arr.filter((item, index) => arr.indexOf(item) === index)
    }, []);  
  };
  
export {
  calculateTotalSpent, 
  showBookings,
  showAvailableRooms, 
  filterAvailableRooms, 
  getTodayDate, 
  showAllFilters, 
}