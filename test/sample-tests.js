import chai from 'chai';
const expect = chai.expect;
import {calculateTotalSpent, showBookings, showAvailableRooms, filterAvailableRooms} from '../src/featureCode.js';
import {customersTestData,bookingsTestData, fullyBookedTestData, roomsTestData } from '../src/test-data.js';

describe('calculateTotalSpent', () => {
  it('Should be a function', () => {
    expect(calculateTotalSpent).to.be.a('function');
  });
  it('Should calculate the cost of rooms based on the userID and bookings', () => {
    const calculateTotal = calculateTotalSpent(customersTestData[4],roomsTestData, bookingsTestData)
    expect(calculateTotal).to.equal('769.61');
  });
  it('Should return 0.00 if no rooms are booked', () => {
    const calculateTotal = calculateTotalSpent(0, roomsTestData, bookingsTestData)
    expect(calculateTotal).to.equal('0.00');
  })
});

describe('showBookings', () => {
  it('Should be a function', () => {
    expect(showBookings).to.be.a('function');
  });
  it('Should show all current and past bookings in order', () => {
    const bookingInfo = showBookings(customersTestData[4],roomsTestData, bookingsTestData)
    expect(bookingInfo).to.deep.equal([
      {
        date: '2023/02/05',
        roomNumber: 5,
        roomType: 'single room',
        cost: 340.17
      },
      {
        date: '2022/02/16',
        roomNumber: 4,
        roomType: 'single room',
        cost: 429.44
      }
    ]);
  });
  it('Should return an empty array if no rooms are available', () => {
    const bookingInfo = showBookings('2025/01/09',roomsTestData, bookingsTestData)
    expect(bookingInfo).to.deep.equal([]);
  });
});

describe('showAvailableRooms', () => {
  it('Should be a function', () => {
    expect(showAvailableRooms).to.be.a('function');
  });
  it('Should show all available rooms', () => {
    const availableRooms = showAvailableRooms('2022/04/22',roomsTestData, bookingsTestData)
    expect(availableRooms).to.deep.equal([
      {
        number: 3,
        roomType: 'single room',
        bidet: false,
        bedSize: 'king',
        numBeds: 1,
        costPerNight: 491.14
      },
      {
        number: 4,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 429.44
      },
      {
        number: 5,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 340.17
      }
    ])
  });
  it('Should return an empty array if no rooms are available', () => {
    const bookingInfo = showAvailableRooms('2022/04/22',roomsTestData, fullyBookedTestData)
    expect(bookingInfo).to.deep.equal([]);
  });
}); 

describe('filterAvailableRooms', () => {
  it('Should be a function', () => {
    expect(filterAvailableRooms).to.be.a('function');
  });
  it('Should show all available rooms by filter', () => {
    const showAvailableRooms = filterAvailableRooms('2022/04/07', 'residential suite', roomsTestData, bookingsTestData )
    expect(showAvailableRooms).to.deep.equal([
      {
        number: 1,
        roomType: 'residential suite',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 358.4
      }
    ]);
  }); 
  it('Should return and empty array if there are no rooms available', () => {
    const showAvailableRooms = filterAvailableRooms('2022/04/22', 'residential suite', roomsTestData, bookingsTestData )
    expect(showAvailableRooms).to.deep.equal([]);
  });
});