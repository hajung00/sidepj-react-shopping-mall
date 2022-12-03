import React, { useEffect } from 'react';
import Navlist from './Navlist';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './DetailPage';
import Event from './Event';
import Cart from './Cart.js';
import MainPage from './MainPage';
import './App.css';

function App() {
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify([]));
  }, []);

  return (
    <div className='App'>
      <Navlist />
      <Routes>
        <Route path='/shoes' element={<MainPage />}></Route>
        <Route path='/detail/:id' element={<DetailPage />}></Route>
        <Route path='/event' element={<Event />}>
          <Route
            path='one'
            element={<div>첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
