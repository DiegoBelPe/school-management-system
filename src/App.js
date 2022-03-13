<<<<<<< HEAD
import './App.css';
import Footer from './components/Footer/index';



function App() {
  return (
    <div className="App">
      {/* <div>navBar</div>
      <div>ContImg</div>
      <div>Cards</div>*/}
      <div><Footer/></div>
    </div>
=======
/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContImg from './components/ContImg'
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<ContImg/>}/>
      <Route path='/navbar' element={<NavBar/>}/>
    </Routes>

    
    </BrowserRouter>
>>>>>>> 990fbedfd906e31b875c503f3788a2154ea3631e
  );
}

export default App;
