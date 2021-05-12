import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('App', () => {
  it('has the correct path', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/portfolio');
  });
  it('has the correct title', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Brenno Calado Vieira de Melo Nascimento/))
      .toBeInTheDocument();
  });
});
// Test if when loaded, the h1 text from Home component is shown
// Test if the document URL is correct
// Test if the page doesn't have a vertical scrollbar, the App-buttons are shown
// Test if the page width is equal or greater than 768px,
// the header is shown at the top and header-button disappear
