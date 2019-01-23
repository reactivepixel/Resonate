import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import EventList from '../components/EventList'
import CollapsingNavBar from '../components/nav/CollapsingNavBar';
import styles from '../components/style/index';

class ResponsiveDrawer extends Component {

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <CollapsingNavBar />
        <main className={classes.content}>
          
          {/* Spacer for navBar */}
          <div className={classes.toolbar} />
          <EventList />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
