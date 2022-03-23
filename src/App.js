import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Cards from './components/Cards/Cards';
import FunctionContainer from './components/FunctionContainer';
import Schedule from './components/Schedule/Schedule';
import Dash from './pages/Dash/Dash'
import DashNav from './components/DashNav/DasNav'
import Login from './components/Login/Login';
import DataTable from './components/DataTable/DataTable';
import Accordion from './components/Accordion';

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
      <Route path='/login' element={<Login/>}/>
      <Route path='/accordion' element={<Accordion/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
