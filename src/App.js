import './App.css';
import MainLayout from './layout/Main';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import TypographyDemo from './pages/TypographyDemo';
import ComponentDemo from './pages/ComponentDemo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/">
              <TypographyDemo />
            </Route>
            <Route exact path="/component-demo">
              <ComponentDemo />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
