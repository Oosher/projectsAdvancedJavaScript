import PageHeader from './components/header';
import './App.css';
import TypographyComponent from './sandbox/data-display/TypographyComponent';
import ButtonComponent from './sandbox/buttons/ButtonComponent';
import CardComponent from './sandbox/card/CardComponent';


function App() {
  return (
    <div className="App">
      <PageHeader/> 
      <TypographyComponent/>
      <ButtonComponent/>
      <br/>
      <br/>
      <CardComponent/>
    </div>
  );
}

export default App;

