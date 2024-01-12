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

test('Testing the booking functionality-Success test', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText('Reservations');
  const toastMessage = screen.getByText('Your reservation is confirmed!');
  const name = screen.getByTestId('fullName');
  const email = screen.getByTestId('email');
  const mobile = screen.getByTestId('mobile');
  const date = screen.getByTestId("resDate");
  const time = screen.getByTestId('resTime');
  const guests = screen.getByTestId('guests');
  const occasion = screen.getByTestId('occasion');
  const submitBtn = screen.getByTestId('submitBtn');

  fireEvent.change(name, {target: {value: 'User A'}});
  fireEvent.change(email, {target: {value: 'helloworld@aol.com'}});
  fireEvent.change(mobile, {target: {value: '1234567891'}});
  fireEvent.change(date, {target: {value: '2024-01-15'}});
  fireEvent.change(time, {target: {value: "22:00"}});
  fireEvent.change(guests, {target: {value: 2}});
  fireEvent.change(occasion, {target: {value: 'Birthday'}});

  // Click submit btn.
  fireEvent.click(submitBtn);

  expect(headingElement).toBeInTheDocument();
  expect(toastMessage).toBeInTheDocument();
  expect(name.value).toBe('User A');
  expect(email.value).toBe('helloworld@aol.com');
  expect(mobile.value).toBe('1234567891');
  expect(date.value).toBe('2024-01-15');
  expect(time.value).toBe("22:00");
  expect(guests.value).toBe('2');
  expect(occasion.value).toBe("Birthday");
});
