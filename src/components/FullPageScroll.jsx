import { useState, useEffect, useRef } from 'react';
import './FullPageScroll.css';

function FullPageScroll({ children, activeSectionIndex = 0 }) {
  const [currentSection, setCurrentSection] = useState(activeSectionIndex);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionsRef = useRef([]);
  const totalSections = children.length;

  const scrollToSection = (index) => {
    if (index < 0 || index >= totalSections) return;

    setIsScrolling(true);
    setCurrentSection(index);

    sectionsRef.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Update section when activeSectionIndex prop changes
  useEffect(() => {
    if (activeSectionIndex !== currentSection && !isScrolling) {
      scrollToSection(activeSectionIndex);
    }
  }, [activeSectionIndex]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;

      if (e.deltaY > 0) {
        // Scroll down
        scrollToSection(currentSection + 1);
      } else {
        // Scroll up
        scrollToSection(currentSection - 1);
      }
    };

    const handleKeyDown = (e) => {
      if (isScrolling) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(totalSections - 1);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          scrollToSection(currentSection + 1);
        } else {
          scrollToSection(currentSection - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling, totalSections]);

  return (
    <div className="fullpage-container">
      <div className="fullpage-wrapper">
        {children.map((child, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`fullpage-section ${currentSection === index ? 'active' : ''}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="fullpage-nav">
        {children.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${currentSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default FullPageScroll;
