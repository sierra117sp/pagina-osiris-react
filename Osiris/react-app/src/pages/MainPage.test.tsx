import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

describe('MainPage', () => {
  it('renderiza el logo principal', () => {
    render(<MainPage />);
    const logo = screen.getByAltText(/logo osiris project/i);
    expect(logo).toBeInTheDocument();
  });

  it('renderiza el texto del header', () => {
    render(<MainPage />);
    // Busca el h1 principal
    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toHaveTextContent(/osiris project/i);
  });
});
