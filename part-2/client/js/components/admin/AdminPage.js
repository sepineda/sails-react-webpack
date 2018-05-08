import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

import AdminListItems from './tileData';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`
  },
  'appBar-left': {
    marginLeft: drawerWidth
  },
  'appBar-right': {
    marginRight: drawerWidth
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class AdminPage extends React.Component {
  render() {
    const { classes } = this.props;

    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="title1" color="inherit" align="center" noWrap>
            <Button href="/">Donovo</Button>
          </Typography>
          <Typography variant="Subheading" color="inherit" align="center" noWrap>
            v0.0.1-alfa
          </Typography>
        </div>
        <Divider />
        <List>{AdminListItems}</List>
        <Divider />
        <List>{}</List>
      </Drawer>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar)}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" align="center" noWrap>
                Administracion
              </Typography>
            </Toolbar>
          </AppBar>
          {drawer}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography>{'You think water moves fast? You should see ice.'}</Typography>
          </main>
        </div>
      </div>
    );
  }
}

AdminPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminPage);
