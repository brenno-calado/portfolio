import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppProvider from './context/Provider';
import IntlProvider from './locales/provider';

const navigatorLocale = navigator ? navigator.language.split(/-|_/)[0] : 'en';

ReactDOM.render(
  <AppProvider locale={navigatorLocale}>
    <IntlProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </AppProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
