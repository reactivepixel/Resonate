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

for(let eventIndex = 0; eventIndex < eventsTotal; eventIndex++){
    // Determine Venue
    const targetVenuePosition = faker.random.number({
        'min': 0,
        'max': venues.length-1
    });

    const venue = venues[targetVenuePosition]
    
    // Generate Event
    const event = new Event(
            faker.name.findName(),
            DateTime
                .local(2019, 12, 25, 5, 30)
                .setZone(venue.getTimezone()),
        );
    event.setVenue(venue)

    // Attach new event to events
    events.push(event);
}

module.exports = events;