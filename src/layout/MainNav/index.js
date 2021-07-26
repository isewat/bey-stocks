
import { useContext } from 'react';
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/styles';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';

const defaultDrawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: props => props.drawerWidth
  },
  drawerPaper: {
    width: props => props.drawerWidth,
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
  const { user } = useContext(AuthContext);

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
        {menuItems.map((item) => {
          const locked = !user && item.private === true;
          return (
            <ListItem
              disabled={locked}
              button
              key={item.text}
              onClick={() => history.push(item.location)}
              className={location.pathname === item.location.pathname ? classes.active : null}
            >
              <ListItemIcon>{locked ? <LockIcon /> : item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  )
}

export default MainNav;

