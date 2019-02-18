// import generator
const generator = require('./generator')

module.exports = () => ({
  customers: generator.customers(1000), // create 50 customers
  companies: generator.companies(1000), // create 50 companies
})