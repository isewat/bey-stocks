import { useEffect, useContext, useState } from 'react';
import { Typography } from '@material-ui/core';
import { AppStateContext } from '../context/AppState';
import { AuthContext } from '../context/Auth';

export default function PrivateDemo() {
  const { setPageTitle } = useContext(AppStateContext);
  const { user } = useContext(AuthContext);
  const [token, setToken] = useState(null);
  useEffect(() => {
    setPageTitle('Private Demo');
    // return () => { setPageTitle('') }
  }, []);

  useEffect(() => {
    const getToken = async () => {
      try {
        if (user) {
          const t = await user.getIdToken();
          setToken(t);
        } else {
          setToken(null);
        }
      } catch (err) {
        console.log(err);
        setToken(null);
      }
    }
    if (user) {
      getToken();
    } else {
      setToken(null);
    }
  }, [user])

  return (
    <div>
      <Typography variant="h1">Private Demo</Typography>
      <Typography>Token: {token || 'not logged in'}</Typography>
      <Typography>User: {user?.email || 'not logged in'}</Typography>
    </div>
  )
}
