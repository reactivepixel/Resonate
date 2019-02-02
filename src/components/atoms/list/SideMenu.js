import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

import EventIcon from '@material-ui/icons/Event';

class SideMenu extends Component {

    render(){
        return(
            <List>
                {this.props.list.map((listItem, index) => (
                
                    <Link key={listItem.title} to={listItem.href}>
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

export default SideMenu;
