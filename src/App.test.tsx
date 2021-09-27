import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {TEST} from "./config";



test('renders learn react link', () => {
  render(<App />);

  if (TEST) {
    console.log('✅');
  }

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
