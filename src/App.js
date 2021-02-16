import { Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import ControlledInputs from './components/ControlledInputs'
import CustomForms from './components/CustomForms'
import Upload from './components/Upload'
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path ='/' component={Home}/>
      <Route path='/controlled' component={ControlledInputs}/>
      <Route path='/customforms' component={CustomForms}/>
      <Route path='/upload' component={Upload}/>
    </div>
  );
}

export default App;
