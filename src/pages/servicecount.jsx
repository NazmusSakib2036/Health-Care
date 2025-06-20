import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/servicecount.css';

const MedicalServices = () => {
  const [counted, setCounted] = useState(false);
  const sectionRef = useRef(null);

  // Animation values
  const stats = [
    { id: 1, end: 150, text: "Total Doctors", plus: true },
    { id: 2, end: 500, text: "Total Reviews", plus: true },
    { id: 3, end: 2000, text: "Patients", plus: true },
    { id: 4, end: 400, text: "Total Staff", plus: true }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !counted) {
            setCounted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [counted]);

  return (
    <section className="medical-services" ref={sectionRef}>
      <div className="medical-services-container">
        <div className="medical-services-content">
          <h2 className="section-title">We Provide Best Medical Services</h2>
          <p className="section-description">
            Our platform connects you with verified, experienced doctors across various specialties – all at your convenience.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCounter 
              key={stat.id}
              end={stat.end} 
              text={stat.text} 
              plus={stat.plus} 
              counted={counted} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({ end, text, plus, counted }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // animation duration in ms
  const increment = end / (duration / 16); // 60fps

  useEffect(() => {
    if (!counted) return;

    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
      } else {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [counted, end, increment]);

  return (
    <div className="stat-card">
      <div className="stat-number">
        {count}{plus && "+"}
      </div>
      <div className="stat-text">{text}</div>
    </div>
  );
};

export default MedicalServices;