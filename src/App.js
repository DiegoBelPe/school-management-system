import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Cards from './components/Cards/Cards';
import FunctionContainer from './components/FunctionContainer';
import Schedule from './components/Schedule/Schedule';
import Dash from './pages/Dash/Dash';
import Login from './components/Login/Login';
import DataTable from './components/DataTable/DataTable';
import Calendar from './components/Calendar/Calendar';
import Modals from './pages/Modals';
import About from './pages/About/About';
import CrudApi from './components/MessajeCRUD/CrudApi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dash />}>
          <Route path="table" element={<DataTable />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="messages" element={<CrudApi />} />
        </Route>
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/functioncontainer" element={<FunctionContainer />} />
        <Route path="/modals" element={<Modals />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
