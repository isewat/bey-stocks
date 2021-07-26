import { useContext } from 'react';
import { Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import { AuthContext } from '../context/Auth';
import { Redirect } from 'react-router';

const RouteWithLayout = ({ children, layoutComponent, auth = "public", ...rest }) => {
  const LayoutComponent = layoutComponent || MainLayout;
  const { user } = useContext(AuthContext);
  return (
    <Route {...rest}>
      {
        user || auth === 'public' ?
          <LayoutComponent>
            {children}
          </LayoutComponent>
          :
          <Redirect to="/" />
      }
    </Route>
  )
}

export default RouteWithLayout;