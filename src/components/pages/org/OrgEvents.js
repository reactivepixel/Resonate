import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import EventList from '../../../components/organisms/EventList';
import styles from '../../../components/atoms/style/index';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class Dashboard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="h6" color="textSecondary" noWrap>
                    All Events
                    <Link className={classes.stdLink} to={`/org/${this.props.org.id}/events/add`} >
                        <Button color="primary" className={classes.button}>
                            Add
                        </Button>
                    </Link>
                </Typography>
                <EventList org={this.props.org} />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Dashboard);