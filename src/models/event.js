const luxon = require('luxon');
const DateTime = luxon.DateTime;

class Event {
    constructor(
        title,
        start_time,
    ){
        this.title = title;
        this.description;
        this.id;
        this.start_time = start_time;
        this.expected_duration;
        this.role_assignments = [];
        this.assigned_coordinators = [];
        this.created_by;
        this.created_on;
        this.updated_on;
        this.event_confirmation_state;
        this.created_by;
        this.auto_notifications = [];
        this.venue;
    }
    setVenue(venue) {
        this.venue = venue;
    }
    getTimeTillStart(units) {
        const currentTime = DateTime.local();
        
        return this.start_time
            .diff(currentTime, units)
            .toObject();
    }
}

module.exports = Event;