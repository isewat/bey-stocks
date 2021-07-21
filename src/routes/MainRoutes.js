
import { Switch } from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout';
import TypographyDemo from '../pages/TypographyDemo';
import ComponentDemo from '../pages/ComponentDemo';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import TestPage from '../pages/Test';
import AuthLayout from '../layout/AuthLayout';

const MainRoutes = () => {
  return (
    <Switch>
      <RouteWithLayout exact path="/">
        <TypographyDemo />
      </RouteWithLayout>
      <RouteWithLayout path="/signup">
        <SignUp />
      </RouteWithLayout>
      <RouteWithLayout layoutComponent={AuthLayout} path="/signin">
        <SignIn />
      </RouteWithLayout>
      <RouteWithLayout path="/component-demo">
        <ComponentDemo />
      </RouteWithLayout>
      <RouteWithLayout path="/test">
        <TestPage />
      </RouteWithLayout>
    </Switch>
  )
}

export default MainRoutes;

