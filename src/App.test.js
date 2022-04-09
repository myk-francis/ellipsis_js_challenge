import { render, screen } from '@testing-library/react';
import App from './App';


test('title should be rendered', () => {
  render(<App />);
  const titleElement = screen.queryByText("DEMO Streaming");
  expect(titleElement).toBeInTheDocument();
});

test('sub title should be rendered', () => {
  render(<App />);
  const subtitleElement = screen.getAllByText("Popular Movies")[0];
  expect(subtitleElement).toBeInTheDocument();
});

test('login text button should be rendered', () => {
  render(<App />);
  const loginElement = screen.queryByText("Log in");
  expect(loginElement).toBeInTheDocument();
});

test('free trial text should render', () => {
  render(<App />);
  const freetrialdivElement = screen.queryByText("Start your free trial");
  expect(freetrialdivElement).toBeInTheDocument();
});

test('facebook icon should render', () => {
  render(<App />);
  const IconElement = screen.getByTestId("fbicon");
  expect(IconElement).toBeInTheDocument();
});

test('twitter icon should render', () => {
  render(<App />);
  const IconElement = screen.getByTestId("twittericon");
  expect(IconElement).toBeInTheDocument();
});

test('instagram icon should render', () => {
  render(<App />);
  const IconElement = screen.getByTestId("instagramicon");
  expect(IconElement).toBeInTheDocument();
});

test('link should be rendered', () => {
  render(<App />);
  const link = screen.getByTestId("movieslink");
  expect(link).toBeInTheDocument();
});

