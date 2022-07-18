import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import { CustomFooter } from './Components/CustomFooter';
import CustomNavbar from './Components/CustomNavbar';
import HomePage from './Components/HomePage';
import HotelsPage from './Components/HotelsPage';
import OneHotel from './Components/OneHotel';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/hotels' element={<HotelsPage/>}/>
        <Route path='/hotel/:id' element={<OneHotel/>}/>
      </Routes>
      </BrowserRouter>
      <CustomFooter/>
    </div>
  );
}

export default App;
