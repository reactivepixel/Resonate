module.exports = (sequelize, DataTypes) => {
  const Orgs = sequelize.define('Orgs', {
    name: DataTypes.STRING
  }, {});
  Orgs.associate = (models) => {
    Orgs.belongsTo(models.Contractors, {
      as: 'contractors',
      foreignKey: 'id',
      otherKey: 'id',
      through: 'OrgContractors'
    })
  };
  return Orgs;
};