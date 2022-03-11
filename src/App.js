/* import logo from './logo.svg'; */
import './App.css';
<<<<<<< HEAD
/* import ContImg from './components/ContImg/ContImg'; */
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      {/* <div>navBar</div> */}
      <div><Home/></div>
      {/* <div>Cards</div> */}
      {/* <div>Footer</div> */}
    </div>
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      {/* <Route path='/about' element={<Salary/>}/> */}
    </Routes>

    
    </BrowserRouter>
>>>>>>> develop
  );
}

export default App;
