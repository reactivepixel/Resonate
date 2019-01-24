import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Events from './components/pages/org/Events';
import styles from './components/atoms/style/index';

// import logo from './logo.svg';
import "./App.css";

if (process.env.REACT_APP_PROTOCOL === undefined) {
  throw Error("Environmental Variables not loading into client.");
}

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_PROTOCOL}://${
    process.env.REACT_APP_CLIENT_HOST
  }:${process.env.REACT_APP_DB_PORT}/graphql`
});

class App extends Component {
  render() {
    const renderMergedProps = (component, ...rest) => {
      const finalProps = Object.assign({}, ...rest);
      return (
        React.createElement(component, finalProps)
      );
    }
    
    const PropsRoute = ({ component, ...rest }) => {
      return (
        <Route {...rest} render={routeProps => {
          return renderMergedProps(component, routeProps, rest);
        }}/>
      );
    }    

    return (
      <Router>
        <ApolloProvider client={client}>
          <Switch>
            <PropsRoute path="/events" h1Title="Events" exact component={Events} />
            <PropsRoute path="/org" h1Title="Organization" component={Events} />
          </Switch>
        </ApolloProvider>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);