import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Cards from './components/Cards/Cards';
import FunctionContainer from './components/FunctionContainer';
import Schedule from './components/Schedule/Schedule';
import Dash from './pages/Dash/Dash';
import DashNav from './components/DashNav/DasNav';
import Login from './components/Login/Login';
import DataTable from './components/DataTable/DataTable';
import Accordion from './components/Accordion';

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash/*" element={<Dash />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/functioncontainer" element={<FunctionContainer />} />

        <Route path="/login" element={<Login />} />
      </Routes>
=======
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
>>>>>>> a0ec8f9d3d84b204a14652768b5f791e3523ef8f
    </BrowserRouter>
  );
}

export default App;
