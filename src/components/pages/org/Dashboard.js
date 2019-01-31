import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from '@material-ui/core/styles';
import EventList from '../../../components/organisms/EventList';
import CollapsingNavBar from '../../../components/molecules/nav/CollapsingNavBar';
import styles from '../../../components/atoms/style/index';
import Typography from '@material-ui/core/Typography';
import { Query } from "react-apollo";
import { getOrgById } from '../../../graphQL/queries';

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    const mockAuthedOrg = {id: 2};
    
    return (
        <Query query={getOrgById(mockAuthedOrg.id)} notifyOnNetworkStatusChange>
            {({ loading, error, data, refetch, networkStatus}) => {
                if (networkStatus === 4) return <p>Refetching!</p>
                if (loading) return null;
                if (error) return <p>Error =( 
                    <button onClick={() => refetch()}>Refetch Data!</button></p>
                return (
                    <div className={classes.root}>
                        <CssBaseline />
                        <CollapsingNavBar title={data.org.name} />
                        <main className={classes.content}>
                            {/* Spacer for navBar */}
                            <div className={classes.toolbar} />
                            <Typography variant="h6" color="textSecondary" noWrap>
                                    Upcoming Events
                            </Typography>
                            <EventList org={data.org} />

                            <Typography variant="h6" color="textSecondary" noWrap>
                                    Contractors
                            </Typography>
                            { data.org.contractors.map(contractor => (
                                <div key={contractor.id}>
                                    <Typography variant="body1" color="textPrimary" noWrap>
                                        {contractor.fullName}
                                    </Typography>
                                </div>
                                ))}
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