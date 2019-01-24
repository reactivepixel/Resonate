module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrgContractors', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      orgId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      contractorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OrgContractors');
  }
};