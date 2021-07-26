import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AuthButton from './AuthButton';

const useStyles = makeStyles((theme) => ({
  appbar: props => ({
    width: `calc(100% - ${props.offset}px)`,
    marginLeft: props.offset
  }),

  toolbar: theme.mixins.toolbar
}));

const MainAppBar = ({ offset = 0, pageTitle }) => {
  const classes = useStyles({ offset });
  return (
    <AppBar
      position="fixed"
      className={classes.appbar}
      elevation={0}
      color="primary"
    >
      <Toolbar>
        <Typography variant="h5">{pageTitle}</Typography>
        <AuthButton />
      </Toolbar>
    </AppBar>
  )
}

export default MainAppBar;

