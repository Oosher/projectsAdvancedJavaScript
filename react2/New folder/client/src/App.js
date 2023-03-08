
import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
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
                <Layout>
                  <Router/>
                </Layout>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

