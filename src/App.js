/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Cards from './components/Cards/Cards';
import FunctionContainer from './components/FunctionContainer';
import Schedule from './components/Schedule/Schedule';
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
      <Route path='/functioncontainer' element={<FunctionContainer/>}/>
      <Route path='/schedule' element={<Schedule/>}/>
    </Routes>

    
    </BrowserRouter>
  );
}

export default App;
