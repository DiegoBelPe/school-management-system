import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';
import Cards from './components/Cards/Cards';
import FunctionContainer from './components/FunctionContainer';
import Schedule from './components/Schedule/Schedule';
import Dash from './pages/Dash/Dash';
import Login from './pages/Login';
import DataTable from './components/DataTable/DataTable';
import Calendar from './components/Calendar/Calendar';
import Modals from './pages/Modals';
import About from './pages/About/About';
import CrudApi from './components/MessajeCRUD/CrudApi';
import Activate from './components/VerifyAccount';
import Student from './components/Students';
import UploadImage from './components/Upload/UploadImage';

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
          <Route path="estudiantes" element={<Student />} />
        </Route>
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/functioncontainer" element={<FunctionContainer />} />
        <Route path="/modals" element={<Modals />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CrudApi" element={<CrudApi />} />
        <Route path="/verify-account/:token" element={<Activate />} />
        <Route path="/uploadImage" element={<UploadImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
