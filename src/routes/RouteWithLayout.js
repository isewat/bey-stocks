import { Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

const RouteWithLayout = ({ children, layoutComponent, ...rest }) => {
  const LayoutComponent = layoutComponent || MainLayout;
  return (
    <Route {...rest}>
      <LayoutComponent>
        {children}
      </LayoutComponent>
    </Route>
  )
}

export default RouteWithLayout;