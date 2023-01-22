import PageHeader from './components/header';
import './App.css';
import TypographyComponent from './sandbox/data-display/TypographyComponent';
import ButtonComponent from './sandbox/buttons/ButtonComponent';


function App() {
  return (
    <div className="App">
      <PageHeader/> 
      <TypographyComponent/>
      <ButtonComponent/>
    </div>
  );
}

export default App;
