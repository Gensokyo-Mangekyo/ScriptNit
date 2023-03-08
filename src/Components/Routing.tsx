import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import MainPage from '../Pages/MainPage';
import TouhouGPT from '../Pages/TouhouGPT';

function RoutingPage() {

    return (
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/TouhouGPT' element={<TouhouGPT></TouhouGPT>}></Route>
        <Route path='*' element={<div>Страница не найдена</div>}></Route>
      </Routes>
      </BrowserRouter>
      
  
    );
  }

  export default RoutingPage;