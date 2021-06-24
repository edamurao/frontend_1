import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily: [
      'Spartan'
    ].join(','),
    body2: {
      color: 'hsl(0, 0%, 63%)'
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: 'hsl(0, 0%, 27%)'
        },
      },
    },
    MuiPaper: {      
      elevation1: {
        boxShadow: 'none'
      }
    },
  }
})

console.log('theme', theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
