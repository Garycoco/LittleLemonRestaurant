
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Bookings from './components/Bookings';
import Footer from './components/Footer';
import Routing from './components/Routes';

function App() {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
