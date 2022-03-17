/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Cards from './components/Cards/Cards';
import Dash from './pages/Dash/Index'
import DashNav from './components/DashNav/DasNav'
import DataTable from './components/DataTable/DataTable';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dash' element={<Dash/>}/>
       <Route path='/dashnav' element={<DashNav/>}/> 
      <Route path='/navbar' element={<NavBar/>}/>
      <Route path='/datatable' element={<DataTable/>}/>
      <Route path='/card' element={<Cards/>}/>
    </Routes>

    
    </BrowserRouter>
  );
}

export default App;
