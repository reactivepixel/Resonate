const { DateTime } = require('luxon');
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const mockData = [];
    const totalToGen = 100;

    for(let i = 0; i < totalToGen; i++){
      mockData.push({ 
        title: faker.company.companyName(), 
        description: faker.random.words(10), 
        startTime: DateTime.local().plus({
          months: faker.random.number({
            'min': 1,
            'max': 30
          }), 
          days: faker.random.number({
            'min': 0,
            'max': 30
          }),
          hours: faker.random.number({
            'min': 0,
            'max': 24
          })
        }).toSQL({includeOffset: false}),
        venueId: faker.random.number({
          'min': 1,
          'max': 10
        }),
        orgId: faker.random.number({
          'min': 1,
          'max': 10
        }), 
        created_at: new Date(), 
        updated_at: new Date() 
      })
    }
  
    return queryInterface.bulkInsert('Events', mockData, {});    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Events', null, {});
  }
};
