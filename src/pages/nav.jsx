import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom'; // Changed Link to NavLink
import Doctor from '../assets/image/doctor.png';
import '../assets/css/nav.css';
import { FaUser, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import AuthPopup from '../access/access';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  const navLinks = [
    { name: 'Home', path: '/', id: 1 },
    { name: 'Booking', path: '/booking', id: 2 },
    { name: 'Blog', path: '/blog', id: 3 },
    { name: 'Contact', path: '/contact', id: 4 }
  ];

  // Effect to handle clicks outside and scroll events
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && menuOpen) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowAuthPopup(true);
    setMenuOpen(false); // Close mobile menu when auth opens
  };

  const handleEmergencyClick = () => {
    navigate('/contact');
    setMenuOpen(false); // Close mobile menu on navigation
  };

  // Variants for mobile menu animation
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: '0%', transition: { type: 'spring', stiffness: 100, damping: 20, staggerChildren: 0.1 } },
    exit: { opacity: 0, x: '100%', transition: { type: 'spring', stiffness: 100, damping: 20 } }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.nav
        className="navbar"
        ref={navbarRef}
        initial={{ y: -100 }} // Keep your preferred initial animation here
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }} // Adjust as desired
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          borderRadius: '0 0 2rem 2rem',
          padding: '0 2rem',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backdropFilter: 'blur(10px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '5rem',
        }}
      >
        <div className="nav-left">
          <motion.div
            className="nav-brand"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <NavLink to="/" className="brand-link"> {/* Changed to NavLink */}
              <motion.img
                src={Doctor}
                alt="Company Logo"
                className="nav-logo"
                whileHover={{ rotate: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.span
                className="brand-name"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Health Care
              </motion.span>
            </NavLink>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-center">
          {navLinks.map((link) => (
            <motion.div
              key={link.id}
              className="nav-link-wrapper"
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <NavLink // Changed to NavLink
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} // Add active class
                onClick={() => setMenuOpen(false)} // Close mobile menu if desktop link is clicked (though not visible)
              >
                {link.name}
              </NavLink>
              <AnimatePresence>
                {(hoveredLink === link.id || // Show on hover OR
                  window.location.pathname === link.path) && ( // Show if path matches current URL
                  <motion.div
                    className="link-underline"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                    layoutId="underline"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="nav-right">
          <motion.button
            className="nav-btn signin"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 5px 15px rgba(58, 134, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleAuthClick('login')}
          >
            <FaUser className="btn-icon" />
            Sign In
          </motion.button>
          <motion.button
            className="nav-btn emergency"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 5px 15px rgba(255, 59, 48, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEmergencyClick}
          >
            <FaPhoneAlt className="btn-icon" />
            Emergency
          </motion.button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <motion.button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? (
            <FaTimes className="toggle-icon" />
          ) : (
            <FaBars className="toggle-icon" />
          )}
        </motion.button>

        {/* Mobile Menu (Conditionally Rendered with AnimatePresence) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-nav-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="mobile-nav-links">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.id}
                    className="mobile-nav-link-item"
                    variants={menuItemVariants}
                    onClick={() => setMenuOpen(false)} // Close menu on link click
                  >
                    <NavLink // Changed to NavLink
                      to={link.path}
                      className={({ isActive }) => `mobile-nav-link ${isActive ? 'active-mobile' : ''}`} // Add active class for mobile
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              <div className="mobile-nav-buttons">
  <button
    className="nav-btn signin glow-pulse"
    onClick={() => handleAuthClick('login')}
  >
    <FaUser className="btn-icon" />
    Sign In
  </button>
  <button
    className="nav-btn emergency glow-pulse-delay"
    onClick={handleEmergencyClick}
  >
    <FaPhoneAlt className="btn-icon" />
    Emergency
  </button>
</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AuthPopup
        show={showAuthPopup}
        onClose={() => setShowAuthPopup(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;