import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from '@material-ui/core/styles';
import EventList from '../../../components/organisms/EventList';
import CollapsingNavBar from '../../../components/molecules/nav/CollapsingNavBar';
import styles from '../../../components/atoms/style/index';
import Typography from '@material-ui/core/Typography';
import { Query } from "react-apollo";
import { getOrg } from '../../../graphQL/queries';

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
        <Query query={getOrg} notifyOnNetworkStatusChange>
            {({ loading, error, org, refetch, networkStatus}) => {
                if (networkStatus === 4) return <p>Refetching!</p>
                if (loading) return null;
                if (error) return <p>Error =( 
                    <button onClick={() => refetch()}>Refetch Data!</button></p>
                return (
                    <div className={classes.root}>
                        <CssBaseline />
                        <CollapsingNavBar title={this.props.title} />
                        <main className={classes.content}>
                            {/* Spacer for navBar */}
                            <div className={classes.toolbar} />
                            <Typography variant="h6" color="textSecondary" noWrap>
                                    Upcoming Events
                            </Typography>
                            <EventList />

                            <Typography variant="h6" color="textSecondary" noWrap>
                                    Contractors
                            </Typography>
                            {/* <ContractorList /> */}
                        </main>
                    </div>
                )
            }}
        </Query>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);