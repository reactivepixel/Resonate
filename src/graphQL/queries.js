import gql from "graphql-tag";

export const getEvents = gql`
    {
        events {
            id
            title
            description
            venue {
                name
            }
        }
    }`;