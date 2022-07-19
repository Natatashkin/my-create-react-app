import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StylesProvider, ThemeProvider } from '@mui/styles';
import { jss, generateClassName } from './styles/helpers';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
);
