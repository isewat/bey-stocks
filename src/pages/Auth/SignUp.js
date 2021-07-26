import { useContext } from 'react';
import { Button, TextField, Paper, Typography } from '@material-ui/core';
import validator from 'validator';
import { Formik } from 'formik';
import { AuthContext } from '../../context/Auth';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';

const SignIn = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { isAuthenticating, signUp, authError } = useContext(AuthContext);

  return (
    <Paper elevation={6} className={classes.root}>
      <Typography variant="h4">{t('auth.signUpTitle')}</Typography>
      <div className={classes.content}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values) => {
            try {
              await signUp(values.email, values.password);
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
                    helperText={(touched.email && errors.email) ? errors.email : ''}
                    inputProps={{ className: classes.input }}
                    className={classes.textField}
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    label="Passwort"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && errors.password}
                    helperText={(touched.password && errors.password) ? errors.password : ''}
                    className={classes.textField}
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    variant="contained"
                    className={classes.button}
                    color="secondary"
                    disabled={isAuthenticating}
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Registrieren
                  </Button>
                </>
              )
            }
          }
        </Formik>
        {authError}
      </div>
    </Paper>
  )
}

export default SignIn;