import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from './components/Footer/footer';
import { Home } from "./components/pages/Home/Home";
import { Dictation} from './components/pages/Dictation/Dictation';
import {Basicscommands} from './components/pages/BasicsCommands/Basicscommands';
import {Multistep} from './components/pages/Multistep/Multistep';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,

} from 'react-router-dom'


import './App.css';

function App() {
  return (
    <div className='page-container'>


      <div className='content-wrap'>
        <Router>
        <NavBar />
          <Routes>
            <Route path='/' element ={<Home/>} />
            <Route path='/dictation' element={<Dictation/>}/>
            <Route path = '/basicscommands' element={<Basicscommands/>} />
            <Route path = '/multistep' element={<Multistep/>} />
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
        </Router>
          
      </div>

     <Footer/>
    </div>
  );
}

export default App;
