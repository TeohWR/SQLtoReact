import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders NUS MONEY APP User List link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/NUS MONEY APP User List/i);
  expect(linkElement).toBeInTheDocument();
});
