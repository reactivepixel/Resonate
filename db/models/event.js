module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    startTime: DataTypes.STRING,
    expectedDuration: DataTypes.STRING
  }, {});
  Events.associate = function(models) {
    // associations can be defined here
    Events.hasOne(models.Venues, {
      as: 'venue',
      foreignKey: 'id',
      otherKey: 'venueId',
    });
  };
  return Events;
};