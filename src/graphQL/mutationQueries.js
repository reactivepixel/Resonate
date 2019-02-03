import gql from "graphql-tag";

export const createContractorMutation = contractor => {
    return gql`
    mutation{
        createContractor (		
            orgId: ${contractor.org.id},
            fName: ${contractor.fName},
            lName: ${contractor.lName},
            countryCode: ${contractor.countryCode},
            phone: ${contractor.phone},
            email: ${contractor.email},
            address1: ${contractor.address1},
            address2: ${contractor.address2},
            zip: ${contractor.zip},
            city: ${contractor.city},
            state: ${contractor.state},
            contactPrefId: ${contractor.contactPrefId},
            smsConsent: ${contractor.smsConsent},
            emailConsent: ${contractor.emailConsent},
            currentTimeZone: ${contractor.currentTimeZone}) {
                id
                fullName
            }
        }
    }`;
}