module.exports = (sequelize, DataTypes) => {
    const OrgContractors = sequelize.define('OrgContractors', {
      orgId: DataTypes.INTEGER,
      contractorId: DataTypes.INTEGER
    }, {});
    OrgContractors.associate = models => {
      
    };
    return OrgContractors;
  };