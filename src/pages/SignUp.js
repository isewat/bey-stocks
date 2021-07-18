import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import { AuthContext } from '../context/Auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, authError, isAuthenticating } = useContext(AuthContext);

  return (
    <div>
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
          signUp(email, password)
        }}
      >
        Registrieren
      </Button>
      {authError}
    </div>
  )
}

export default SignUp;