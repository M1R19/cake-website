import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="not-found-icon">🎂</div>
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>Looks like this cake got eaten! The page you're looking for doesn't exist.</p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link to="/products" className="btn btn-secondary">
            Browse Cakes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
