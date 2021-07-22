import { useContext, useState } from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import validator from 'validator';
import { Formik } from 'formik';
import { AuthContext } from '../../context/Auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    rowGap: '0.8em',
    minWidth: 280,
    minHeight: 360,
    justifyContent: 'center'
  },
  input: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset"
    }
  }

}));

const SignIn = () => {
  const classes = useStyles();
  const { isAuthenticating, signIn, authError } = useContext(AuthContext);

  return (
    <Paper elevation={6} className={classes.root}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values) => {
          try {
            await signIn(values.email, values.password);
          } catch (err) {
            console.log(err)
          }
        }}
        validateOnChange={false}
        validate={(values) => {
          const errors = {};
          if (!validator.isEmail(values.email)) {
            errors.email = 'Ungültige E-Mail'
          }
          if (!validator.isStrongPassword(values.password, {
            minLength: 6,
            minLowercase: 0,
            minUppercase: 0,
            minNumbers: 0,
            minSymbols: 0
          })) {
            errors.password = 'Passwort muss mindestens 6 Zeichen haben'
          }
          return errors;
        }}
      >
        {
          ({ values, errors, touched, handleChange, handleBlur, handleSubmit, }) => {
            return (
              <>
                <TextField
                  label="E-Mail"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && errors.email}
                  helperText={errors.email || ''}
                  inputProps={{ className: classes.input }}
                />
                <TextField
                  label="Passwort"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && errors.password}
                  helperText={errors.password || ''}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  disabled={isAuthenticating}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Login
                </Button>
              </>
            )
          }
        }
      </Formik>
      {authError}
    </Paper>
  )
}

export default SignIn;