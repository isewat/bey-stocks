import { useContext, useState } from 'react';
import { Button, TextField, FormControl, FormControlLabel, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AuthContext } from '../../context/Auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),

  },

}));

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticating, signIn, authError } = useContext(AuthContext);

  return (
    // <div className={classes.root}>
    <Paper elevation={6} className={classes.root}>
      <FormControl>
        <TextField
          required
          label="E-Mail"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <FormControlLabel>test</FormControlLabel>
      </FormControl>
      <FormControl>
        <TextField
          required
          label="Passwort"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
      </FormControl>


      <Button
        variant="contained"
        color="secondary"
        disabled={isAuthenticating}
        onClick={() => {
          signIn(email, password)
        }}
      >
        Login
      </Button>
      {authError}
    </Paper>
    // </div>
  )
}

export default SignIn;