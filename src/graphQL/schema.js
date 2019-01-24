export default `
  type Event {
    id: ID!
    title: String!
    description: String
    venueId: ID!
    venue: Venue!
  }
  type Venue {
    id: ID!
    name: String!
    timezone: String!
    events: [Event!]!
  }
  type Org {
    id: Int!
    name: String!
    contractors: [Contractor!]!
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
    smsConsent: String
    emailConsent: String
    currentTimeZone: String
    created_at: String
    updated_at: String
  }
  type Query {
    venues: [Venue!]!
    orgs: [Org!]!
    org(id: Int!): Org!
    contractors: [Contractor!]!
    venue(id: ID!): Venue
    event(id: ID!): Event
    events: [Event!]!
  }
  type Mutation {
    createEvent(title: String, description:String!, venueId: ID!): Event!
    updateEvent(id: ID!, title: String, description:String!, venueId: ID!): [Int!]!
    deleteEvent(id: ID!): Int!
  }
`;