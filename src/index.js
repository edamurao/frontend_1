import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      mobile: 375,
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: [
      'Spartan', 'san-serif'
    ].join(','),
    body2: {
      color: 'hsl(0, 0%, 63%)',
      lineHeight: '1.6'
    },
    h4: {
      fontSize: 38,
      fontWeight: 600,
      lineHeight: 1
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
