import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/access.css';

// Added initialMode prop to control the starting form (login/signup)
const AuthPopup = ({ show, onClose, initialMode = 'login' }) => {
  // Use initialMode to set the initial state of isLogin
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    remember: false
  });
  const popupRef = useRef();

  // Reset form and mode when popup is opened or initialMode changes
  useEffect(() => {
    if (show) {
      setIsLogin(initialMode === 'login');
      setFormData({
        name: '',
        email: '',
        password: '',
        remember: false
      });
    }
  }, [show, initialMode]); // Re-run when show or initialMode changes

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (show) { // Only add listener if popup is shown
        document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose, show]); // Depend on 'show' to add/remove listener

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      remember: false
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login submitted:', formData);
      // Add your login logic here
      // For demonstration, let's just close the popup after a "successful" login
      // onClose();
    } else {
      console.log('Signup submitted:', formData);
      // Add your signup logic here
      // After successful signup, navigate to login page:
      setIsLogin(true); // <-- This is the key change: switch to login mode
      setFormData(prev => ({ // Optionally clear only the password for login readiness
        ...prev,
        password: '' // Clear password after successful signup to login next
      }));
      // You might also want to display a success message here before switching
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="auth-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            ref={popupRef}
            className="auth-popup"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button className="close-btn" onClick={onClose}>
              <MdClose size={24} />
            </button>

            <div className="auth-header">
              <h2>{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
              <p>{isLogin ? 'Login to continue' : 'Sign up to get started'}</p>
            </div>

            {/* If you want to enable these, uncomment them in CSS too */}
            {/*<div className="social-auth">
              <button className="social-btn google">
                <FaGoogle /> {isLogin ? 'Login with Google' : 'Sign up with Google'}
              </button>
              <button className="social-btn facebook">
                <FaFacebook /> {isLogin ? 'Login with Facebook' : 'Sign up with Facebook'}
              </button>
            </div>

            <div className="divider">
              <span>OR</span>
            </div>*/}

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="input-group">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {isLogin && (
                <div className="remember-forgot">
                  <label className="remember-me">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleInputChange}
                    />
                    Remember me
                  </label>
                  <a href="#forgot" className="forgot-password">
                    Forgot password?
                  </a>
                </div>
              )}

              <button type="submit" className="submit-btn">
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>

            <div className="auth-footer">
              <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button className="toggle-auth" onClick={toggleAuthMode}>
                  {isLogin ? ' Sign Up' : ' Login'}
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthPopup;