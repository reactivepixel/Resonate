import React, {Component} from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInfo } from '@fortawesome/pro-solid-svg-icons'
import { faCheckSquare, faComments } from '@fortawesome/pro-regular-svg-icons'
// import { faInfoCircle } from '@fortawesome/pro-light-svg-icons'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.event.title.charAt(0).toUpperCase()}{this.props.event.title.charAt(1).toLowerCase()}
            </Avatar>
          }
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
          subheader="September 14, 2016"
        />
        
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardActions className={classes.actions} disableActionSpacing>
            <Typography component="p">
                <IconButton aria-label="Share">
                    <FontAwesomeIcon icon={faCheckSquare} />
                </IconButton>
                
                <IconButton aria-label="Share">
                    <FontAwesomeIcon icon={faComments} />
                </IconButton>
            </Typography>
          
        </CardActions>
          <CardContent>
            <Typography component="p">
              {this.props.event.description}
            </Typography>
            
          </CardContent>
          <CardMedia
                        style={{height: 0, paddingTop: '56.25%'}}
                        image="https://picsum.photos/200/300?random"
                        title={this.props.event.title} />
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
