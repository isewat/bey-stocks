import { useContext } from 'react';
import { Button, TextField, Paper, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import { AuthContext } from '../../context/Auth';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';

const SignIn = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { user, isAuthenticating, signIn, authError } = useContext(AuthContext);

  if (user) return (
    <Redirect to="/" />
  );
  return (
    <Paper elevation={6} className={classes.root}>
      <Typography variant="h4">{t('auth.signInTitle')}</Typography>
      <div className={classes.content}>
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

        >
          {
            ({ values, handleChange, handleBlur, handleSubmit, }) => {
              return (
                <>
                  <TextField
                    label={t('auth.email')}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    inputProps={{ className: classes.input }}
                    className={classes.textField}
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    label={t('auth.password')}
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
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
                    {t('auth.signInButton')}
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