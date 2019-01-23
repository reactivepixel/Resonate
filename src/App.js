import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { withStyles } from '@material-ui/core/styles';
import EventList from './components/EventList'
import CollapsingNavBar from './components/nav/CollapsingNavBar';
import styles from './components/style/index';


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

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <Router>
        <ApolloProvider client={client}>
          <div className={classes.root}>
            <CssBaseline />
            <CollapsingNavBar />
            <main className={classes.content}>
              
              {/* Spacer for navBar */}
              <div className={classes.toolbar} />
              
                
                <Link to="/users/">Users</Link>
                
                <Route path="/" exact component={EventList} />
                <Route path="/about/" component={About} />

              
            </main>
          </div>
        </ApolloProvider>
      </Router>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);