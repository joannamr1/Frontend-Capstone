import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Booking from './components/Booking';

test('renders the booking form labels', () => {
    render(<Booking onFormSubmit={() => {}} />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Time:')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion:')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of People:')).toBeInTheDocument();
});

test('allows the user to fill in the form', () => {
    render(<Booking onFormSubmit={() => {}} />);

    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'Alice' } });
    expect(nameInput.value).toBe('Alice');
});

