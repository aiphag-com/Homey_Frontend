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
import NewProductForm from './Components/Forms/NewProductForm';
import SettingsEditProfile from './Pages/SellerPages/SettingsEditProfilePage';
import SettingsSecurityPage from './Pages/SellerPages/SettingsSecurityPage';
import SellerAnalyticsPage from './Pages/SellerPages/SellerAnalyticsPage';
import CatalogueQuestions from './Pages/SellerPages/CatalogueQuestions';
import Register from './Pages/SellerPages/Register';
import Deliveries from './Pages/SellerPages/Deliveries';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Routes>
    <Route exact path="/" element={<App/>}/>
    {/* Admin */}
      <Route path="/AdminDashboard"  element={<AdminDashboardPage/>}/>
      <Route path="/SellerManagement"  element={<SellerManagementPage />}/>
      <Route path="/NewSellerForm" element={<NewSellerForm />} />
      <Route path="/NewProductForm" element={<NewProductForm />} />
      <Route path="/Analytics" element={<Analytics />} />
      <Route path="/ModelsPaused" element={<ModelPaused />} />
      <Route path="/ModelsRequest" element={<ModelsRequest />} />
      <Route path="/ModelsHabilited" element={<ModelsHabilited />} />
      <Route path="/ModelsHistory" element={<ModelsHistory />} />
      {/* Seller */}
      <Route path="/SellerDashboard" element={<SellerDashboardPage />} />
      <Route path="/CataloguePage" element={<SellerDashboardPage />} />
      <Route path="/CatalogueQuestions" element={<CatalogueQuestions />} />
      <Route path="/NewProductPage" element={<NewProductPage />} />
      <Route path="/EditProfile" element={<SettingsEditProfile />} />
      <Route path="/Security" element={<SettingsSecurityPage />} />
      <Route path="/Analitycs" element={<SellerAnalyticsPage />} />
      <Route path="/Deliveries" element={<Deliveries />} />
      <Route path="/Register" element={<Register />} />

      </Routes>
    </Router>
);
