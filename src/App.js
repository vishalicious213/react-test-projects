import { Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import ControlledInputs from './components/ControlledInputs'
import CustomForms from './components/CustomForms'
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path ='/' component={Home}/>
      <Route path='/controlled' component={ControlledInputs}/>
      <Route path='/customforms' component={CustomForms}/>
    </div>
  );
}

export default App;
