import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import styles from '../../../components/atoms/style/index';
import { withStyles } from '@material-ui/core/styles';

import EventIcon from '@material-ui/icons/Event';

class SideMenu extends Component {

    render(){

        const { classes } = this.props;
        return(
            <List>
                {this.props.list.map((listItem, index) => (
                
                    <Link className={classes.stdLink}  key={listItem.title} to={listItem.href}>
                        <ListItem button>
                            <ListItemIcon><EventIcon /></ListItemIcon>
                            <ListItemText primary={listItem.title} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        )
    }
}

export default withStyles(styles, { withTheme: true })(SideMenu);