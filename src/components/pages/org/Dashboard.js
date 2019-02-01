import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from '@material-ui/core/styles';
import EventList from '../../../components/organisms/EventList';
import CollapsingNavBar from '../../../components/molecules/nav/CollapsingNavBar';
import ContractorsList from '../../../components/molecules/ContractorsList';
import styles from '../../../components/atoms/style/index';
import Typography from '@material-ui/core/Typography';
import { Query } from "react-apollo";
import { getOrgById } from '../../../graphQL/queries';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


class Dashboard extends Component {
  render() {
    const { classes, match: { params } } = this.props;
    const mockAuthedOrg = {id: this.props.match.params.orgId};
    
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
                                    <Link to={`/org/${mockAuthedOrg.id}/events/add`} >
                                        <Button color="primary" className={classes.button}>
                                            Add
                                        </Button>
                                    </Link>
                            </Typography>
                            <EventList org={data.org} />

                            <Typography variant="h6" color="textSecondary" noWrap>
                                    Contractors
                                    <Link to={`/org/${mockAuthedOrg.id}/contractors/add`}>
                                        <Button color="primary" className={classes.button}>
                                            Add
                                        </Button>
                                    </Link>
                            </Typography>
                            <ContractorsList org={data.org} contractors={data.org.contractors} />
                        </main>
                    </div>
                )
            }}
        </Query>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);