import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    minWidth: 280,
    width: 280,
    height: 360,
    minHeight: 360,
    alignItems: 'center',

  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: '1.2em',
    flexGrow: 1,
    width: '100%',
    minWidth: '100%'
  },
  input: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset"
    }
  },
  textField: {
  },
  button: {
    marginTop: '0.2em'
  }

}));
