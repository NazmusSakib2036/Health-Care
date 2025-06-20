import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaCopy } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully!', {
      position: "top-center",
      autoClose: 3000,
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-container">
      <ToastContainer />
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p className="subtitle">We're always happy to hear from you</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Our Location</h3>
              <p>123 Medical Center Drive<br />Dhaka 1212, Bangladesh</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>Phone Number</h3>
              <div className="contact-item">
                <span>+880 1313-186576</span>
                <FaCopy 
                  className="copy-icon" 
                  onClick={() => copyToClipboard('+8801313186576')} 
                />
              </div>
              <div className="contact-item">
                <span>+880 1313-186576 (Emergency)</span>
                <FaCopy 
                  className="copy-icon" 
                  onClick={() => copyToClipboard('+8801313186576')} 
                />
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email Address</h3>
              <div className="contact-item">
                <span>nazmuss024@gmail.com</span>
                <FaCopy 
                  className="copy-icon" 
                  onClick={() => copyToClipboard('nazmuss024@gmail.com')} 
                />
              </div>
              <div className="contact-item">
                <span>sakib_41240102036@nub.ac.bd</span>
                <FaCopy 
                  className="copy-icon" 
                  onClick={() => copyToClipboard('sakib_41240102036@nub.ac.bd')} 
                />
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <h3>Working Hours</h3>
              <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
              <p>Sat: 9:00 AM - 5:00 PM</p>
              <p>Sun: Emergency Only</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.9887086701065!2d90.4247745!3d23.854534699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c676fa285eaf%3A0x670bb89f05e88765!2sTaltola%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1750238094346!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;