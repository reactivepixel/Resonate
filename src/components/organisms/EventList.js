import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import EventCondensed from '../../components/molecules/EventCondensed';
import { getEventsByOrgId } from '../../graphQL/queries.js';
import { Query } from "react-apollo";

class EventList extends Component {
    state = {
        events: [],
        searchString: ''
    }

    render() {

        
        return (
            <Query 
                query={getEventsByOrgId(this.props.org.id)}
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
                                {/* {console.log(data)} */}
                                
                                { data.orgEvents.map(event => (
                                    <Grid key={event.id} item xs={12} sm={6} lg={4} xl={3}>
                                        <EventCondensed org={this.props.org} event={event} />
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