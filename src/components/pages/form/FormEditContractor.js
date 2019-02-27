import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../components/atoms/style/index';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';

class FormEditEvent extends Component {
    state = {
        title: 'Edit Contractor',
        description: 'Contractors can be attached to events and messaged directly or through SMS messages through the platform.',
        confirmAction: {
          label: 'Update Contractor',
        },
        formData: [
          {
            name: 'fName',
            label: 'First Name',
            variant: 'outlined'
          },
          {
            name: 'lName',
            label: 'Last Name',
            variant: 'outlined'
          },
          {
            name: 'countryCode',
            label: 'CountryCode',
            variant: 'outlined',
            disabled: true
          },
          {
            name: 'phone',
            label: 'Phone',
            variant: 'outlined',
            placeholder: '555-123-4567'
          },
          {
            name: 'email',
            label: 'Email',
            variant: 'outlined'
          },
          {
            name: 'address1',
            label: 'Address',
            variant: 'outlined'
          },
          {
            name: 'address2',
            label: 'Address (Optional)',
            variant: 'outlined'
          },
          {
            name: 'zip',
            label: 'Zip',
            variant: 'outlined',
            placeholder: '32714-6584'
          },
          {
            name: 'city',
            label: 'City',
            variant: 'outlined'
          },
          {
            name: 'state',
            label: 'State',
            variant: 'outlined',
            placeholder: 'FL'
          },
          {
            name: 'currentTimeZone',
            label: 'Timezone',
            variant: 'outlined',
            placeholder: 'America/New_York'
          },
        ],
        fullName: '',
        fName: '',
        lName: '',
        countryCode: 1,
        phone: '',
        email: '',
        address1: '',
        address2: '',
        zip: '',
        city: '',
        state: '',
        contactPrefId: 1,
        smsConsent: 1,
        emailConsent: 1,
        currentTimeZone: '', 
      }
  componentDidMount() {
    const { contractorId } = this.props.match.params
    this.props.org.contractors.map(contractor => {
        
        
        if(contractor.id === contractorId ) {
            this.setState({ 
                fName: contractor.fName,
                lName: contractor.lName,
                countryCode: contractor.countryCode,
                phone: contractor.phone,
                email: contractor.email,
                address1: contractor.address1,
                address2: contractor.address2,
                zip: contractor.zip,
                city: contractor.city,
                state: contractor.state,
                contactPrefId: contractor.contactPrefId,
                smsConsent: contractor.smsConsent,
                emailConsent: contractor.emailConsent,
                currentTimeZone: contractor.currentTimeZone,
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