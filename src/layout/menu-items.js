import TextFieldsIcon from '@material-ui/icons/TextFields';
import WidgetsIcon from '@material-ui/icons/Widgets';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export const menuItems = [
  // {
  //   text: 'Typography Demo',
  //   icon: <TextFieldsIcon color="primary" />,
  //   location: {
  //     pathname: '/',
  //   }
  // },
  // {
  //   text: 'Component Demo',
  //   icon: <WidgetsIcon color="primary" />,
  //   location: {
  //     pathname: '/component-demo',
  //   }
  // },
  {
    text: 'Profil',
    icon: <LockOpenIcon color="primary" />,
    private: true,
    location: {
      pathname: '/private',
    }
  },
  {
    text: 'Depot',
    icon: <LockOpenIcon color="primary" />,
    private: false,
    location: {
      pathname: '/depot',
    }
  },
  {
    text: 'Transaktionen',
    icon: <LockOpenIcon color="primary" />,
    private: false,
    location: {
      pathname: '/transactions',
    }
  },
];