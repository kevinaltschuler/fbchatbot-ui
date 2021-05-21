import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import { AppStoreProvider } from './stores/AppStore';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0b0e11;
    height: 100%;
    width: 100vw;
    color: #dee3ea;
    font-family: system-ui,-apple-system;
    margin: 0;
  }
`;

ReactDOM.render(
  <ErrorBoundary>
    <AppStoreProvider>
      <GlobalStyle />
      <App />
    </AppStoreProvider>
  </ErrorBoundary>,
  document.getElementById('root')
);
