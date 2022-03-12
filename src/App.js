/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContImg from './components/ContImg'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<ContImg/>}/>
    </Routes>

    
    </BrowserRouter>
  );
}

export default App;
