import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/doctor_details.css';
import '../assets/css/appointment_form.css';

const DoctorDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const today = new Date().toLocaleString('default', { weekday: 'long' });
  const isAvailableToday = doctor.availability?.days.includes(today);

  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Enhanced navigation function with forced reload
  const navigateWithReload = (path) => {
    window.scrollTo(0, 0);
    window.location.href = path; // This will do a full page reload
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Request Submitted:', { ...formData, doctorId: doctor.id, doctorName: doctor.name });

    const existingBookings = JSON.parse(localStorage.getItem('doctorBookings')) || [];
    const newBooking = {
      id: Date.now(),
      doctor: {
        id: doctor.id,
        name: doctor.name,
        photo: doctor.photo,
        degrees: doctor.degrees,
        hospital: doctor.availability?.hospital || 'Labaid Cardiac Hospital, Dhaka',
      },
      patientInfo: formData,
      status: 'Pending',
      bookingDate: new Date().toISOString(),
    };
    localStorage.setItem('doctorBookings', JSON.stringify([...existingBookings, newBooking]));

    alert('Appointment requested successfully!');
    setShowAppointmentForm(false);
    navigateWithReload('/booking'); // Using the reload navigation
  };

  return (
    <div className="doctor-details-page">
      <div className="doctor-profile-header">
        <h1>Doctor's Profile Details</h1>
        <p className="doctor-header-description">
          Get to know your doctor before your appointment. View detailed profiles including qualifications,
          specialties, experience, patient reviews, and consultation availability — all in one place.
          We believe informed choices lead to better care.
        </p>
      </div>

      <div className="doctor-details-container">
        {/* Left profile section */}
        <div className="doctor-profile-left">
          <img src={doctor.photo} alt={doctor.name} className="doctor-profile-img" />
          <h2>{doctor.name}</h2>
          <p className="doctor-degrees">{doctor.degrees}</p>
          <p className="doctor-hospital">Working At: {doctor.availability?.hospital || 'Labaid Cardiac Hospital, Dhaka'}</p>
          <p className="doctor-reg">® Reg No: {doctor.regNo}</p>

          <div className="doctor-availability">
            <h3>Availability</h3>
            <div className="doctor-availability-days">
              {doctor.availability?.days.map((day) => (
                <span
                  key={day}
                  className={`doctor-day-pill ${day === today ? 'doctor-today' : ''}`}
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          <div className="doctor-fee">
            <h3>Consultation Fee:</h3>
            <p>Taka: {doctor.availability?.fee || '1500 (incl. VAT)'} Per consultation</p>
          </div>

          <button
            className={`doctor-book-btn ${!isAvailableToday ? 'doctor-disabled' : ''}`}
            onClick={() => isAvailableToday && setShowAppointmentForm(!showAppointmentForm)}
            disabled={!isAvailableToday}
          >
            {isAvailableToday ? 'Book an Appointment' : 'Not Available Today'}
          </button>
        </div>

        {/* Right profile section */}
        <div className="doctor-profile-right">
          <div className={`doctor-availability-alert ${isAvailableToday ? 'doctor-available' : 'doctor-not-available'}`}>
            <p className="doctor-alert-title">Availability</p>
            <p className="doctor-alert-message">
              {isAvailableToday ? 'Doctor Available Today' : 'Doctor Not Available Today'}
            </p>
            <p className="doctor-alert-note">
              {isAvailableToday ? (
                '✅ Available for appointments today. Book your slot now!'
              ) : (
                '🔍 Due to high patient volume, we are currently accepting appointments for available days only. We appreciate your understanding.'
              )}
            </p>
            <button
              className={`doctor-appointment-btn ${!isAvailableToday ? 'doctor-disabled' : ''}`}
              onClick={() => isAvailableToday && setShowAppointmentForm(!showAppointmentForm)}
              disabled={!isAvailableToday}
            >
              {isAvailableToday ? 'Book Appointment Now' : 'Check Availability'}
            </button>
          </div>

          <div className="doctor-additional-info">
            <h3>About Doctor</h3>
            <p className="doctor-bio">{doctor.bio || 'Experienced specialist with advanced training in their field.'}</p>

            <h3>Specialty & Expertise</h3>
            <p className="doctor-specialty">{doctor.specialty || doctor.degrees.split(', ')[1] || 'General Medicine'}</p>

            <h3>Experience</h3>
            <p className="doctor-experience">{doctor.experience || '10+ years of experience'}</p>

            {doctor.reviews && (
              <>
                <h3>Patient Reviews</h3>
                <div className="doctor-reviews">
                  {doctor.reviews.slice(0, 3).map((review, index) => (
                    <div key={index} className="doctor-review">
                      <p className="doctor-review-text">"{review.text}"</p>
                      <p className="doctor-review-author">- {review.author}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Appointment Form Modal */}
      {showAppointmentForm && (
        <div className="doctor-appointment-overlay">
          <div className="doctor-appointment-modal">
            <button 
              className="doctor-close-btn" 
              onClick={() => setShowAppointmentForm(false)}
            >
              &times;
            </button>
            <h2>Book an Appointment with {doctor.name}</h2>
            <form onSubmit={handleSubmit}>
              <div className="doctor-form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="doctor-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="doctor-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="doctor-form-row">
                <div className="doctor-form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="doctor-form-group">
                  <label htmlFor="time">Preferred Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="doctor-form-group">
                <label htmlFor="reason">Reason for Visit</label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="doctor-submit-btn">
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDetails;