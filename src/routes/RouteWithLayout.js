import { useContext } from 'react';
import { Route, useLocation } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { AuthContext } from '../context/Auth';
import { Redirect } from 'react-router';
import urlencode from 'urlencode';

const RouteWithLayout = ({ children, layoutComponent, auth = "public", ...rest }) => {
  const LayoutComponent = layoutComponent || MainLayout;
  const { user, isAuthenticating } = useContext(AuthContext);
  const location = useLocation();

  return (
    <Route {...rest}>
      {
        user || auth === 'public' ?
          <LayoutComponent>
            {children}
          </LayoutComponent>
          :
          isAuthenticating ?
            <div>Authenticating...</div> :
            <Redirect to={`/signin?redirect_url=${urlencode(location.pathname)}`} />
      }
    </Route>
  )
}

export default RouteWithLayout;