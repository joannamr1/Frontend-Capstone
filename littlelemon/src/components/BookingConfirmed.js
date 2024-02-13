import React from 'react';

function BookingConfirmed({ bookingDetails, onBackToHeader }) {
    return (
        <div id="BookingConfirmed">
            <h2>Booking Confirmed!</h2>
            <p>Name: {bookingDetails.name}</p>
            <p>Date: {bookingDetails.date}</p>
            <p>Time: {bookingDetails.time}</p>
            <p>Number of People: {bookingDetails.people}</p>
            <p>Email: {bookingDetails.email}</p>
            <p>Phone Number: {bookingDetails.phone}</p>
            <p>Occasion: {bookingDetails.occasion}</p>
            <button onClick={onBackToHeader}>Back to Home</button>
        </div>
    );
}


export default BookingConfirmed;
