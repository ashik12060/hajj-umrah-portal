import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HajjPackages from './pages/HajjPackages/HajjPackages';
import Form from './components/Form/Form';
import Contact from './pages/Contact/Contact';
import UmrahPackages from './pages/UmrahPackages/UmrahPackages';
import AirTicket from './pages/AirTicket/AirTicket';
import VisaProcess from './pages/VisaProcess/VisaProcess';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/hajj-packages' element={<HajjPackages />} ></Route>
        <Route path='/umrah-packages' element={<UmrahPackages />} ></Route>
        <Route path='/air-ticket' element={<AirTicket />} ></Route>
        <Route path='/visa-process' element={<VisaProcess />} ></Route>
        <Route path='/form' element={<Form />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
