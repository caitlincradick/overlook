const customersTestData = [
  {"id":1,"name":"Leatha Ullrich"},{"id":2,"name":"Rocio Schuster"},{"id":3,"name":"Kelvin Schiller"},{"id":4,"name":"Kennedi Emard"},{"id":5,"name":"Rhiannon Little"}
]

const bookingsTestData  =[
  {"id":"5fwrgu4i7k55hl6sz","userID":1,"date":"2022/04/22","roomNumber":1},{"id":"5fwrgu4i7k55hl6t5","userID":2,"date":"2022/04/22","roomNumber":2},{"id":"5fwrgu4i7k55hl6t6","userID":3,"date":"2023/06/22","roomNumber":3},{"id":"5fwrgu4i7k55hl6t7","userID":5,"date":"2022/02/16","roomNumber":4},{"id":"5fwrgu4i7k55hl6t8","userID":5,"date":"2023/02/05","roomNumber":5}
]

const fullyBookedTestData = [
  {"id":"5fwrgu4i7k55hl6sz","userID":1,"date":"2022/04/22","roomNumber":1},{"id":"5fwrgu4i7k55hl6t5","userID":2,"date":"2022/04/22","roomNumber":2},{"id":"5fwrgu4i7k55hl6t6","userID":3,"date":"2022/04/22","roomNumber":3},{"id":"5fwrgu4i7k55hl6t7","userID":5,"date":"2022/04/22","roomNumber":4},{"id":"5fwrgu4i7k55hl6t8","userID":5,"date":"2022/04/22","roomNumber":5}
  ]

const roomsTestData =[
  {"number":1,"roomType":"residential suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":358.4},{"number":2,"roomType":"suite","bidet":false,"bedSize":"full","numBeds":2,"costPerNight":477.38},{"number":3,"roomType":"single room","bidet":false,"bedSize":"king","numBeds":1,"costPerNight":491.14},{"number":4,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":1,"costPerNight":429.44},{"number":5,"roomType":"single room","bidet":true,"bedSize":"queen","numBeds":2,"costPerNight":340.17}
]

module.exports = {
  customersTestData,
  bookingsTestData,
  fullyBookedTestData,
  roomsTestData
}