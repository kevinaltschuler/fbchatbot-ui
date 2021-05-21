import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import Header from './Header';
import TheForm from './TheForm';

const App = () => {
  return (
    <>
      <Header />

      <TheForm />
    </>
  );
};

export default hot(App);
