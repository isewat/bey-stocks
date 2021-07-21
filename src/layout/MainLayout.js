import { makeStyles } from '@material-ui/styles';
import { useLocation } from 'react-router-dom'
import MainNav from './MainNav';
import { menuItems } from './menu-items';
import MainAppBar from './MainAppBar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },

  header: {
    width: '100%',
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

  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}));



const MainLayout = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <MainAppBar
        offset={drawerWidth}
        pageTitle={location.state?.title}
      />
      <MainNav menuItems={menuItems} />

      <div className={classes.content}>
        <div className={classes.toolbar} ></div>
        {children}
      </div>
    </div >
  )
}

export default MainLayout;