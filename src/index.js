import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NgoContextWrapper from './store/Context';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme();
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <NgoContextWrapper>
      <App />
    </NgoContextWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
