
//Global Variables
const customerName = document.querySelector('.customer-name');
const totalSpent = document.querySelector('.total-spent')

const displayCustomer = (customer) => {
  customer.forEach(customer => {
    customerName.innerText = customer.name
  })
};

const displayTotalSpent = () => {
totalSpent.innerText = `You've spent $100000000000, 10% of proceeds go to restoring the Overlook Hotel`
}



export {
  displayCustomer, 
  displayTotalSpent
}