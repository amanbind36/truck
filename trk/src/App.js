import logo from './logo.svg';
import './App.css';
import Navabar from './Components/Navabar/Navabar';
import Home from './Components/Home/Home';
import Home1 from './Components/Home/Home1';
import Hot from './Components/Home/Hot';
import Footer from './Components/Footer/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from './Components/signup/Form';
import Trk from './Components/trk/Trk';
import Appa from './Components/tcard/Tcard';
import Contact from './Components/contact/Contact';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navabar/>
     {/* <Contact/> */}
    
    
      <Home1/>
     <Home/>
     <br/>
     <br/>
     <br/>
     <br/>
     <Hot/>
     <br/>
     <br/>
     <br/>
     <Trk/>
     <br/>
     <br/>
     <br/>
     <Appa/>
     <br/>
     <br/>
     <br/>
    <Footer/> 
    </div>
    </BrowserRouter>
  );
}

export default App;
