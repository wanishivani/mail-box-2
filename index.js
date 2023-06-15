import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthContextProvider } from './Components/Auth/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Auth0Provider
        domain="dev-bvmzyxmgv3k4ifju.us.auth0.com"
        clientId="URp0X1iR25BBBNQ4sZzz1BNbR1cvGX7M"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        
        

    
  <AuthContextProvider>
     <BrowserRouter>
    <App />
    </BrowserRouter>
  </AuthContextProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
