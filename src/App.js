import { Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import ControlledInputs from './components/ControlledInputs'
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path ='/' component={Home}/>
      <Route path='/controlled' component={ControlledInputs}/>
    </div>
  );
}

export default App;
