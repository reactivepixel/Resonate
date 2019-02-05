import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import styles from './components/atoms/style/index';
import theme from './components/atoms/style/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

// import logo from './logo.svg';
import "./App.css";

// Dialogs
import DialogConfirmation from "./components/pages/dialog/DialogConfirmation";
// Forms
import FormAddContractor from "./components/pages/form/FormAddContractor";
import FormAddOrgs from "./components/pages/form/FormAddOrgs";
import FormAddEvent from "./components/pages/form/FormAddEvent";
import FormEditEvent from "./components/pages/form/FormEditEvent";
import FormEditOrg from "./components/pages/form/FormEditOrg";
import FormEditContractor from "./components/pages/form/FormEditContractor";
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
    this.setState({
      org: {id: 1}
    })
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
                            <Redirect exact from='/' to='/org/1/dashboard'/>         
                            {/* Org */}
                            <PropsRoute path="/org/:orgId/dashboard" org={data.org} component={OrgDashboard} />
                            <PropsRoute path="/org/add" org={data.org} component={FormAddOrgs} />
                            <PropsRoute path="/org/:orgId/edit" org={data.org} component={FormEditOrg} />
                            <PropsRoute path="/org/:orgId/delete" org={data.org} component={DialogConfirmation} />
                            
                            {/* Events */}
                            <PropsRoute path="/org/:orgId/events/add" org={data.org} component={FormAddEvent} />
                            <PropsRoute path="/org/:orgId/events/:eventId/edit" org={data.org} component={FormEditEvent} />
                            <PropsRoute path="/org/:orgId/events/" org={data.org} component={OrgEvents} />
                            <PropsRoute path="/org/:orgId/events/:eventId" org={data.org} component={OrgEventDetail} />
                            <PropsRoute path="/org/:orgId/events/:eventId/delete" org={data.org} component={DialogConfirmation} />
                            
                            {/* Contractors */}
                            <PropsRoute path="/org/:orgId/contractors/add" org={data.org} component={FormAddContractor} />
                            <PropsRoute path="/org/:orgId/contractors/:contractorId/edit" org={data.org} component={FormEditContractor} />
                            <PropsRoute path="/org/:orgId/contractors" org={data.org} component={OrgContractors} />
                            <PropsRoute path="/org/:orgId/contractors/:contractorId" org={data.org} component={OrgContractorDetail} />
                            <PropsRoute path="/org/:orgId/contractors/:contractorId/dashboard" org={data.org} component={OrgContractorDashboard} />
                            <PropsRoute path="/org/:orgId/contractors/:contractorId/messages" org={data.org} component={OrgContractorMessages} />
                            <PropsRoute path="/org/:orgId/contractors/:contractorId/delete" org={data.org} component={DialogConfirmation} />
                            
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