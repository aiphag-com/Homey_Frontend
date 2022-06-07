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
import Analytics from './Pages/AdminPages/Analytics';
//MODELS
import ModelPaused from './Pages/AdminPages/Models/ModelsPaused';
import ModelsHabilited from './Pages/AdminPages/Models/ModelsHabilited';
import ModelsRequest from './Pages/AdminPages/Models/ModelsRequests';
import ModelsHistory from './Pages/AdminPages/Models/ModelsHistory';


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
      <Route path="/Analytics" element={<Analytics />} />
      <Route path="/ModelsPaused" element={<ModelPaused />} />
      <Route path="/ModelsRequest" element={<ModelsRequest />} />
      <Route path="/ModelsHabilited" element={<ModelsHabilited />} />
      <Route path="/ModelsHistory" element={<ModelsHistory />} />
      <Route path="/CataloguePage" element={<SellerDashboardPage />} />
      </Routes>
    </Router>
);
