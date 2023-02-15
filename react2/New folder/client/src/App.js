
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Router from './routs/Router';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Router/>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

