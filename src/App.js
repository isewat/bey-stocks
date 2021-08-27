import './App.css';
import MainLayout from './layout/Main';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import TypographyDemo from './pages/TypographyDemo';
import ComponentDemo from './pages/ComponentDemo';
import TestPage from './pages/Test';
import index from "./index";
import Depot from "./pages/Depot";
import Add from "./pages/Add";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/">
              <TypographyDemo />
            </Route>
            <Route path="/component-demo">
              <ComponentDemo />
            </Route>
            <Route path="/test">
              <TestPage />
            </Route>
            <Route path="/depot">
              <Depot></Depot>
            </Route>
            <Route path="/add">
              <Add />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
