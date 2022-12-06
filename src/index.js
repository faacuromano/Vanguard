import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import {  Routes, Route } from "react-router-dom";

import GetOne from './Components/GetOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/getOne' element={<GetOne/>} />
      </Routes>
  </BrowserRouter>
</React.StrictMode>
);