import React, { useState } from 'react';
import Header from './Header';
import Booking from './Booking';
import BookingConfirmed from './BookingConfirmed';

function Main() {
  const [view, setView] = useState('header');
  const [bookingDetails, setBookingDetails] = useState({});

  const handleBookTableClick = () => {
      setView('booking');
  };

  const handleFormSubmit = (formData) => {
      setBookingDetails(formData);
      setView('confirmed');
  };

  const handleBackToHeader = () => {
      setView('header');
  };

  return (
      <div>
          {view === 'header' && <Header onBookTableClick={handleBookTableClick} />}
          {view === 'booking' && <Booking onFormSubmit={handleFormSubmit} />}
          {view === 'confirmed' && <BookingConfirmed bookingDetails={bookingDetails} onBackToHeader={handleBackToHeader} />}
      </div>
  );
}


export default Main;

