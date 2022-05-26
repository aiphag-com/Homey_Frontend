import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App';
import NewProductPage from './Pages/NewProductPage';
import AdminDashboardPage from './Pages/AdminDashboardPage';
import SellerManagementPage from './Pages/SellerManagementPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Routes>
    <Route exact path="/" element={<App/>}/>
      <Route path="/AdminDashboard"  element={<AdminDashboardPage/>}/>
      <Route path="/SellerManagement"  element={<SellerManagementPage/>}/>
      <Route path="/NewProductPage" element={<NewProductPage />} />
      </Routes>
    </Router>
);
