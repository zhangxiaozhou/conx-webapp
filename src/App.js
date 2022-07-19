import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';

import routes from './router'

import Home from './pages/home'

function App() {
  return (
    <ConfigProvider locale={locale}>
      <div>
        <Home></Home>
      </div>
    </ConfigProvider> 
  );
}

export default App;
