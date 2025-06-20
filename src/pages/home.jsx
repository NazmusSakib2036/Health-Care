import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/home.css';
import { FaSearch } from 'react-icons/fa';
import Doctor_gif from '../assets/image/giphy.gif';

const DoctorHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/doctors?query=${searchQuery}`);
  };

  return (
    <div className="doctor-home">
      <div className="content">
        <h1>Your Health, Our Priority</h1>
        <p>
          Book your doctor appointments instantly and securely. <br />
          Trusted by thousands for their everyday health needs. <br />
          Search for the right specialist and get started in seconds!
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for doctors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="image-section">
        <img
          src={Doctor_gif}
          alt="Doctor care"
        />
      </div>
    </div>
  );
};

export default DoctorHome;
