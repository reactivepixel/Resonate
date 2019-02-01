import React, {Component} from 'react';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Edit from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";


import styles from '../../components/atoms/style/index';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInfo } from '@fortawesome/pro-solid-svg-icons'
// import { faCheckSquare, faComments } from '@fortawesome/pro-regular-svg-icons'
// import { faInfoCircle } from '@fortawesome/pro-light-svg-icons'


class RecipeReviewCard extends Component {
  state = { 
      expanded: false,
      value: 0,
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  
  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          }
          title={this.props.event.title}
          subheader={DateTime.fromMillis(parseInt(this.props.event.startTime)).toLocaleString(DateTime.DATETIME_FULL)}
        />
        
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <Typography component="h5">
              {this.props.event.venue.name}
              </Typography>
              <Typography component="h6">
                {this.props.event.venue.city}, {this.props.event.venue.state}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography component="p">
                {this.props.event.description}
              </Typography>
            </CardContent>
            <CardContent>
            <Link to={`/org/${this.props.org.id}/events/${this.props.event.id}/edit`}>
              <Fab color="secondary" aria-label="Edit" className={classes.fab}>
                <Edit />
              </Fab>
            </Link>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
