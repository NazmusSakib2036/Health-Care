import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/bookings.css';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('doctorBookings')) || [];
    setBookings(storedBookings);
  }, []);

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      const updatedBookings = bookings.map(booking =>
        booking.id === bookingId ? { ...booking, status: 'Cancelled' } : booking
      );
      setBookings(updatedBookings);
      localStorage.setItem('doctorBookings', JSON.stringify(updatedBookings));
      alert('Appointment cancelled.');
    }
  };

  const handleDeleteBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to delete this booking history?')) {
      const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
      setBookings(updatedBookings);
      localStorage.setItem('doctorBookings', JSON.stringify(updatedBookings));
      alert('Booking history deleted.');
    }
  };

  const navigateWithReload = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="my-bookings">
      <h1>My Appointments</h1>
      {bookings.length === 0 ? (
        <div className="no-bookings-container">
          <p className="no-bookings">You have no active appointments. Book one now!</p>
          <div className="doctor-navigation-links">
            <button
              className="doctors-nav-btn"
              onClick={() => navigateWithReload('/doctors')}
            >
              Back to Doctors List
            </button>
            <button
              className="doctors-nav-btnn"
              onClick={() => navigateWithReload('/')}
            >
              Go to Homepage
            </button>
          </div>
        </div>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="doctor-info">
                <img 
                  src={booking.doctor.photo} 
                  alt={booking.doctor.name} 
                  className="doctor-photo"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150?text=Doctor';
                  }}
                />
                <div className="doctor-details-text">
                  <h3>{booking.doctor.name}</h3>
                  <p>{booking.doctor.degrees}</p>
                  <p className="hospital-name">{booking.doctor.hospital}</p>
                </div>
              </div>
              <div className="appointment-details">
                <p><strong>Date:</strong> {booking.patientInfo.date}</p>
                <p><strong>Time:</strong> {booking.patientInfo.time}</p>
                <p><strong>Reason:</strong> {booking.patientInfo.reason}</p>
                <p>
                  <strong>Status:</strong> 
                  <span className={`status-${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                </p>
                <p className="booking-date">
                  Booked on: {new Date(booking.bookingDate).toLocaleDateString()}
                </p>
              </div>
              <div className="booking-actions">
                {booking.status === 'Pending' && (
                  <button
                    className="cancel-btn"
                    onClick={() => handleCancelBooking(booking.id)}
                  >
                    Cancel Appointment
                  </button>
                )}
                {booking.status !== 'Pending' && (
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteBooking(booking.id)}
                  >
                    Delete History
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;