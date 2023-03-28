
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import UserProvider from './forms/hooks/UserProvider';
import Layout from './layout/Layout';
import SnackbarProvider from './provider/SnackbarProvider';
import ThemeProvider from './provider/ThemeProvider';
import Router from './routs/Router';




function App() {

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <UserProvider>
                  <Layout>
                    <Router/>
                  </Layout>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

