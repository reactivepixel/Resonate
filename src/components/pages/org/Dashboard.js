import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from '@material-ui/core/styles';
import EventList from '../../../components/organisms/EventList';
import CollapsingNavBar from '../../../components/molecules/nav/CollapsingNavBar';
import styles from '../../../components/atoms/style/index';
import Typography from '@material-ui/core/Typography';

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
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
            </main>
        </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);