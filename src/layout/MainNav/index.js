
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory, useLocation } from 'react-router-dom'

const defaultDrawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: props => props.drawerWidth
  },
  drawerPaper: {
    width: props => props.drawerWidth,
    // backgroundColor: theme.palette.secondary.light
  },
  active: {
    background: '#f4f4f4'
  },
  title: {
    padding: theme.spacing(2),
    fontWeight: 'bold'
  },
}));

const MainNav = ({ menuItems, drawerWidth = defaultDrawerWidth }) => {
  const classes = useStyles({ drawerWidth });
  const history = useHistory();
  const location = useLocation();
  return (
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
  )
}

export default MainNav;

