import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App/>);
  const linkElement = screen.getByRole('heading', { name: /hello world/i });
  expect(linkElement).toBeInTheDocument();
});
