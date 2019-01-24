import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from '@material-ui/core/styles';
import EventList from '../../../components/organisms/EventList';
import CollapsingNavBar from '../../../components/molecules/nav/CollapsingNavBar';
import styles from '../../../components/atoms/style/index';

class Events extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
            <CssBaseline />
            <CollapsingNavBar h1Title={this.props.h1Title} />
            <main className={classes.content}>
                {/* Spacer for navBar */}
                <div className={classes.toolbar} />
                <EventList />
            </main>
        </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Events);