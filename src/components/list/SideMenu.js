import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from "react-router-dom";

class SideMenu extends Component {

    render(){
        return(
            <List>
                {this.props.list.map((listItem, index) => (
                
                    <Link to={listItem.href}>
                        <ListItem button key={listItem.title}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary={listItem.title} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        )
    }
}

export default SideMenu;
