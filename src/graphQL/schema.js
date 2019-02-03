export default `
  type Event {
    id: ID!
    title: String!
    description: String
    venueId: ID!
    orgId: ID!
    startTime: String!
    venue: Venue!
  }
  type Venue {
    id: ID!
    name: String!
    address1: String!
    address2: String!
    zip: String!
    city: String!
    state: String!
    mapURL: String!
    timezoneTitle: String!
    events: [Event!]!
  }
  type Org {
    id: Int!
    name: String!
    contractors: [Contractor!]!
    events: [Event!]!
  }
  type Contractor {
    id: ID!
    fullName: String!
    fName: String
    lName: String
    countryCode: Int
    phone: String
    email: String
    address1: String
    address2: String
    zip: String
    city: String
    state: String
    contactPrefId: Int
    smsConsent: Int
    emailConsent: Int
    currentTimeZone: String
  }
  type Query {
    venues: [Venue!]!
    orgs: [Org!]!
    org(id: Int!): Org!
    contractors: [Contractor!]!
    venue(id: ID!): Venue
    event(id: ID!): Event
    events: [Event!]!
    orgEvents(orgId: Int!): [Event!]!
    venueEvents(venueId: Int!): [Event!]!

  }
  type Mutation {
    createContractor(fullName: String, fName: String, lName: String, countryCode: Int, phone: String, email: String, address1: String, address2: String, zip: String, city: String, state: String, contactPrefId: Int, smsConsent: Int, emailConsent: Int, currentTimeZone: String): Contractor!
    createEvent(title: String, description:String!, venueId: ID!): Event!
    updateEvent(id: ID!, title: String, description:String!, venueId: ID!): [Int!]!
    deleteEvent(id: ID!): Int!
  }
`;