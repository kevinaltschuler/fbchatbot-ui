import React, { Context } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Store = React.createContext({});

ReactDOM.render(
  <Store.Provider store={{}}>
    <App />
  </Store.Provider>,
  document.getElementById('root')
);
