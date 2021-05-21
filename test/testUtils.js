import React from 'react';
import { render } from '@testing-library/react';
import { AppStoreProvider } from '../src/stores/AppStore';

const Providers = ({ children }) => {
  return <AppStoreProvider>{children}</AppStoreProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
