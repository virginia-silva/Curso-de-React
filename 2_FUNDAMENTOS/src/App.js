//Css
import './App.css';

//Componentes
import Events from './components/Events';
import FirstComponent from './components/FirstComponents';
import TemplatesExpressions from './components/TemplatesExpressions';
import MyComponents from './components/MyComponents';
import Challenge from './components/Challenge';



function App() {
  return (
    <div className="App">
      <h1>Teste</h1>
      <FirstComponent/>
      <TemplatesExpressions/>
      <MyComponents/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
