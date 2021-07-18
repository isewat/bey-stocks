import './App.css';
import MainLayout from './layout/Main';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { AuthContextProvider } from './context/Auth';
import TypographyDemo from './pages/TypographyDemo';
import ComponentDemo from './pages/ComponentDemo';
import SignUp from './pages/SignUp';
import TestPage from './pages/Test';

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <MainLayout>
            <Switch>
              <Route exact path="/">
                <TypographyDemo />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/component-demo">
                <ComponentDemo />
              </Route>
              <Route path="/test">
                <TestPage />
              </Route>
            </Switch>
          </MainLayout>
        </Router>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
