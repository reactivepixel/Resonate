import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../components/atoms/style/index';
import ContractorCard from '../../components/atoms/list/ContractorCard';
import Grid from '@material-ui/core/Grid';

class ContractorsList extends Component {
   
  render() {

    return (
        <div>
            <Grid 
                container 
                spacing={24}
                style={{padding: 24}}>
               
                { this.props.contractors.map(contractor => (
                    <Grid key={contractor.id} item xs={12} sm={6} lg={4} xl={3}>
                        <ContractorCard org={this.props.org} contractor={contractor} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(ContractorsList);
