// import gql from "graphql-tag";

// export const createContractorMutation = contractor => {
//     return gql`
//     mutation{
//         createContractor (		
//             orgId: ${contractor.org.id},
//             fName: ${contractor.fName},
//             lName: ${contractor.lName},
//             countryCode: ${contractor.countryCode},
//             phone: ${contractor.phone},
//             email: ${contractor.email},
//             address1: ${contractor.address1},
//             address2: ${contractor.address2},
//             zip: ${contractor.zip},
//             city: ${contractor.city},
//             state: ${contractor.state},
//             contactPrefId: ${contractor.contactPrefId},
//             smsConsent: ${contractor.smsConsent},
//             emailConsent: ${contractor.emailConsent},
//             currentTimeZone: ${contractor.currentTimeZone}) {
//                 id
//                 fullName
//             }
//         }
//     }`;
// }

import gql from "graphql-tag";

export const createContractorMutation = contractor => {
    return gql`
    mutation createContractor($orgId: String, $fName: String, $lName: String, $countryCode: String, $phone: String, $email: String, $address1: String, $address2: String, $zip: String, $city: String, $state: String, $contactPrefId: String, $smsConsent: String, $emailConsent: String, $currentTimeZone: String){
        contractor (		
            orgId: $orgId,
            fName: $fName,
            lName: $lName,
            countryCode: $countryCode,
            phone: $phone,
            email: $email,
            address1: $address1,
            address2: $address2,
            zip: $zip,
            city: $city,
            state: $state,
            contactPrefId: $contactPrefId,
            smsConsent: $smsConsent,
            emailConsent: $emailConsent,
            currentTimeZone: $currentTimeZone) {
                id
                fullName
            }
        }
    }`;
}