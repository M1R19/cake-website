import { useState, useEffect } from 'react';
import './StartupWindow.css';
import logo from '../pages/chimu_cakes.png';

function StartupWindow({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete animation and unmount after 3 seconds
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`startup-window ${fadeOut ? 'fade-out' : ''}`}>
      <div className="startup-content">
        <div className="logo-container">
          <img src={logo} alt="Chimu Cakes" className="startup-logo" />
        </div>
        <h1 className="startup-title">Chimu Cakes</h1>
        <p className="startup-tagline">Baking Happiness Since Day One</p>
        <div className="loading-animation">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    </div>
  );
}

export default StartupWindow;
