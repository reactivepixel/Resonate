module.exports = (sequelize, DataTypes) => {
  const Venues = sequelize.define('Venues', {
    name: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    zip: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    mapURL: DataTypes.STRING,
    timezoneTitle: DataTypes.STRING
  }, {});
  Venues.associate = function(models) {
    // associations can be defined here
    
    // Venues.hasMany(models.Events, {
    //   as: 'events',
    //   foreignKey: 'venueId',
    // })
  };
  return Venues;
};