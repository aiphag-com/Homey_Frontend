import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import './index.less';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App';
import AdminDashboardPage from './Pages/AdminPages/AdminDashboardPage';
import NewProductPage from './Pages/SellerPages/NewProductPage';
import SellerManagementPage from './Pages/AdminPages/SellerManagementPage';
import SellerDashboardPage from './Pages/SellerPages/SellerDashboardPage';
import NewSellerForm from './Components/Forms/NewSellerForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Routes>
    <Route exact path="/" element={<App/>}/>
      <Route path="/AdminDashboard"  element={<AdminDashboardPage/>}/>
      <Route path="/SellerManagement"  element={<SellerManagementPage />}/>
      <Route path="/NewProductPage" element={<NewProductPage />} />
      <Route path="/SellerDashboard" element={<SellerDashboardPage />} />
      <Route path="/NewSellerForm" element={<NewSellerForm />} />
      </Routes>
    </Router>
);
