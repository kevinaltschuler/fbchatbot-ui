import React, { useRef, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import Header from './Header';
import ReviewAvg from './ReviewAvg';
import TheForm from './TheForm';

const App = () => {
  const [refetch, setRefetch] = useState(false);

  return (
    <>
      <Header />
      <ReviewAvg refetch={refetch} setRefetch={setRefetch} />
      <TheForm
        onSuccess={() => {
          setRefetch(true);
        }}
      />
    </>
  );
};

export default hot(App);
