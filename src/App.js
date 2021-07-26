import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './styles/theme';
import { AuthContextProvider } from './context/Auth';
import { AppStateContextProvider } from './context/AppState';
import MainRoutes from './routes/MainRoutes';


function App() {
  return (
    <AppStateContextProvider>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <MainRoutes />
          </Router>
        </ThemeProvider>
      </AuthContextProvider>
    </AppStateContextProvider>
  );
}

export default App;
