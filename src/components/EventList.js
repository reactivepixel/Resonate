import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Event from '../components/Event';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const ORG_ID = '';
const ACCESS_TOKEN = '';


class EventList extends Component {
    state = {
        events: [],
        searchString: ''
    }

    constructor() {
        super()
        // this.getEvents()
    }

    render() {
        return (
            <div>
                <Query query={gql`
                    {
                        events {
                            title
                            description
                            venue {
                                name
                            }
                        }
                    }`}
                >
                    {({ loading, error, data}) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error =(</p>

                            return data.events.map(({id, title, description}) => (
                                <div key={id}>
                                    <p>{`Title: ${title} - ${description}`}</p>
                                </div>
                            ));
                    }}
                </Query>
            </div>
        )
    }
}

export default EventList;