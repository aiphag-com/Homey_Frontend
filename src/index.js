import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App';
import AdminDashboard from './Components/Admin/Dashboard';
import SellerManagement from './Components/Admin/SellerManagement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Routes>
    <Route exact path="/" element={<App/>}/>
      <Route path="/AdminDashboard"  element={<AdminDashboard/>}/>
      <Route path="/SellerManagement"  element={<SellerManagement/>}/>
      </Routes>
    </Router>
);
