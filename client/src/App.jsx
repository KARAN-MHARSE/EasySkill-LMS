import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Cources from './pages/Cources';
import Messages from './pages/Messages';
import Webinar from './pages/Webinar';
import Calender from './pages/Calender';
import Store from './pages/Store';
import Login from './pages/Login';
import Register from './pages/Register';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import TeachHome from './pages-teach/TeachHome';

function App() {
  return (
    <BrowserRouter>
      <div className='flex h-[100vh] overflow-hidden' style={{ scrollbarWidth: 'none', /* Firefox */ WebkitScrollbar: 'display:none'}}>
        <SideBar />
        <div className='flex-1 flex flex-col bg-primaryGrey'>
          <Navbar />
          <div className='overflow-y-auto scrollbar-hidden flex-1' style={{ scrollbarWidth: 'none', /* Firefox */ WebkitScrollbar: 'display:none'}}>
            <Routes>
              <Route path='/' element={<DashBoard />} />
              <Route path='/cources' element={<Cources />} />
              <Route path='/messages' element={<Messages />} />
              <Route path='/webinars' element={<Webinar />} />
              <Route path='/calender' element={<Calender />} />
              <Route path='/store' element={<Store />} />
              <Route path='/sign-in' element={<Login />} />
              <Route path='/sign-up' element={<Register />} />
              <Route path="/teach/home" element={<TeachHome/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
