import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import Section from './pages/section'

import CrossSection from './pages/section/cross'
import VerticalSection from './pages/section/vertical'

import Demo from './pages/demo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="section" element={<Section />} >
              <Route path='cross' element={ <CrossSection/> } />
              <Route path='vertical' element={ <VerticalSection/> } />
          </Route> 
          
          <Route path="demo" element={ <Demo/> }></Route>
        </Route>

        <Route path="/login" element={<Login />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
