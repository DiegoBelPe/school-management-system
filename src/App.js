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
import Payments from './components/Payments/Payments';
import PayPagos from './pages/PayPagos/PayPagos';
import CrudUser from './components/MessageUser/CrudUser';
import DataTableUser from './components/DataTableUser';
import DashUser from './pages/DashUser/DashUser';
import IntroHome from './components/IntroHome/IntroHome';
import AccordionUI from './components/AccordionUI/AccordionUI';
import PageUserDash from './pages/PageUserDash/PageUserDash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/dash" element={<Dash />}>
          <Route path="table/:id" element={<DataTable />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="message/:id" element={<CrudApi />} />
          <Route path="estudiantes" element={<Student />} />
        </Route>
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/functioncontainer" element={<FunctionContainer />} />
        <Route path="/modals" element={<Modals />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/message/:id" element={<CrudApi />} />
        <Route path="/verify-account/:token" element={<Activate />} />
        <Route path="/uploadImage" element={<UploadImage />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/pagos" element={<PayPagos />} />
        <Route path="/IntroHome" element={<IntroHome />} />
        <Route path="/datatable" element={<DataTable />} />
        <Route path="/casdUser" element={<AccordionUI />} />
        <Route path="/page-user-dash" element={<PageUserDash />} />
        <Route path="/dashUser" element={<DashUser />}>
          <Route path="CrudUser/message/:id" element={<CrudUser />} />
          <Route path="taskUser/:id" element={<DataTableUser />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
