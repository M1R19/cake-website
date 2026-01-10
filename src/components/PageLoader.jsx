import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PageLoader.css';

const PageLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="page-loader">
      <div className="loader-spinner">
        <div className="spinner-ring"></div>
        <span className="loader-icon">🎂</span>
      </div>
    </div>
  );
};

export default PageLoader;
