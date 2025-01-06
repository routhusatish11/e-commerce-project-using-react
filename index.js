import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './Redux/components/store'; // Ensure the correct import for the store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <Auth0Provider
      domain="dev-ehcjdxqz33r5wj46.us.auth0.com"
      clientId="LiWS8qQrIVPXkD3eCOg57fjmOy3Sl1fA"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>
);


reportWebVitals();



