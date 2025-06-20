import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/doctor_view.css';
import Dr1 from '../assets/image/dr1.jpg';
import Dr2 from '../assets/image/dr2.jpg';
import Dr3 from '../assets/image/dr3.jpg';
import Dr4 from '../assets/image/dr4.jpg';
import Dr5 from '../assets/image/dr5.jpg';
import Dr6 from '../assets/image/dr6.jpg';
import Dr7 from '../assets/image/dr7.png';
import Dr8 from '../assets/image/dr8.png';
import Dr9 from '../assets/image/dr9.jpg';
import Dr10 from '../assets/image/dr10.jpg';
import Dr11 from '../assets/image/dr11.jpg';

const doctorData = [
  {
    id: 1,
    name: 'Dr. Ayesha Rahman',
    degrees: 'MBBS, FCPS (Medicine)',
    experience: '10 years Experience',
    available: 'Available',
    regNo: 'BMDC-10234',
    photo: Dr1,
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      currentDayAvailable: false,
      fee: '1500 (incl. VAT)',
      hospital: 'Labaid Specialized Hospital, Dhaka'
    }

  },
  {
    id: 2,
    name: 'Dr. Shirin Sarmin',
    degrees: 'MBBS, MD (Cardiology)',
    experience: '12 years Experience',
    available: 'Available',
    regNo: 'BMDC-10021',
    photo: Dr2,
    availability: {
      days: ['Tuesday', 'Thursday'],
      currentDayAvailable: true,
      fee: '1800 (incl. VAT)',
      hospital: 'Labaid Specialized Hospital, Dhaka'
    }

  },
  {
    id: 3,
    name: 'Dr. Shaila Hossain',
    degrees: 'MBBS, FCPS (Pediatrics)',
    experience: '8 years Experience',
    available: 'Available',
    regNo: 'BMDC-10456',
    photo: Dr3,
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      currentDayAvailable: false,
      fee: '1500 (incl. VAT)',
      hospital: 'Labaid Specialized Hospital, Dhaka'
    }

  },
  {
    id: 4,
    name: 'Dr. Mahmuda Alam',
    degrees: 'MBBS, FCPS (ENT)',
    experience: '7 years Experience',
    available: 'Available',
    regNo: 'BMDC-10457',
    photo: Dr4,
    availability: {
      days: ['Tuesday', 'Thursday'],
      currentDayAvailable: true,
      fee: '1800 (incl. VAT)',
      hospital: 'Labaid Specialized Hospital, Dhaka'
    }

  },
  {
    id: 5,
    name: 'Dr. Ruma Akter',
    degrees: 'MBBS, FCPS (Gynecology)',
    experience: '9 years Experience',
    available: 'Available',
    regNo: 'BMDC-10458',
    photo: Dr5,
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      currentDayAvailable: false,
      fee: '1500 (incl. VAT)',
      hospital: 'Labaid Specialized Hospital, Dhaka'
    }


  },
  {
    id: 6,
    name: 'Dr. Salma Jahan',
    degrees: 'MBBS, FCPS (Orthopedics)',
    experience: '11 years Experience',
    available: 'Available',
    regNo: 'BMDC-10459',
    photo: Dr6,
    availability: {
      days: ['Tuesday', 'Thursday'],
      currentDayAvailable: true,
      fee: '1800 (incl. VAT)',
      hospital: 'Labaid Specialized Hospital, Dhaka'
    }

  },
  {
    id: 7,
    name: 'Dr. Abir Hasan',
    degrees: 'MBBS, MD (Dermatology)',
    experience: '5 years Experience',
    available: 'Available',
    regNo: 'BMDC-10460',
    photo: Dr7,
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      currentDayAvailable: false,
      fee: '1500 (incl. VAT)',
      hospital: 'Labaid Specialized Hospital, Dhaka'
    }


  },
  {
    id: 8,
    name: 'Dr. Rafique Hossain',
    degrees: 'MBBS, FCPS (Urology)',
    experience: '13 years Experience',
    available: 'Available',
    regNo: 'BMDC-10461',
    photo: Dr8,
    availability: {
      days: ['Tuesday', 'Thursday'],
      currentDayAvailable: true,
      fee: '1800 (incl. VAT)',
      hospital: 'Labaid Specialized Hospital, Dhaka'
    }

  },
  {
    id: 9,
    name: 'Dr. Nurul Islam',
    degrees: 'MBBS, FCPS (Neurology)',
    experience: '6 years Experience',
    available: 'Available',
    regNo: 'BMDC-10462',
    photo: Dr9,
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      currentDayAvailable: false,
      fee: '1500 (incl. VAT)',
      hospital: 'Labaid Specialized Hospital, Dhaka'
    }


  },
  {
    id: 10,
    name: 'Dr. Munir Khan', 
    degrees: 'MBBS, MD (Nephrology)',
    experience: '10 years Experience',
    available: 'Available',
    regNo: 'BMDC-10463',
    photo: Dr10,
    availability: {
      days: ['Tuesday', 'Thursday'],
      currentDayAvailable: true,
      fee: '1800 (incl. VAT)',
      hospital: 'Labaid Specialized Hospital, Dhaka'
    }
  },
  {
    id: 11,
    name: 'Dr. Mehedi Rahman',
    degrees: 'MBBS, MS (Surgery)',
    experience: '8 years Experience',
    available: 'Available',
    regNo: 'BMDC-10464',
    photo: Dr11,
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      currentDayAvailable: false,
      fee: '1500 (incl. VAT)',
      hospital: 'Labaid Specialized Hospital, Dhaka'
    }
  },
];

const AllDoctors = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const visibleDoctors = showAll ? doctorData : doctorData.slice(0, 6);

  const handleViewDetails = (doctor) => {
    navigate(`/doctors/${doctor.id}`, { state: { doctor } });
  };

  // Function to check if current day is available
  const isAvailableToday = (doctor) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = daysOfWeek[new Date().getDay()];
    return doctor.availability.days.includes(today);
  };

  const getTodayDay = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[new Date().getDay()];
  };

  const today = getTodayDay();


  return (
    <div className="all-doctors">
      <h1>Meet Our Expert Doctors</h1>
      <div className="doctor-list">
        {visibleDoctors.map((doctor) => {
          const availableToday = isAvailableToday(doctor);

          return (
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.photo} alt={doctor.name} className="doctor-img" />
              <div className="top-info">
                <span className={`available ${availableToday ? 'available-today' : 'not-available'}`}>
                  {availableToday ? 'Available Today' : 'Not Available Today'}
                </span>
                <span className="experience">{doctor.experience}</span>
              </div>
              <h2 className="name">{doctor.name}</h2>
              <p className="degrees">{doctor.degrees}</p>

              <div className="availability-days">
                <h4>Available Days:</h4>
                <div className="day-buttons">
                  {doctor.availability.days.map(day => (
                    <span
                      key={day}
                      className={`day-pill ${day === today ? 'today' : ''}`}
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              <hr className="dash-line" />
              <p className="reg">® Reg No: {doctor.regNo}</p>
              <button
                className={`details-btn ${!availableToday ? 'not-available-btn' : ''}`}
                onClick={() => handleViewDetails(doctor)}
              >
                {availableToday ? 'Book Appointment' : 'View Details'}
              </button>
            </div>
          );
        })}
      </div>

      <div className="toggle-container">
    <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
        <span>{showAll ? 'View Less' : 'View All'}</span>
    </button>
</div>
    </div>
  );
};

export default AllDoctors;