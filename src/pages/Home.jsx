import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Chimu Cakes</h1>
          <p className="hero-subtitle">
            Delicious cakes made with love, delivered to your doorstep
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Browse Cakes
            </Link>
            <Link to="/custom-order" className="btn btn-secondary">
              Order Custom Cake
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎂</div>
              <h3>Fresh Daily</h3>
              <p>All our cakes are baked fresh every day using premium ingredients</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Same-day delivery available for orders placed before 2 PM</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Custom Designs</h3>
              <p>Create your dream cake with our custom order service</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💝</div>
              <h3>Gift Options</h3>
              <p>Perfect for birthdays, anniversaries, and special occasions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Order?</h2>
          <p>Explore our delicious collection of cakes</p>
          <Link to="/products" className="btn btn-primary btn-large">
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
