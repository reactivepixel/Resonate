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
  type Query {
    venues: [Venue!]!
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