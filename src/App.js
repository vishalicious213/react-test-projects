import { Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import ControlledInputs from './components/ControlledInputs'
import CustomForms from './components/CustomForms'
import Upload from './components/Upload'
import Modal from './components/Modal'
import Portal from './components/Portal'
import Cloudinary from './components/Cloudinary'
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Route exact path ='/' component={Home}/>
      <Route path='/controlled' component={ControlledInputs}/>
      <Route path='/customforms' component={CustomForms}/>
      <Route path='/upload' component={Upload}/>
      <Route path='/modal' component={Modal}/>
      <Route path='/portal' component={Portal}/>
      <Route path='/cloudinary' component={Cloudinary}/>
    </div>
  );
}

export default App;
