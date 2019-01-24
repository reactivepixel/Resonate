import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import EventCondensed from '../../components/EventCondensed';
import { getEvents } from '../../graphQL/queries.js';

class EventList extends Component {
    state = {
        events: [],
        searchString: ''
    }

    render() {

        return (
            <Query 
                query={getOrg}
                notifyOnNetworkStatusChange
            >
                {({ loading, error, data, refetch, networkStatus}) => {
                    if (networkStatus === 4) return <p>Refetching!</p>
                    if (loading) return null;
                    if (error) return <p>Error =( 
                        <button onClick={() => refetch()}>Refetch Data!</button></p>
                    return (
                        <div>
                            {/* <TextField 
                                style={{padding: 24}}
                                id="searchInput"
                                placeholder="Search for Events"
                                onChange={this.onSearchInputChange} /> */}
                            <Grid 
                                container 
                                spacing={24}
                                style={{padding: 24}}>
                                { data.events.map(event => (
                                    <Grid key={event.id} item xs={12} sm={6} lg={4} xl={3}>
                                        <EventCondensed event={event} />
                                        {/* <EventConfirm event={event} /> */}
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    )
                }}
                
            </Query>
        )
    }
}

export default EventList;