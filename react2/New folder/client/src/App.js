
import './App.css';
import AboutPage from './pages/AboutPage';
import CardPage from './pages/CardPage';
import Counter from './sandbox/hooks/stateHook/Counter';
import MyInfo from './sandbox/hooks/stateHook/MyInfo';







function App() {
  return (
    <div>
      <Counter/>
      <CardPage/>
      <AboutPage/>
      <MyInfo/> 
    </div>
  );
}

export default App;

