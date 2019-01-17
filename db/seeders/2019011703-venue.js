const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Venues', [
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
        { name: faker.company.companyName(), address1: faker.address.streetAddress(), address2: faker.address.secondaryAddress(), zip: faker.address.zipCode(), created_at: new Date(), updated_at: new Date() },
    ], {});
    
      
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Venues', null, {});
  }
};
