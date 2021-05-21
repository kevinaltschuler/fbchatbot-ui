import React from 'react';

import { render, screen } from '../testUtils';
import App from '../../src/components/App';

describe('<App/>', () => {
  test('renders without error', () => {
    render(<App />);
    const elem = screen.getByTestId('title-element');
    expect(elem.textContent).toBe('hello welcome to my app');
  });
});
