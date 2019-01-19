import gql from "graphql-tag";

export const getEvents = gql`
    {
        events {
            title
            description
            venue {
                name
            }
        }
    }`;