const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('OrgContractors', [
        { 
            contractorId: 1,
            orgId: 1,
            created_at: new Date(),
            updated_at: new Date() 
        },
        { 
            contractorId: 2,
            orgId: 1,
            created_at: new Date(),
            updated_at: new Date() 
        },
        { 
            contractorId: 3,
            orgId: 1,
            created_at: new Date(),
            updated_at: new Date() 
        },
        { 
            contractorId: 4,
            orgId: 1,
            created_at: new Date(),
            updated_at: new Date() 
        },
        { 
            contractorId: 5,
            orgId: 1,
            created_at: new Date(),
            updated_at: new Date() 
        },
        { 
            contractorId: 6,
            orgId: 1,
            created_at: new Date(),
            updated_at: new Date() 
        },







        { 
            contractorId: 1,
            orgId: 2,
            created_at: new Date(),
            updated_at: new Date() 
        },
        { 
            contractorId: 2,
            orgId: 2,
            created_at: new Date(),
            updated_at: new Date() 
        },
        { 
            contractorId: 5,
            orgId: 2,
            created_at: new Date(),
            updated_at: new Date() 
        },
        { 
            contractorId: 9,
            orgId: 2,
            created_at: new Date(),
            updated_at: new Date() 
        },
        { 
            contractorId: 10,
            orgId: 2,
            created_at: new Date(),
            updated_at: new Date() 
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('OrgContractors', null, {});
  }
};
