import { useEffect } from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import AboutSite from './Components/AboutSite';
import { CustomFooter } from './Components/CustomFooter';
import CustomNavbar from './Components/CustomNavbar';
import HomePage from './Components/HomePage';
import HotelBooking from './Components/HotelBooking';
import HotelsPage from './Components/HotelsPage';
import LoginRegister from './Components/LoginRegister';
import MyProfile from './Components/MyProfile';
import OneHotel from './Components/OneHotel';
import Header from './Header';

function App() {

    useEffect(() => {
      document.title = 'Farshad Booking';
    }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><CustomNavbar/><HomePage/><CustomFooter/></>}/>
        <Route path='/hotels' element={<><CustomNavbar/><HotelsPage/><CustomFooter/></>}/>
        <Route path='/hotel/:id' element={<><CustomNavbar/><OneHotel/><CustomFooter/></>}/>
        {window.localStorage.getItem("SetToken") ? <Route path='/login-register' element={<><CustomNavbar/><HomePage/><CustomFooter/></>}/> : <Route path='/login-register' element={<><CustomNavbar/><LoginRegister/><CustomFooter/></>}/> }
        {window.localStorage.getItem("SetToken") ? <Route path='/myProfile' element={<><CustomNavbar/><MyProfile/><CustomFooter/></>}/> : <Route path='/myProfile' element={<><CustomNavbar/><HomePage/><CustomFooter/></>}/> }
        {window.localStorage.getItem("SetToken") ? <Route path='/hotel/:id/booking' element={<HotelBooking/>}/> : <Route path='/hotel/:id/booking' element={<><CustomNavbar/><HomePage/><CustomFooter/></>}/> }
        <Route path='/about-site' element={<><CustomNavbar/><AboutSite/><CustomFooter/></>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
