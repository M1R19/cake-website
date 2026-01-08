import { useState, useEffect } from 'react';
import './StartupPage.css';
import titleImage from './Title_page.png';

function StartupPage({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (scrolled) return;

      // Detect scroll down
      if (e.deltaY > 0 || e.type === 'touchmove') {
        setScrolled(true);
        setFadeOut(true);
        setTimeout(() => {
          if (onComplete) {
            onComplete();
          }
        }, 500);
      }
    };

    const handleKeyDown = (e) => {
      if (scrolled) return;

      // Detect down arrow, space, or page down
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setScrolled(true);
        setFadeOut(true);
        setTimeout(() => {
          if (onComplete) {
            onComplete();
          }
        }, 500);
      }
    };

    // Add event listeners
    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, scrolled]);

  return (
    <div className={`startup-page ${fadeOut ? 'fade-out' : ''}`}>
      <div className="startup-page-content">
        <img
          src={titleImage}
          alt="Chimu Cakes - Welcome"
          className="title-image"
        />
        <div className="scroll-indicator">
          <p className="scroll-text">Scroll down to enter</p>
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartupPage;
