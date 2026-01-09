import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import chimuLogo from '../pages/chimu_cakes.png';
import './Navbar.css';

const Navbar = () => {
  const { getCartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={chimuLogo} alt="Chimu Cakes" className="nav-logo-img" />
          Chimu Cakes
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/our-creations" className="nav-link">Our Creations</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/custom-order" className="nav-link">Custom Order</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link cart-link">
              🛒 Cart
              {getCartCount() > 0 && (
                <span className="cart-badge">{getCartCount()}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
