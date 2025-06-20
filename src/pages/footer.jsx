import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/footer.css';
import companyLogo from '../assets/image/doctor.png';
import { FaFacebook, FaGithub, FaLinkedin, FaGlobe, FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation(); // Get current location object

  // Helper function to determine if a link is active based on current path
  const isActiveLink = (path, index) => {
    // Special handling for the home route to prevent it from matching all paths
    if (path === '/') {
      return location.pathname === '/';
    }
    // For other routes, check if the current path starts with the link's path
    return location.pathname.startsWith(path);
  };

  const socialLinks = [
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100058835270925',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/NazmusSakib2036',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nazmus-sakib-303345241',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      icon: <FaGlobe />,
      name: 'Portfolio',
      url: 'http://nazmussakib.me/',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
  ];

  const contactInfo = [
    { text: 'Taltola, Near Hazi-Camp, Dhaka-1230', icon: '📍' },
    { text: 'nazmuss024@gmail.com', icon: '✉️' },
    { text: '+880 1313-186576', icon: '📱' }
  ];

  return (
    <footer className="footer">
      {/* Background image with overlay */}
      <div className="footer-bg-image"></div>
      <div className="footer-bg-overlay"></div>

      {/* Animated background elements */}
      <div className="footer-bg-elements">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-circle"
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main footer content */}
      <div className="footer-container">
        {/* Brand column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="footer-brand"
        >
          <div className="logo-container">
            <img src={companyLogo} alt="Health Center Logo" className="footer-logo" />
            <h1 className="footer-brandn">Health Care</h1>
          </div>
          <p className="footer-description">
            Your trusted partner in healthcare. We provide compassionate, world-class medical services.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(58, 134, 255, 0.4)",
              backgroundColor: "#3a86ff"
            }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "rgba(58, 134, 255, 0.2)",
              boxShadow: "0 3px 10px rgba(58, 134, 255, 0.2)"
            }}
            className="newsletter-btn"
          >
            Subscribe to Newsletter
          </motion.button>
        </motion.div>

        {/* Links column with active animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="footer-links"
        >
          <h4>
            <span className="link-icon">🔗</span> Quick Links
          </h4>
          <ul>
            {/* Home Link */}
            <motion.li
              onMouseEnter={() => setHoveredLink(0)}
              onMouseLeave={() => setHoveredLink(null)}
              // Removed onClick={() => setActiveLink(0)} as active state is derived from URL
              initial={false}
            >
              <Link // Use Link from react-router-dom
                to="/"
                className={`link-content ${isActiveLink('/', 0) ? 'active' : ''}`}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="link-icon">🏠</span>
                  <span>Home</span> {/* Use span for text within Link */}
                </motion.div>
                <motion.span
                  className="active-indicator"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isActiveLink('/', 0) || hoveredLink === 0 ? 1 : 0,
                    x: isActiveLink('/', 0) || hoveredLink === 0 ? 0 : -10
                  }}
                >
                  <FaChevronRight />
                </motion.span>
              </Link>
              {isActiveLink('/', 0) && ( // Conditionally render active highlight
                <motion.div
                  className="active-highlight"
                  layoutId="footerActiveHighlight" // Unique layoutId
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.li>

            {/* Booking Link */}
            <motion.li
              onMouseEnter={() => setHoveredLink(1)}
              onMouseLeave={() => setHoveredLink(null)}
              // Removed onClick={() => setActiveLink(1)}
              initial={false}
            >
              <Link // Use Link
                to="/booking"
                className={`link-content ${isActiveLink('/booking', 1) ? 'active' : ''}`}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="link-icon">📅</span>
                  <span>Booking</span>
                </motion.div>
                <motion.span
                  className="active-indicator"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isActiveLink('/booking', 1) || hoveredLink === 1 ? 1 : 0,
                    x: isActiveLink('/booking', 1) || hoveredLink === 1 ? 0 : -10
                  }}
                >
                  <FaChevronRight />
                </motion.span>
              </Link>
              {isActiveLink('/booking', 1) && (
                <motion.div
                  className="active-highlight"
                  layoutId="footerActiveHighlight"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.li>

            {/* Blog Link */}
            <motion.li
              onMouseEnter={() => setHoveredLink(2)}
              onMouseLeave={() => setHoveredLink(null)}
              // Removed onClick={() => setActiveLink(2)}
              initial={false}
            >
              <Link // Use Link
                to="/blog"
                className={`link-content ${isActiveLink('/blog', 2) ? 'active' : ''}`}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="link-icon">📚</span>
                  <span>Blog</span>
                </motion.div>
                <motion.span
                  className="active-indicator"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isActiveLink('/blog', 2) || hoveredLink === 2 ? 1 : 0,
                    x: isActiveLink('/blog', 2) || hoveredLink === 2 ? 0 : -10
                  }}
                >
                  <FaChevronRight />
                </motion.span>
              </Link>
              {isActiveLink('/blog', 2) && (
                <motion.div
                  className="active-highlight"
                  layoutId="footerActiveHighlight"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.li>

            {/* Contact Link */}
            <motion.li
              onMouseEnter={() => setHoveredLink(3)}
              onMouseLeave={() => setHoveredLink(null)}
              // Removed onClick={() => setActiveLink(3)}
              initial={false}
            >
              <Link // Use Link
                to="/contact"
                className={`link-content ${isActiveLink('/contact', 3) ? 'active' : ''}`}
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="link-icon">📞</span>
                  <span>Contact</span>
                </motion.div>
                <motion.span
                  className="active-indicator"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isActiveLink('/contact', 3) || hoveredLink === 3 ? 1 : 0,
                    x: isActiveLink('/contact', 3) || hoveredLink === 3 ? 0 : -10
                  }}
                >
                  <FaChevronRight />
                </motion.span>
              </Link>
              {isActiveLink('/contact', 3) && (
                <motion.div
                  className="active-highlight"
                  layoutId="footerActiveHighlight"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.li>
          </ul>
        </motion.div>

        {/* Contact column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="footer-contact"
        >
          <h4>
            <span className="link-icon">📌</span> Contact Us
          </h4>
          <ul>
            {contactInfo.map((info, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="contact-icon">{info.icon}</span>
                <span>{info.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="footer-social"
        >
          <h4>
            <span className="link-icon">🌐</span> Follow Us
          </h4>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                aria-label={social.name}
                target={social.target}
                rel={social.rel}
                whileHover={{
                  y: -8,
                  scale: 1.2,
                  backgroundColor: "#3a86ff",
                  boxShadow: "0 5px 15px rgba(58, 134, 255, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  y: {
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="footer-bottom"
      >
        <div className="footer-bottom-content">
          <p> © {new Date().getFullYear()} Health Care. Created & developed by{' '}
            <a href="https://nazmussakib.me" target='_blank' rel='noopener noreferrer' className="your-link-class">
              Nazmus Sakib
            </a>
            .
          </p>
          <div className="legal-links">
            <Link to="/Privacy-Policy">Privacy Policy</Link>
            <Link to="/Terms-and-Conditions">Terms of Service</Link>
            <Link to="/Cookies">Cookies</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;