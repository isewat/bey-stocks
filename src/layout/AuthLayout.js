import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
  }
}));

const AuthLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}
export default AuthLayout;