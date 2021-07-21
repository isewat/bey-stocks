import './App.css';
import MainLayout from './layout/MainLayout';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './styles/theme';
import { AuthContextProvider } from './context/Auth';
import MainRoutes from './routes/MainRoutes';


function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <MainRoutes />
        </Router>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
