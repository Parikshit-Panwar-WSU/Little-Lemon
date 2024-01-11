import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './components/BookingPage';

test('Renders the BookingPage heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reservations");

  expect(headingElement).toBeInTheDocument();
});

test('Test behavior of reservation date and availableTimes', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText('Reservations');
  const date = screen.getByTestId("resDate");
  const time = screen.getByTestId('resTime');

  fireEvent.change(date, {target: {value: "2024-01-15"}});
  fireEvent.change(time, {target: {value: "22:00"}});

  expect(headingElement).toBeInTheDocument();
  expect(date.value).toBe("2024-01-15");
  expect(time.value).toBe("22:00");
});
