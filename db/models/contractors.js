module.exports = (sequelize, DataTypes) => {
  const Contractors = sequelize.define('Contractors', {
    fullName: DataTypes.STRING,
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    countryCode: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    zip: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    contactPrefId: DataTypes.INTEGER,
    smsConsent: DataTypes.BOOLEAN,
    emailConsent: DataTypes.BOOLEAN,
    currentTimeZone: DataTypes.STRING
  }, {});
  Contractors.associate = models => {
    Contractors.hasMany(models.OrgContractors, {
      as: 'orgContractors',
      foreignKey: 'contractorId'
    });

    Contractors.belongsToMany(models.Orgs, {
      as: 'orgs',
      foreignKey: 'contractorId',
      otherKey: 'orgId',
      through: 'OrgContractors'
    })
  };
  return Contractors;
};