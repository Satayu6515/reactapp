import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
      <BrowserRouter>
        <div className='flex'>
          <Sidebar />
          <div className='flex-1'>
            <Header />
            <Routes>
              <Route path='/Dashboard' element={<Dashboard />} />
              <Route path='/users' element={<Users />} />
              <Route path='/About' element={<About />} />

              
        </Routes>
          </div>
        </div>
      </BrowserRouter> 
  );
}

export default App;
