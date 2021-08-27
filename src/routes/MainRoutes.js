
import { Switch } from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout';
import TypographyDemo from '../pages/TypographyDemo';
import ComponentDemo from '../pages/ComponentDemo';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import PrivateDemo from '../pages/PrivateDemo';
import AuthLayout from '../layout/AuthLayout';
import Depot from "../pages/Depot";
import Add from "../pages/Add";
import StickyHeadTable from '../pages/Transactions';


const MainRoutes = () => {
  return (
    <Switch>
      <RouteWithLayout exact path="/">
        <TypographyDemo />
      </RouteWithLayout>
      <RouteWithLayout layoutComponent={AuthLayout} path="/signup">
        <SignUp />
      </RouteWithLayout>
      <RouteWithLayout layoutComponent={AuthLayout} path="/signin">
        <SignIn />
      </RouteWithLayout>
      <RouteWithLayout path="/component-demo">
        <ComponentDemo />
      </RouteWithLayout>
      <RouteWithLayout auth="private" path="/private">
        <PrivateDemo />
      </RouteWithLayout>
      <RouteWithLayout path="/depot">
        <Depot />
      </RouteWithLayout>
      <RouteWithLayout path="/transactions">
        <StickyHeadTable />
      </RouteWithLayout>
      <RouteWithLayout path="/add">
        <Add />
      </RouteWithLayout>
    </Switch>
  )
}

export default MainRoutes;

