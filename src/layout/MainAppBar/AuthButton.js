import { useContext } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AuthContext } from '../../context/Auth';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 'auto'
  },
  gridContainer: {
    flexGrow: 1
  }
}));

const AuthButton = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();
  const { user, signOut } = useContext(AuthContext);

  if (user) {
    return (
      <div className={classes.root}>
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Typography>{user.email}</Typography>
              </Grid>
              <Grid item >
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => { signOut(); history.push('/') }}
                >
                  {t('auth.signOutButton')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid >
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item >
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    history.push('/signup')
                  }}
                >
                  {t('auth.signUpButton')}
                </Button>
              </Grid>
              <Grid item >
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    history.push('/signin')
                  }}
                >
                  {t('auth.signInButton')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid >
      </div>

    )
  }


}

export default AuthButton;