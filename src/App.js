import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import styles from './components/atoms/style/index';
import theme from './components/atoms/style/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

// import logo from './logo.svg';
import "./App.css";

// Dialogs
import DialogConfirmation from "./components/pages/dialog/DialogConfirmation";
// Forms
import FormAdd from "./components/pages/form/FormAdd";
import FormEdit from "./components/pages/form/FormEdit";
// Orgs
import OrgContractorDashboard from "./components/pages/org/OrgContractorDashboard";
import OrgContractorDetail from "./components/pages/org/OrgContractorDetail";
import OrgContractorMessages from "./components/pages/org/OrgContractorMessages";
import OrgContractors from "./components/pages/org/OrgContractors";
import OrgDashboard from "./components/pages/org/OrgDashboard";
import OrgEventDetail from "./components/pages/org/OrgEventDetail";
import OrgEvents from "./components/pages/org/OrgEvents";

// From Old Dashboard
import { Query } from "react-apollo";
import { getOrgById } from './graphQL/queries';
import CollapsingNavBar from './components/molecules/nav/CollapsingNavBar';
import CssBaseline from "@material-ui/core/CssBaseline";

if (process.env.REACT_APP_PROTOCOL === undefined) {
  throw Error("Environmental Variables not loading into client.");
}

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_PROTOCOL}://${
    process.env.REACT_APP_CLIENT_HOST
  }:${process.env.REACT_APP_DB_PORT}/graphql`
});

class App extends Component {
  state = {
    auth: {
      status:true,
      access_token:'xxx',
    },
    org: {}
  }
  componentDidMount() {
    this.setState({org: {id: 1}})
  }
  

  render() {
    const { classes } = this.props;
    


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
      <div>
        <ApolloProvider client={client}>
          <MuiThemeProvider theme={theme}>
            <Query query={getOrgById(this.state.org.id)} notifyOnNetworkStatusChange>
              {({ loading, error, data, refetch, networkStatus}) => {
                if (networkStatus === 4) return <p>Refetching!</p>
                if (loading) return null;
                if (error) return <p>Error =( 
                    <button onClick={() => refetch()}>Refetch Data!</button></p>
                return (
                  <Router>
                    <div className={classes.root}>
                      <CssBaseline />
                      <CollapsingNavBar org={data.org} />
                      <main className={classes.content}>
                          {/* Spacer for navBar */}
                          <div className={classes.toolbar} />
                                                
                          <Switch>              
                            {/* Org */}
                            <PropsRoute path="/org/:orgId/dashboard" org={data.org} component={OrgDashboard} />
                            <PropsRoute path="/org/add" component={FormAdd} />
                            <PropsRoute path="/org/:orgId/edit" component={FormEdit} />
                            <PropsRoute path="/org/:orgId/delete" component={DialogConfirmation} />
                            
                            {/* Events */}
                            <PropsRoute path="/org/:orgId/events/" component={OrgEvents} />
                            <PropsRoute path="/org/:orgId/events/:eventId" component={OrgEventDetail} />
                            <PropsRoute path="/org/:orgId/events/add" component={FormAdd} />
                            <PropsRoute path="/org/:orgId/events/:eventId/edit" component={FormEdit} />
                            <PropsRoute path="/org/:orgId/events/:eventId/delete" component={DialogConfirmation} />
                            
                            {/* Contractors */}
                            <PropsRoute path="/org/:orgId/contractors/add" org={data.org} component={FormAdd} />
                            <PropsRoute path="/org/:orgId/contractors" component={OrgContractors} />
                            <PropsRoute path="/org/:orgId/contractors/:contractorsId" component={OrgContractorDetail} />
                            <PropsRoute path="/org/:orgId/contractors/:contractorsId/dashboard" component={OrgContractorDashboard} />
                            <PropsRoute path="/org/:orgId/contractors/:contractorsId/messages" component={OrgContractorMessages} />
                            <PropsRoute path="/org/:orgId/contractors/:contractorsId/edit" component={FormEdit} />
                            <PropsRoute path="/org/:orgId/contractors/:contractorsId/delete" component={DialogConfirmation} />
                            
                          </Switch>
                      </main>
                    </div>
                  </Router>
                )
              }}
            </Query>
          </MuiThemeProvider>
        </ApolloProvider>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);