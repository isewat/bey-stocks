import { AppBar, Toolbar, Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import WidgetsIcon from '@material-ui/icons/Widgets';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { makeStyles } from '@material-ui/styles';
import { useHistory, useLocation } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: theme.palette.secondary.light
  },
  header: {
    width: '100%',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column'
  },
  active: {
    background: '#f4f4f4'
  },
  content: {
    background: '#f9f9f9',
    width: '100%',
    padding: theme.spacing(3),
  },
  footer: {
    flex: 0,
  },
  title: {
    padding: theme.spacing(2),
    fontWeight: 'bold'
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}));

const menuItems = [
  {
    text: 'Typography Demo',
    icon: <TextFieldsIcon color="primary" />,
    location: {
      pathname: '/',
      state: {
        title: 'Typography Demo'
      }
    }

  },
  {
    text: 'Component Demo',
    icon: <WidgetsIcon color="primary" />,
    location: {
      pathname: '/component-demo',
      state: {
        title: 'Component Demo'
      }
    }
  },
  {
    text: 'Test',
    icon: <AccountTreeIcon color="primary" />,
    location: {
      pathname: '/test',
      state: {
        title: 'Test Page'
      }
    }
  },

  
];

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appbar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography variant="h5">{location.state?.title || '[Page title]'}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography
            variant="h5"
            className={classes.title}>
            BeyStocks
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.location)}
              className={location.pathname === item.location.pathname ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.content}>
        <div className={classes.toolbar} ></div>
        {children}
      </div>
    </div >
  )
}

export default MainLayout;