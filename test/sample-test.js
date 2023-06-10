import chai from 'chai';
const expect = chai.expect;
import {calculateTotalSpent, showBookings, showAvailableRooms, filterAvailableRooms} from '../src/featureCode.js';
import {customersTestData,bookingsTestData,roomsTestData } from '../src/test-data.js';


describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});


describe('calculateTotalSpent', () => {
  it('Should be a function', () => {
    expect(calculateTotalSpent).to.be.a('function');
  });
  it('Should calculate the cost of rooms based on the userID and bookings', () => {
    const calculateTotal = calculateTotalSpent(customersTestData[4],roomsTestData, bookingsTestData)
    expect(calculateTotal).to.equal(769.61);
  });
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
});

describe('showAvailableRooms', () => {
  it('Should be a function', () => {
    expect(showAvailableRooms).to.be.a('function');
  });
  it('Should show all available rooms', () => {
    const availableRooms = showAvailableRooms('2022/04/22',roomsTestData, bookingsTestData)
    expect(availableRooms).to.deep.equal([
      {
        number: 1,
        roomType: 'residential suite',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 358.4
      },
      {
        number: 2,
        roomType: 'suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 477.38
      }
    ])
  });
}); 

describe('filterAvailableRooms', () => {
  it('Should be a function', () => {
    expect(filterAvailableRooms).to.be.a('function');
  });
  it('Should show all available rooms by filter', () => {
    const showAvailableRooms = filterAvailableRooms('2022/04/22', 'residential suite', roomsTestData, bookingsTestData )
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
it('Should display message if there are no rooms available', () => {
  const showAvailableRooms = filterAvailableRooms('2022/04/12', 'residential suite', roomsTestData, bookingsTestData )
  expect(showAvailableRooms).to.be.equal(`Room is unavailabe, please adjust your search!`);
});
});