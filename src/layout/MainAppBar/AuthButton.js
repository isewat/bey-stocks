import { useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AuthContext } from '../../context/Auth';

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: 'auto'
  }
}));

const AuthButton = ({ onClick = () => { } }) => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);

  return (
    <Button
      className={classes.button}
      color="secondary"
      variant="contained"
    >
      {user ? 'Logout' : 'Login'}
    </Button>
  )
}

export default AuthButton;