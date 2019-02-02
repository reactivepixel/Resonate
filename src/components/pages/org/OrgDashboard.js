import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import EventList from '../../../components/organisms/EventList';
import ContractorsList from '../../../components/molecules/ContractorsList';
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
                    Upcoming Events
                    <Link to={`/org/${this.props.org.id}/events/add`} >
                        <Button color="primary" className={classes.button}>
                            Add
                        </Button>
                    </Link>
                </Typography>
                <EventList org={this.props.org} />

                <Typography variant="h6" color="textSecondary" noWrap>
                    Contractors
                    <Link to={`/org/${this.props.org.id}/contractors/add`}>
                        <Button color="primary" className={classes.button}>
                            Add
                        </Button>
                    </Link>
                </Typography>
                <ContractorsList org={this.props.org} contractors={this.props.org.contractors} />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Dashboard);