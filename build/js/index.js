import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient();
const query = gql`
  query {
    events {
      title
      description
      venue {
        name
      }
    }
  }
`;

const body = document.body;
client.query({ query }).then((results) => {
  results.data.events.forEach( (event) => renderEvent(body, event) );
});

const renderEvent = (body, event) => {
  const section = document.createElement('section');
  const domString = `
    <p>
      <strong>Event: </strong>${event.title}
    </p>
    <p>
      ${event.description}
    </p>
    <p>
      <strong>Venue: </strong>${event.venue.name}
    </p>
  `;
  section.innerHTML = domString;
  body.appendChild(section);
};
