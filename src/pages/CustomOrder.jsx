import { useState } from 'react';
import './CustomOrder.css';

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cakeSize: '',
    cakeShape: '',
    flavor: '',
    filling: '',
    frosting: '',
    theme: '',
    colors: '',
    servings: '',
    deliveryDate: '',
    budget: '',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        cakeSize: '',
        cakeShape: '',
        flavor: '',
        filling: '',
        frosting: '',
        theme: '',
        colors: '',
        servings: '',
        deliveryDate: '',
        budget: '',
        specialRequests: '',
      });
    }, 4000);
  };

  if (submitted) {
    return (
      <div className="custom-order-page">
        <div className="container">
          <div className="order-success">
            <div className="success-icon">✓</div>
            <h2>Custom Order Request Received!</h2>
            <p>Thank you for your custom cake order. Our team will review your requirements and contact you within 24 hours to discuss the details and provide a quote.</p>
            <p className="order-details">We'll send a confirmation email to <strong>{formData.email}</strong></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="custom-order-page">
      <div className="custom-order-header">
        <h1>Custom Cake Order</h1>
        <p>Design your dream cake - We'll make it happen!</p>
      </div>

      <div className="container">
        <div className="custom-order-intro">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Fill the Form</h3>
              <p>Tell us about your dream cake</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Get a Quote</h3>
              <p>We'll contact you within 24 hours</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Approve Design</h3>
              <p>Review and approve the design</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>We Bake & Deliver</h3>
              <p>Your custom cake is delivered</p>
            </div>
          </div>
        </div>

        <form className="custom-order-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Your Information</h2>
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Cake Specifications</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Cake Size *</label>
                <select name="cakeSize" value={formData.cakeSize} onChange={handleChange} required>
                  <option value="">Select Size</option>
                  <option value="6-inch">6 inch (Serves 8-10)</option>
                  <option value="8-inch">8 inch (Serves 12-16)</option>
                  <option value="10-inch">10 inch (Serves 20-25)</option>
                  <option value="12-inch">12 inch (Serves 30-35)</option>
                  <option value="multi-tier">Multi-Tier</option>
                </select>
              </div>
              <div className="form-group">
                <label>Cake Shape *</label>
                <select name="cakeShape" value={formData.cakeShape} onChange={handleChange} required>
                  <option value="">Select Shape</option>
                  <option value="round">Round</option>
                  <option value="square">Square</option>
                  <option value="rectangle">Rectangle</option>
                  <option value="heart">Heart</option>
                  <option value="custom">Custom Shape</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Cake Flavor *</label>
                <select name="flavor" value={formData.flavor} onChange={handleChange} required>
                  <option value="">Select Flavor</option>
                  <option value="chocolate">Chocolate</option>
                  <option value="vanilla">Vanilla</option>
                  <option value="red-velvet">Red Velvet</option>
                  <option value="strawberry">Strawberry</option>
                  <option value="lemon">Lemon</option>
                  <option value="carrot">Carrot</option>
                  <option value="custom">Other (specify in notes)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Filling</label>
                <select name="filling" value={formData.filling} onChange={handleChange}>
                  <option value="">Select Filling</option>
                  <option value="buttercream">Buttercream</option>
                  <option value="cream-cheese">Cream Cheese</option>
                  <option value="whipped-cream">Whipped Cream</option>
                  <option value="fruit">Fruit Filling</option>
                  <option value="chocolate-ganache">Chocolate Ganache</option>
                  <option value="none">No Filling</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Frosting Type *</label>
              <select name="frosting" value={formData.frosting} onChange={handleChange} required>
                <option value="">Select Frosting</option>
                <option value="buttercream">Buttercream</option>
                <option value="fondant">Fondant</option>
                <option value="whipped">Whipped Cream</option>
                <option value="cream-cheese">Cream Cheese</option>
                <option value="ganache">Chocolate Ganache</option>
              </select>
            </div>

            <div className="form-group">
              <label>Number of Servings *</label>
              <input
                type="number"
                name="servings"
                value={formData.servings}
                onChange={handleChange}
                min="1"
                placeholder="e.g., 25"
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Design & Theme</h2>
            <div className="form-group">
              <label>Theme/Occasion *</label>
              <input
                type="text"
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                placeholder="e.g., Birthday, Wedding, Anniversary, Baby Shower"
                required
              />
            </div>
            <div className="form-group">
              <label>Color Scheme</label>
              <input
                type="text"
                name="colors"
                value={formData.colors}
                onChange={handleChange}
                placeholder="e.g., Pink and Gold, Blue and White"
              />
            </div>
            <div className="form-group">
              <label>Special Requests & Design Details</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="5"
                placeholder="Please describe your vision for the cake... Include any specific decorations, text, characters, or design elements you'd like."
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <h2>Delivery & Budget</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Delivery Date *</label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  min={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  required
                />
                <small>Custom cakes require at least 3 days notice</small>
              </div>
              <div className="form-group">
                <label>Budget Range</label>
                <select name="budget" value={formData.budget} onChange={handleChange}>
                  <option value="">Select Budget</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200-300">$200 - $300</option>
                  <option value="300+">$300+</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block btn-large">
            Submit Custom Order Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomOrder;
