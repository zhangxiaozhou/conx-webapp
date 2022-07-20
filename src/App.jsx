import logo from './logo.svg';
import './App.less';

import React from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import Login from './pages/login'
import Section from './pages/section'
import Home from './pages/home'
import CrossSection from './pages/section/cross'
import VerticalSection from './pages/section/vertical'
import Demo from './pages/demo'

function App() {

  return <Routes>
    <Route path='/login' element={<Login />}></Route>

    <Route path='/' element={<Home />}>
      <Route path='section' element={<Section />}>
        <Route path='cross' element={<CrossSection />}></Route>
        <Route path='vertical' element={<VerticalSection />}></Route>
      </Route>

      <Route path='demo' element={<Demo />}></Route>
    </Route>
  </Routes>
}

export default App 