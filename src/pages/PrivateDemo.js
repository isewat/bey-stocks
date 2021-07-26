import { useEffect, useContext } from 'react';
import { Typography } from '@material-ui/core';
import { AppStateContext } from '../context/AppState';

export default function PrivateDemo() {
  const { setPageTitle } = useContext(AppStateContext);
  useEffect(() => {
    setPageTitle('Private Demo');
    // return () => { setPageTitle('') }
  }, [setPageTitle]);
  return (
    <div>
      <Typography variant="h1">Private Demo</Typography>
    </div>
  )
}
