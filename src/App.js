import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';

import MenuDrawer from './components/MenuDrawer'

// import logo from './logo.svg';
import './App.css';

console.log(process.env);


const client = new ApolloClient({
  uri: `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_CLIENT_HOST}:${process.env.REACT_APP_DB_PORT}/graphql`,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <CssBaseline />
        <div>
          <MenuDrawer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
