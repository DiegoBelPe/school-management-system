/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContImg from './components/ContImg'
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<ContImg/>}/>
      <Route path='/navbar' element={<NavBar/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/card' element={<Cards/>}/>
    </Routes>

    
    </BrowserRouter>
  );
}

export default App;
