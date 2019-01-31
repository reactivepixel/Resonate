import gql from "graphql-tag";

export const getAllEvents = gql`
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

export const getOrgs = gql`
    {
        orgs {
            id
            name
            events {
                title
            }
        }
    }`;

export const getOrgById = (orgId) => {
    return gql`
    {
        org (id: ${orgId}) {
            id
            name
            contractors {
                id
                fullName
            }
        }
    }`;
} 

export const getEventsByOrgId = (orgId) => {
    return gql`
    {
        orgEvents (orgId: ${orgId}) {
            id
            title
            description
            venue {
                name
            }
        }
    }`;
} 

export const getEventsByVenueId = (venueId) => {
    return gql`
    {
        venueEvents (venueId: ${venueId}) {
            id
            title
            description
        }
    }`;
} 

export const getContractors = gql`
{
    contractors {
        id
        fullName
    }
}`;