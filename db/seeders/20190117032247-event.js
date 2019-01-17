const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Events', [
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
      { title: faker.name.findName(), description: faker.random.words(10), venueId: faker.random.number({
        'min': 1,
        'max': 10
      }), created_at: new Date(), updated_at: new Date() },
    ], {});
    
      
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Events', null, {});
  }
};
