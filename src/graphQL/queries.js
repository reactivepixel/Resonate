import gql from "graphql-tag";

export const getAllEvents = gql`
    {
        events {
            id
            title
            startTime
            description
            venue {
                name
                city
                state
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
                startTime
            }
        }
    }`;

export const getOrgById = (orgId) => {
    return gql`
    {
        org (id: ${orgId}) {
            id
            name
            events {
                id
                title
                startTime
                description
                venue {
                    name
                    city
                    state
                }
            }
            contractors {
                id
                fullName
                fName
                lName
                countryCode
                phone
                email
                address1
                address2
                zip
                city
                state
                contactPrefId
                smsConsent
                currentTimeZone
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
            startTime
            venue {
                name
                city
                state
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
            startTime
            description
        }
    }`;
} 

export const getContractors = gql`
{
    contractors {
        id
        fullName
        fName
        lName
        countryCode
        phone
        email
        address1
        address2
        zip
        city
        state
        contactPrefId
        smsConsent
        currentTimeZone
    }
}`;