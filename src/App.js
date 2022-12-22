import React, { useEffect } from 'react';
import Navlist from './Navlist';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import Event from './EventPage/Event';
import Cart from './pages/Cart.js';
import MainPage from './pages/MainPage';
import './App.css';
import Event1 from './EventPage/Event1';
import Event2 from './EventPage/Event2';

function App() {
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]));
  }, []);

  return (
    <div className='App'>
      <Navlist />
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/detail/:id' element={<DetailPage />}></Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<Event1 />}></Route>
          <Route path='two' element={<Event2 />}></Route>
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
