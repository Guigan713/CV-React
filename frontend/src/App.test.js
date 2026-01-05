import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the user name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Guillaume Lequin/i);
  expect(nameElement).toBeInTheDocument();
});
