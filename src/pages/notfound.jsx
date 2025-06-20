import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/notfound.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="magic-container">
      <div className="magic-scene">
        <div className="magic-404">404</div>
        <div className="magic-text">Oops! Page Not Found</div>
        <div className="magic-subtext">The page you're looking for has disappeared into the magical void!</div>
        
        <div className="magic-elements">
          <div className="magic-crystal magic-crystal-1"></div>
          <div className="magic-crystal magic-crystal-2"></div>
          <div className="magic-crystal magic-crystal-3"></div>
          <div className="magic-sparkle magic-sparkle-1"></div>
          <div className="magic-sparkle magic-sparkle-2"></div>
          <div className="magic-sparkle magic-sparkle-3"></div>
          <div className="magic-wand"></div>
          <div className="magic-hat"></div>
        </div>

        <button 
          className="magic-button"
          onClick={() => navigate('/')}
        >
          Back to homepage
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;