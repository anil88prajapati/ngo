import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NgoContextWrapper from './store/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NgoContextWrapper>
      <App />
    </NgoContextWrapper>
  </React.StrictMode>
);
