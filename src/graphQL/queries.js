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

export const getOrgs = gql`
    {
        orgs {
            id
            name
        }
    }`;

export const getOrg = gql`
    {
        org (id: 1) {
            id
            name
            contractors {
                id
                fullName
            }
        }
    }`;

export const getContractors = gql`
{
    contractors {
        id
        fullName
    }
}`;