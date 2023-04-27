import './App.css';
import Navabar from './Components/Navabar/Navabar';
import MainHome from './Components/Home/MainHome';
import Footer from './Components/Footer/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from './Components/signup/Form';

import Contact from './Components/contact/Contact';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navabar/>
     <Routes>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/' element={<MainHome/>}></Route>
      <Route path='/contect' element={<Contact/>}></Route>


     </Routes>
     <br/>
     <br/>
    
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
