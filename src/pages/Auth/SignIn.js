import { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AuthContext } from '../../context/Auth';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginBox: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticating, signIn, authError } = useContext(AuthContext);

  return (
    <div className={classes.root}>
      <div className={classes.loginBox}>
        <TextField
          required
          label="E-Mail"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <TextField
          required
          label="Passwort"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <Button
          disabled={isAuthenticating}
          onClick={() => {
            signIn(email, password)
          }}
        >
          Registrieren
        </Button>
      </div>
    </div>
  )
}

export default SignIn;