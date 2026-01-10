import './About.css';
import renderImage from '../assets/render_image.png';
import CakeScene3D from '../components/CakeScene3D';
import SEO from '../components/SEO';
import '../components/CakeScene3D.css';

const About = () => {
  return (
    <div className="about-page">
      <SEO
        title="About Us"
        description="Learn about Chimu Cakes - our story, passion for baking, and commitment to creating delicious homemade cakes for every occasion."
      />
      <section className="about-header">
        <h1>About Chimu Cakes</h1>
        <p>Crafting sweet memories since day one</p>
      </section>

      <div className="container">
        <section className="about-content">
          <div className="about-story-section">
            <div className="story-image-3d">
              <CakeScene3D imageUrl={renderImage} />
              <p className="interaction-hint">Move your mouse to interact</p>
            </div>
            <div className="about-story">
              <h2>Our Story</h2>
              <p>
                Trunali's journey began in a home kitchen, where baking was more than a skill—it was a source of joy, creativity, and connection.
              </p>
              <p>
                What started as a small dream has grown into a larger vision: to build a global cake brand that finds a place in every home and every heart.
              </p>
              <p>
                At Chimu's Cake, our goal has always been simple yet meaningful—to serve delicious, high-quality cakes at a price that brings happiness without hurting your wallet. Every cake is made with care, using fresh, thoughtfully selected ingredients that truly stand out in taste and quality.
              </p>
              <p>
                Our menu offers a wide range of flavors, from rich Indian classics to beloved international favorites. Alongside our curated selection, we proudly accept custom and special requests—because your vision matters to us.
              </p>
              <p>
                Whether you visit our store or order through WhatsApp, Instagram, or our website, we promise a delightful experience from the first bite to the last.
              </p>
              <p>
                Your request is our command. We bake with love, so you can celebrate with joy.
              </p>
              <p className="bon-appetit">
                Bon Appétit! 🍰
              </p>
            </div>
          </div>

          <div className="customer-reviews">
            <h2>What Our Customers Say</h2>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"The best cake I've ever had! The chocolate truffle was absolutely divine. Will definitely order again!"</p>
                <div className="review-author">— Priya S.</div>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"Ordered a custom cake for my daughter's birthday. The design was perfect and it tasted amazing!"</p>
                <div className="review-author">— Rahul M.</div>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-text">"Fresh ingredients, beautiful presentation, and delivered on time. Chimu Cakes never disappoints!"</p>
                <div className="review-author">— Sneha K.</div>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h2>What We Stand For</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">💖</div>
                <h3>Made with Love</h3>
                <p>Every cake is baked with care and passion</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌟</div>
                <h3>Quality First</h3>
                <p>Premium ingredients for exceptional taste</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎨</div>
                <h3>Creative Designs</h3>
                <p>Unique and personalized for your occasion</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Customer Care</h3>
                <p>Your satisfaction is our priority</p>
              </div>
            </div>
          </div>

          <div className="about-services">
            <h2>Our Services</h2>
            <ul>
              <li>Custom birthday cakes</li>
              <li>Wedding and engagement cakes</li>
              <li>Baby shower cakes</li>
              <li>Bride/Groom to be celebrations</li>
              <li>Anniversary cakes</li>
              <li>Corporate event cakes</li>
              <li>Free home delivery</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
