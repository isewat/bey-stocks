import TextFieldsIcon from '@material-ui/icons/TextFields';
import WidgetsIcon from '@material-ui/icons/Widgets';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export const menuItems = [
  {
    text: 'Typography Demo',
    icon: <TextFieldsIcon color="primary" />,
    location: {
      pathname: '/',
    }
  },
  {
    text: 'Component Demo',
    icon: <WidgetsIcon color="primary" />,
    location: {
      pathname: '/component-demo',
    }
  },
  {
    text: 'PrivatePage',
    icon: <LockOpenIcon color="primary" />,
    private: true,
    location: {
      pathname: '/private',
    }
  },
];