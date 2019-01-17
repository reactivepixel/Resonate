import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import React, { Component } from 'react'
import MenuDrawer from './components/MenuDrawer'

// import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <MenuDrawer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
