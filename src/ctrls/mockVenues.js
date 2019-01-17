const luxon = require('luxon');
const DateTime = luxon.DateTime;
const Event = require('../models/event');
const Venue = require('../models/venue');
const faker = require('faker');

const eventsTotal = 100;
const venuesTotal = 20;

const venues = [];
const events = [];
const timeZones = [
    {
        title: 'America/New_York',
    },{
        title: 'America/Los_Angeles',
    }
];

for(let venueIndex = 0; venueIndex < venuesTotal; venueIndex++){
    const venue = new Venue(
        faker.company.companyName(),
        timeZones[1].title,
    );

    venues.push(venue)
}
module.exports = venues;