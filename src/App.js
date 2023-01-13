
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Bookings from './components/Bookings';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/booking' element={<Bookings />} />
      </Routes>
    </>
  );
}

export default App;
