module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    startTime: DataTypes.STRING,
    expectedDuration: DataTypes.STRING,
    venueId: DataTypes.INTEGER,
    orgId: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  Events.associate = function(models) {
    // associations can be defined here
    Events.belongsTo(models.Venues, {
      as: 'venue',
      foreignKey: 'venueId',
      targetKey: 'id',
    });
  };
  return Events;
};