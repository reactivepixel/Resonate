import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


import Divider from '@material-ui/core/Divider';
import SideMenu from '../../../components/atoms/list/SideMenu';

import styles from '../../../components/atoms/style/index';
  
class CollapsingNavBar extends Component {
    state = {
        mobileOpen: false,
        primaryMenuLinks: [
            { title: 'Dashboard', href: `/org/${this.props.org.id}/dashboard`, icon:'mail' },
            { title: 'Events', href: '/events', icon:'mail' },
            { title: 'Contractors', href: '/contractors', icon:'mail' }
          ],
    
        secondaryMenuLinks: [
            { title: 'Notifications', href: 'yy', icon:'mail' },
            { title: 'Settings', href: 'yy', icon:'mail' },
            { title: 'Logout', href: '/', icon:'mail' }
          ],
    }
    
      handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
      };

    render(){
        const { classes, theme } = this.props;
        
        
        const drawer = (
            <div>
              <div className={classes.toolbar} />
              <Divider />
              <SideMenu list={this.state.primaryMenuLinks} />
              <Divider />
              <SideMenu list={this.state.secondaryMenuLinks} />

            </div>
        );

        return(
            <div>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" color="textPrimary" noWrap>
                        {this.props.org.name}
                    </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                    <Drawer
                        container={this.props.container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                    </Hidden>
                </nav>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(CollapsingNavBar);