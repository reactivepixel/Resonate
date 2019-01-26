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

export const getContractors = gql`
{
    contractors {
        id
        fullName
    }
}`;