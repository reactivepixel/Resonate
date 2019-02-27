import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../../components/atoms/style/index';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';

class FormEditOrg extends Component {
  state = {
    title: 'Organization Settings',
    description: 'The configuration of your organization\'s information.',
    confirmAction: {
      label: 'Update Organization',
    },
    formData: [
      {
        name: 'name',
        label: 'Organization Name',
        variant: 'outlined'
      },
    ],
    name: this.props.org.name,
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

export default withStyles(styles, { withTheme: true })(FormEditOrg);