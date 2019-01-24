module.exports = (sequelize, DataTypes) => {
  const Orgs = sequelize.define('Orgs', {
    name: DataTypes.STRING
  }, {});
  Orgs.associate = (models) => {
    Orgs.belongsToMany(models.Contractors, {
      as: 'contractors',
      foreignKey: 'orgId',
      otherKey: 'contractorId',
      through: 'OrgContractors'
    })
  };
  return Orgs;
};