import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import Edit from '@material-ui/icons/Edit';
import Collapse from '@material-ui/core/Collapse';
import classnames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import styles from '../../../components/atoms/style/index';

class ContractorsList extends Component {
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
            title={this.props.contractor.fullName}
            subheader="Role Title[-]"
          />
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Link className={classes.stdLink} to={`/org/${this.props.org.id}/contractors/${this.props.contractor.id}/message`}>
                <Button variant="outlined" 
                color="primary" className={classes.button}>
                  Message
                </Button>
              </Link>
            </CardContent>

            <CardContent>
              <Link className={classes.stdLink} to={`/org/${this.props.org.id}/contractors/${this.props.contractor.id}/edit`}>
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

ContractorsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContractorsList);
