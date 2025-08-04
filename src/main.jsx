import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Signin from './components/auth';
import { AuthProvider } from "./authcontext"; 

const root = createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>




  // <React.StrictMode>
  //     <App />
  // </React.StrictMode>
  
  
  // <React.StrictMode>
  //   <Signin/>
  // </React.StrictMode>

);
