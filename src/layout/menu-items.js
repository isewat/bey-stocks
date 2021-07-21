import TextFieldsIcon from '@material-ui/icons/TextFields';
import WidgetsIcon from '@material-ui/icons/Widgets';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PersonIcon from '@material-ui/icons/Person';

export const menuItems = [
  {
    text: 'Registrieren',
    icon: <PersonIcon color="primary" />,
    location: {
      pathname: '/signup',
      state: {
        title: 'Registrieren'
      }
    }
  },
  {
    text: 'Anmelden',
    icon: <PersonIcon color="primary" />,
    location: {
      pathname: '/signin',
      state: {
        title: 'Anmelden'
      }
    }
  },
  {
    text: 'Typography Demo',
    icon: <TextFieldsIcon color="primary" />,
    location: {
      pathname: '/',
      state: {
        title: 'Typography Demo'
      }
    }
  },
  {
    text: 'Component Demo',
    icon: <WidgetsIcon color="primary" />,
    location: {
      pathname: '/component-demo',
      state: {
        title: 'Component Demo'
      }
    }
  },
  {
    text: 'Test',
    icon: <AccountTreeIcon color="primary" />,
    location: {
      pathname: '/test',
      state: {
        title: 'Test Page'
      }
    }
  },
];