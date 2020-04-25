import React, { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const {
    container,
    children,
    match: { url },
    location: { pathname },
  } = props;
  console.log(pathname);
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Hidden smDown>
        <div className={classes.toolbar} />
      </Hidden>
      <MenuList>
        <MenuItem
          component={Link}
          to={`${url}`}
          selected={"/panel" === pathname}
        >
          Home
        </MenuItem>
        <MenuItem
          component={Link}
          to={`${url}/dashboard`}
          selected={`${url}/dashboard` === pathname}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          component={Link}
          to={`${url}/conversation`}
          selected={`${url}/conversation` === pathname}
        >
          Conversation
        </MenuItem>
      </MenuList>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Template dashboard application
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default withRouter(ResponsiveDrawer);
