import { useContext, useEffect } from 'react';
import { Typography, Button, Grid, Divider, TextField, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { AppStateContext } from '../context/AppState';

const useStyles = makeStyles((theme) => ({
  containerTitle: {
    margin: theme.spacing(1),
  },
  container: {
    margin: theme.spacing(3),
  },
  section: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  sectionTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  valueLabel: {
    fontSize: '0.5em',
    fontWeight: 'bold'
  }
}));

const marks = [
  {
    value: 10,
    label: '1.000 €',
  },
  {
    value: 50,
    label: '5.000 €',
  },
  {
    value: 100,
    label: '10.000 €',
  },
];

const ComponentDemo = () => {
  const classes = useStyles();
  const { setPageTitle } = useContext(AppStateContext);
  useEffect(() => {
    setPageTitle('Component Demo');
    // return () => { setPageTitle('') }
  }, [setPageTitle]);
  return (
    <div>
      <Typography variant="h4" className={classes.containerTitle}>Buttons</Typography>
      <Grid container className={classes.container}>

        <Grid container item xs={12} className={classes.section}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.sectionTitle}>Contained</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button color="primary" variant="contained">
              Primary
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button color="secondary" variant="contained">
              Secondary
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button color="primary" disabled variant="contained">
              Disabled
            </Button>
          </Grid>
          <Grid item xs={6} />
        </Grid>


        <Grid container item xs={12} className={classes.section}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.sectionTitle}>Outlined</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button color="primary" variant="outlined">
              Primary
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button color="secondary" variant="outlined">
              Secondary
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button color="primary" disabled variant="outlined">
              Disabled
            </Button>
          </Grid>
          <Grid item xs={6} />
        </Grid>

        <Grid container item xs={12} className={classes.section}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.sectionTitle}>Floating</Typography>
          </Grid>
          <Grid item xs={2}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Grid>
          <Grid item xs={2}>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </Grid>
          <Grid item xs={2}>
            <Fab color="secondary" disabled aria-label="edit">
              <EditIcon />
            </Fab>
          </Grid>
          <Grid item xs={6} />
        </Grid>
      </Grid>

      <Divider variant="middle" />

      <Typography variant="h4" className={classes.containerTitle}>Inputs</Typography>
      <Grid container className={classes.container}>

        <Grid container item xs={12} className={classes.section}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.sectionTitle}>Text fields</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Standard"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Filled"
              variant="filled"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.sectionTitle}>Slider</Typography>
        </Grid>
        <Grid container item xs={12} className={classes.section}>
          <Grid item xs={4}>
            <Slider
              classes={{ valueLabel: classes.valueLabel }}
              defaultValue={80}
              step={5}
              marks={marks}
              valueLabelFormat={(value) => `${(value * 100).toLocaleString('de-DE')} €`}
              valueLabelDisplay="on"
            />
          </Grid>

          <Grid item xs={8} />
        </Grid>
      </Grid>
    </div >
  )
}

export default ComponentDemo;