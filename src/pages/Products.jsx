import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Products.css';

const productsData = [
  // Regular Flavors - Bento/Half kg/1kg
  {
    id: 1,
    name: 'Chocolate',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'regular',
    image: '🍫',
    description: 'Classic chocolate cake with rich cocoa flavor',
  },
  {
    id: 2,
    name: 'Vanilla',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'regular',
    image: '🎂',
    description: 'Traditional vanilla cake with buttercream frosting',
  },
  {
    id: 3,
    name: 'Black Forest',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'regular',
    image: '🍒',
    description: 'Chocolate cake layered with cherries and whipped cream',
  },
  {
    id: 4,
    name: 'Oreo',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'regular',
    image: '🍪',
    description: 'Delicious Oreo cookies and cream cake',
  },
  {
    id: 5,
    name: 'KitKat',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'regular',
    image: '🍫',
    description: 'Chocolate cake topped with crunchy KitKat bars',
  },
  {
    id: 6,
    name: 'Coffee',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'regular',
    image: '☕',
    description: 'Rich coffee flavored cake for coffee lovers',
  },
  {
    id: 7,
    name: 'Butterscotch',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'regular',
    image: '🧈',
    description: 'Sweet butterscotch flavored cake with caramel notes',
  },
  {
    id: 8,
    name: 'Chocolate Delight',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'regular',
    image: '🍫',
    description: 'Extra chocolatey delight with multiple chocolate layers',
  },
  {
    id: 9,
    name: 'Chocolate Crunch',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'regular',
    image: '🍫',
    description: 'Chocolate cake with crunchy toppings and textures',
  },
  {
    id: 10,
    name: 'Chocolate Chips',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'regular',
    image: '🍫',
    description: 'Vanilla cake loaded with chocolate chips',
  },
  {
    id: 11,
    name: 'Paan Pasand',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'regular',
    image: '🌿',
    description: 'Unique Indian paan flavored cake',
  },

  // Fruit Flavors - Half kg/1kg prices from image
  {
    id: 12,
    name: 'Pineapple',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'fruit',
    image: '🍍',
    description: 'Refreshing pineapple cake with tangy tropical flavor',
  },
  {
    id: 13,
    name: 'Strawberry',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'fruit',
    image: '🍓',
    description: 'Fresh strawberry cake with berry compote',
  },
  {
    id: 14,
    name: 'Mango',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'fruit',
    image: '🥭',
    description: 'Tropical mango flavored cake with fresh mango pulp',
  },
  {
    id: 15,
    name: 'Kiwi',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'fruit',
    image: '🥝',
    description: 'Exotic kiwi flavored cake with tangy sweetness',
  },
  {
    id: 16,
    name: 'Blackcurrant',
    prices: { bento: 150, half: 350, oneKg: 700 },
    category: 'fruit',
    image: '🫐',
    description: 'Rich blackcurrant cake with berry layers',
  },
  {
    id: 17,
    name: 'Blueberry',
    prices: { bento: 150, half: 400, oneKg: 800 },
    category: 'fruit',
    image: '🫐',
    description: 'Fresh blueberry cake with smooth cream',
  },
  {
    id: 18,
    name: 'Custard Apple',
    prices: { bento: 150, half: 400, oneKg: 800 },
    category: 'fruit',
    image: '🍏',
    description: 'Unique custard apple flavored cake with creamy texture',
  },
  {
    id: 19,
    name: 'Mixed Fruit',
    prices: { half: 500, oneKg: 1000 },
    category: 'fruit',
    image: '🍇',
    description: 'Loaded with assorted fresh fruits and cream',
  },

  // Exotic Flavors - Half kg/1kg prices from image
  {
    id: 20,
    name: 'Rasmalai',
    prices: { half: 550, oneKg: 1050 },
    category: 'exotic',
    image: '🥛',
    description: 'Traditional Indian rasmalai flavored cake with saffron',
  },
  {
    id: 21,
    name: 'Gulab Jamun',
    prices: { half: 550, oneKg: 1050 },
    category: 'exotic',
    image: '🍯',
    description: 'Sweet gulab jamun inspired cake with rose syrup',
  },
  {
    id: 22,
    name: 'Kesar Kulfi',
    prices: { half: 550, oneKg: 1050 },
    category: 'exotic',
    image: '🍦',
    description: 'Saffron kulfi flavored cake with cardamom notes',
  },
  {
    id: 23,
    name: 'Kulfi Falooda',
    prices: { half: 550, oneKg: 1050 },
    category: 'exotic',
    image: '🍨',
    description: 'Kulfi falooda inspired cake with rose and vermicelli',
  },
  {
    id: 24,
    name: 'Rose Gulkand',
    prices: { half: 550, oneKg: 1050 },
    category: 'exotic',
    image: '🌹',
    description: 'Rose gulkand flavored cake with aromatic petals',
  },
  {
    id: 25,
    name: 'Cadbury',
    prices: { half: 550, oneKg: 1050 },
    category: 'exotic',
    image: '🍫',
    description: 'Rich Cadbury chocolate cake with dairy milk',
  },
  {
    id: 26,
    name: 'Kaju Katli',
    prices: { half: 700, oneKg: 1300 },
    category: 'exotic',
    image: '🥜',
    description: 'Cashew kaju katli flavored cake with silver leaf',
  },
  {
    id: 27,
    name: 'Moti Choor',
    prices: { half: 700, oneKg: 1300 },
    category: 'exotic',
    image: '🧡',
    description: 'Motichoor ladoo inspired cake with boondi pearls',
  },
  {
    id: 28,
    name: 'Rose Pista',
    prices: { half: 600, oneKg: 1100 },
    category: 'exotic',
    image: '🌸',
    description: 'Rose and pistachio flavored cake with nuts',
  },
  {
    id: 29,
    name: 'Rajbhog (Dry Fruits)',
    prices: { half: 750, oneKg: 1400 },
    category: 'exotic',
    image: '🥜',
    description: 'Rajbhog inspired cake loaded with premium dry fruits',
  },

  // Premium Flavors - Half kg/1kg prices from image
  {
    id: 30,
    name: 'Red Velvet',
    prices: { half: 550, oneKg: 1050 },
    category: 'premium',
    image: '❤️',
    description: 'Smooth red velvet with cream cheese frosting',
  },
  {
    id: 31,
    name: 'Chocolate Ganache',
    prices: { half: 600, oneKg: 1100 },
    category: 'premium',
    image: '🍫',
    description: 'Rich chocolate cake with smooth ganache coating',
  },
  {
    id: 32,
    name: 'Chocolate Truffle',
    prices: { half: 600, oneKg: 1100 },
    category: 'premium',
    image: '🍫',
    description: 'Decadent chocolate truffle cake with truffle layers',
  },
  {
    id: 33,
    name: 'Chocolate Mousse',
    prices: { half: 500, oneKg: 980 },
    category: 'premium',
    image: '🍫',
    description: 'Light and airy chocolate mousse cake',
  },
  {
    id: 34,
    name: 'Dutch Chocolate',
    prices: { half: 500, oneKg: 980 },
    category: 'premium',
    image: '🍫',
    description: 'Premium Dutch cocoa chocolate cake',
  },
  {
    id: 35,
    name: 'Chocolate Overload',
    prices: { half: 650, oneKg: 1250 },
    category: 'premium',
    image: '🍫',
    description: 'Ultimate chocolate experience with multiple layers',
  },
  {
    id: 36,
    name: 'Chocolate Almond',
    prices: { half: 550, oneKg: 1100 },
    category: 'premium',
    image: '🍫',
    description: 'Chocolate cake with crunchy almond bits',
  },
  {
    id: 37,
    name: 'Chocolate Hazelnut',
    prices: { half: 600, oneKg: 1100 },
    category: 'premium',
    image: '🍫',
    description: 'Chocolate and hazelnut fusion cake',
  },
  {
    id: 38,
    name: 'Nutella',
    prices: { half: 600, oneKg: 1100 },
    category: 'premium',
    image: '🍫',
    description: 'Creamy Nutella chocolate hazelnut cake',
  },
  {
    id: 39,
    name: 'Truffle Hazelnut',
    prices: { half: 650, oneKg: 1250 },
    category: 'premium',
    image: '🍫',
    description: 'Luxurious chocolate truffle with roasted hazelnuts',
  },
  {
    id: 40,
    name: 'Honey and Almond',
    prices: { half: 650, oneKg: 1250 },
    category: 'premium',
    image: '🍯',
    description: 'Sweet honey cake with crunchy almonds',
  },
];

const Products = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [addedToCart, setAddedToCart] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});

  const categories = ['all', 'regular', 'fruit', 'exotic', 'premium'];

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes({
      ...selectedSizes,
      [productId]: size
    });
  };

  const handleAddToCart = (product) => {
    const hasBento = product.prices.bento !== undefined;
    const selectedSize = selectedSizes[product.id] || 'half-kg';
    let adjustedPrice;

    if (selectedSize === 'bento' && hasBento) adjustedPrice = product.prices.bento;
    else if (selectedSize === 'half-kg') adjustedPrice = product.prices.half;
    else if (selectedSize === '1-kg') adjustedPrice = product.prices.oneKg;

    const productWithSize = {
      ...product,
      price: adjustedPrice,
      size: selectedSize,
      displaySize: selectedSize === 'bento' ? 'Bento' : selectedSize === 'half-kg' ? 'Half Kg' : '1 Kg',
      id: `${product.id}-${selectedSize}` // Unique ID for each size variant
    };

    addToCart(productWithSize);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Delicious Cakes</h1>
        <p>Choose from our selection of freshly baked cakes</p>
      </div>

      <div className="container">
        <div className="filter-section">
          <h3>Filter by Category:</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Flavors' :
                 category === 'regular' ? 'Regular Flavors' :
                 category === 'fruit' ? 'Fruit Flavors' :
                 category === 'exotic' ? 'Exotic Flavors' :
                 'Premium Flavors'}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => {

            const hasBento = product.prices.bento !== undefined;
            const selectedSize = selectedSizes[product.id] || 'half-kg';
            let displayPrice;
            if (selectedSize === 'bento' && hasBento) displayPrice = product.prices.bento;
            else if (selectedSize === 'half-kg') displayPrice = product.prices.half;
            else if (selectedSize === '1-kg') displayPrice = product.prices.oneKg;

            return (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-size-selector">
                  <label htmlFor={`size-${product.id}`}>Size:</label>
                  <select
                    id={`size-${product.id}`}
                    value={selectedSize}
                    onChange={(e) => handleSizeChange(product.id, e.target.value)}
                    className="size-dropdown"
                  >
                    {hasBento && <option value="bento">Bento (₹{product.prices.bento})</option>}
                    <option value="half-kg">Half Kg (₹{product.prices.half})</option>
                    <option value="1-kg">1 Kg (₹{product.prices.oneKg})</option>
                  </select>
                </div>
                <div className="product-footer">
                  <span className="product-price">₹{displayPrice}</span>
                  <button
                    className={`add-to-cart-btn ${addedToCart === product.id ? 'added' : ''}`}
                    onClick={() => handleAddToCart(product)}
                  >
                    {addedToCart === product.id ? '✓ Added!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
