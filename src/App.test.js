import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/MediBank Test/i);
  expect(linkElement).toBeInTheDocument();
});
