import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('App', () => {
  it('has the correct path', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/portfolio');
  });
  it('has the correct title', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Brenno Calado/)).toBeInTheDocument();
  });
  it('tests header buttons', () => {
    renderWithRouter(<App />);
    const headerButton = screen.getAllByRole('button')[0];
    expect(headerButton.className).toContain('header-button');
    fireEvent.click(headerButton);
    fireEvent.click(screen.getByText(/Blog/));
    expect(screen.getByText(/Earth/)).toBeInTheDocument();
    fireEvent.click(headerButton);
    fireEvent.click(screen.getByText(/Projects/));
    expect(screen.getByText(/no current project/)).toBeInTheDocument();
    fireEvent.click(headerButton);
    fireEvent.click(screen.getByText(/Home/));
    expect(screen.getByText(/Brenno Calado/)).toBeInTheDocument();
  });
});
// Test if when loaded, the h1 text from Home component is shown
// Test if the document URL is correct
// Test if the page width is equal or greater than 768px,
// the header is shown at the top and header-button disappear
