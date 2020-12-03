import { getByAltText, getByText, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check Characters Exist', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/);
  expect(linkElement).toBeInTheDocument();
})

test('Deployin String', () => {
  render(<App />);
  const linkElement = screen.getByText(/Deployed Using Travis-ci/);
  expect(linkElement).toBeInTheDocument();
})