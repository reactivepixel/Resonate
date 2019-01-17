const luxon = require('luxon');
const DateTime = luxon.DateTime;

class Venue {
    constructor(
        name,
        timezone_title,
    ){
        this.id;
        this.name = name;
        this.address1;
        this.address2;
        this.zip;
        this.city;
        this.state;
        this.map_url;
        this.timezone_title = timezone_title;
    }
    getLocalTime(){
        return DateTime
            .local()
            .setZone(this.timezone_title)
            .toLocaleString({ 
                weekday: 'short',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            });
    }
    getTimezone() {
        return this.timezone_title;
    }
}

module.exports = Venue;