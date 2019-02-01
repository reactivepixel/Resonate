const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const mockData = [];
    const totalToGen = 100;

    for(let i = 0; i < totalToGen; i++){
      mockData.push({
        name: faker.company.companyName(), 
        address1: faker.address.streetAddress(), 
        address2: faker.address.secondaryAddress(), 
        zip: faker.address.zipCode(), 
        city: faker.address.city(), 
        state: faker.address.stateAbbr(), 
        created_at: new Date(), 
        updated_at: new Date() 
      });
    }

    return queryInterface.bulkInsert('Venues', mockData, {});
    
      
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Venues', null, {});
  }
};
