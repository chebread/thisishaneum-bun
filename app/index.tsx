import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from 'App';
import GlobalStyles from 'layouts/GlobalStyles';

const targetDom = document.getElementById('root');
const root = ReactDOM.createRoot(targetDom!); // targetDom이 Null이라 ! 추가
root.render(
  <HelmetProvider>
    <GlobalStyles />
    <App />
  </HelmetProvider>
);
