import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Chimu Cakes</h3>
            <p>Delicious cakes made with love, delivered to your doorstep.</p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/chimu_cakes_"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919764872991"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.788 30.988 12.792 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.304 22.594c-.39 1.098-1.932 2.01-3.156 2.276-.84.18-1.936.322-5.626-1.21-4.72-1.96-7.756-6.756-7.992-7.068-.226-.312-1.9-2.528-1.9-4.822s1.2-3.422 1.628-3.892c.39-.428.91-.61 1.216-.61.148 0 .28.008.4.014.428.018.644.044.926.716.352.84 1.212 2.948 1.316 3.164.106.216.212.502.072.79-.13.296-.244.428-.46.674-.216.246-.422.434-.638.7-.198.232-.42.48-.18.94.24.458 1.068 1.762 2.294 2.854 1.578 1.406 2.908 1.842 3.32 2.046.312.154.684.13.932-.13.316-.334.706-.888 1.104-1.434.282-.39.638-.44.982-.296.35.136 2.212 1.042 2.592 1.232.38.19.632.286.726.446.092.16.092.914-.298 2.01z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/our-creations">Our Creations</Link></li>
              <li><Link to="/custom-order">Custom Order</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>
              <a href="https://wa.me/919764872991" target="_blank" rel="noopener noreferrer">
                +91 97648 72991
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/chimu_cakes_" target="_blank" rel="noopener noreferrer">
                @chimu_cakes_
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Chimu Cakes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
