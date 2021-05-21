import React from 'react';

const INITIAL_VALUE = {};

export const AppStore = React.createContext(INITIAL_VALUE);

export const AppStoreProvider = ({ children }) => {
  return (
    <AppStore.Provider value={INITIAL_VALUE}>{children}</AppStore.Provider>
  );
};
