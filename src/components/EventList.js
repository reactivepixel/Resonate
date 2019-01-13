import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Event from '../components/Event';

const ORG_ID = '';
const ACCESS_TOKEN = '';
const dumbArray = [
    {
        fields: {
            title: "I am an Event Title",
            url: "https://picsum.photos/200/300?random",
            description: "hey Frank, I'm alive and well in the computer!",
            eventImage: {
                fields: {
                    file: {
                        url: "https://picsum.photos/200/300?random",
                    }
                }
            }
        },
        title: "Event One"
    }, {
        fields: {
            title: "I am an Event Title",
            url: "https://picsum.photos/200/300?random",
            description: "hey Frank, I'm alive and well in the computer!",
            eventImage: {
                fields: {
                    file: {
                        url: "https://picsum.photos/200/300?random",
                    }
                }
            }
        },
        title: "Event One"
    }, {
        fields: {
            title: "I am an Event Title",
            url: "https://picsum.photos/200/300?random",
            description: "hey Frank, I'm alive and well in the computer!",
            eventImage: {
                fields: {
                    file: {
                        url: "https://picsum.photos/200/300?random",
                    }
                }
            }
        },
        title: "Event One"
    }, 
    
];


const client = {
    id: ORG_ID,
    access_token: ACCESS_TOKEN,
    getEvents: (args) => {
        return new Promise((resolve, reject) => {
            const fakeData = {
                events: dumbArray};
            return resolve(fakeData);
        });
    }
};

class EventList extends Component {
    state = {
        events: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getEvents()
    }

    getEvents = () => {
        client.getEvents({
            event_type: 'all',
            query: this.state.searchString
        }).then((res) => {
            console.log(res.events, this.state.events);
            this.setState({events: res.events})
        })
        .catch((err) => {
            console.error("Error fetching data");
            console.error(err);
        })
    }

    onSearchInputChange = (event) => {
        if(event.target.value){
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
    }

    render() {
        return (
            <div>
                {this.state.events ? (
                    <div>
                        <TextField 
                            style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Events"
                            onChange={this.onSearchInputChange} />
                        <Grid 
                            container 
                            spacing={24}
                            style={{padding: 24}}>
                            { this.state.events.map(currentEvent => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Event event={currentEvent} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No Events Registereds"}
            </div>
        )
    }
}

export default EventList;