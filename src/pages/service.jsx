// Services.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/service.css';
import { FaStethoscope, FaBaby, FaHeartbeat, FaAllergies, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "General Medicine",
      icon: <FaStethoscope className="service-icon-svg" />,
      description: "Comprehensive care for adults with acute and chronic illnesses",
      color: "#3a86ff",
      details: "Our General Medicine department provides complete healthcare for adults, focusing on prevention, diagnosis, and treatment of various conditions. Our board-certified physicians offer personalized care plans tailored to your specific health needs."
    },
    {
      title: "Pediatrics",
      icon: <FaBaby className="service-icon-svg" />,
      description: "Specialized care for infants, children, and adolescents",
      color: "#4cc9f0",
      details: "Our Pediatric specialists provide compassionate care for children from birth through adolescence. We offer well-child visits, immunizations, sick visits, and management of chronic conditions in a child-friendly environment."
    },
    {
      title: "Cardiology",
      icon: <FaHeartbeat className="service-icon-svg" />,
      description: "Expert diagnosis and treatment for heart conditions",
      color: "#f72585",
      details: "Our Cardiology team uses state-of-the-art technology to diagnose and treat heart conditions. Services include echocardiograms, stress tests, cardiac rehabilitation, and preventive cardiology programs."
    },
    {
      title: "Dermatology",
      icon: <FaAllergies className="service-icon-svg" />,
      description: "Skin care and treatment for all dermatological conditions",
      color: "#7209b7",
      details: "Our Dermatology department offers comprehensive skin care services including treatment for acne, eczema, psoriasis, skin cancer screenings, and cosmetic dermatology procedures."
    }
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null); // Clear selected service when modal closes
  };

  return (
    <section className="services-section">
      {/* Floating background circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="floating-circle"
          initial={{
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            x: Math.sin(i) * 50,
            y: Math.cos(i) * 50
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          style={{
            left: `${10 + (i * 10)}%`,
            top: `${10 + (i * 5)}%`,
            background: `rgba(${Math.random() * 100}, ${Math.random() * 100}, 255, 0.1)`
          }}
        />
      ))}

      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Specialized Services</h2>
          <p className="section-subtitle">Premium healthcare services tailored to your needs</p>
          <div className="title-decoration"></div>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -15,
                boxShadow: `0 20px 40px rgba(0, 0, 0, 0.1)`
              }}
              style={{
                '--service-color': service.color
              }}
            >
              <div className="service-icon-container">
                <motion.div
                  className="service-icon-bg"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <motion.button
                className="service-button"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: service.color,
                  color: 'white'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
                onClick={() => handleLearnMore(service)}
              >
                Learn More
                <motion.span
                  className="button-arrow"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  →
                </motion.span>
              </motion.button>

              <motion.div
                className="service-card-decoration"
                animate={{
                  rotate: [0, 360],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 15 + index * 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for service details */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            className="service-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="service-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ borderTop: `5px solid ${selectedService.color}` }}
            >
              <button className="close-modal" onClick={closeModal}>
                <FaTimes />
              </button>

              <div className="modal-header">
                <div className="modal-icon" style={{ color: selectedService.color }}>
                  {selectedService.icon}
                </div>
                <h3>{selectedService.title}</h3>
              </div>

              <div className="modal-content">
                <p>{selectedService.details}</p>

                <div className="modal-features">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>Board-certified specialists</li>
                    <li>State-of-the-art facilities</li>
                    <li>Personalized treatment plans</li>
                    <li>Compassionate care</li>
                  </ul>
                </div>

                <Link to="/booking" className="modal-cta" style={{ backgroundColor: selectedService.color }}>
                  Book an Appointment
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;