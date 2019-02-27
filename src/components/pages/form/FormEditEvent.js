import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../components/atoms/style/index';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';

class FormEditEvent extends Component {
    state = {
        pageTitle: 'Add Event',
        pageDescription: 'Events can be created to coordinate when contractors should be expected to gather at a specific location and time.',
        confirmAction: {
          label: 'Update Event',
        },
        formData: [
          {
            name: 'title',
            label: 'Title',
            variant: 'outlined'
          },
          {
            name: 'description',
            label: 'Description',
            variant: 'outlined'
          },
          {
            name: 'startTime',
            label: 'Start Time',
            variant: 'outlined',
          },
          {
            name: 'venueId',
            label: 'Venue ID',
            variant: 'outlined',
          },
          {
            name: 'orgId',
            label: 'Org ID',
            variant: 'outlined',
            disabled: true
          },
        ],
        title: '',
        description: '',
        startTime: '',
        venueId: 1,
        orgId: this.props.org.id,
      }
  componentDidMount() {
    const { eventId } = this.props.match.params
    this.props.org.events.map(event => {
        if(event.id === eventId ) {
            this.setState({ 
                title: event.title,
                description: event.description,
                startTime: event.startTime,
            })
        }
    })
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    return (
        <div>
          <Typography variant="h5" color="textPrimary" noWrap>
            {this.state.title}
          </Typography>
          <Typography variant="body1" color="textPrimary" noWrap>
            {this.state.description}
          </Typography>
          
          <form 
            className={classes.container} 
            noValidate 
            autoComplete="off"
          >
            
          {this.state.formData.map((formItem, index) => (
            <TextField
              key={formItem.name}
              id={formItem.name}
              label={formItem.label}
              className={classes.textField}
              value={this.state[formItem.name]}
              placeholder={formItem.placeholder}
              onChange={this.handleChange(formItem.name)}
              margin="normal"
              variant={formItem.variant}
              disabled={formItem.disabled}
            />
          ))}
            <div>
                <Link className={classes.stdLink} to="/">
                    <Button variant="contained" color="secondary" className={classes.button}>
                    {this.state.confirmAction.label}
                    </Button>
                </Link>
            </div>
          </form>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FormEditEvent);