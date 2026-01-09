import './OurCreations.css';
import img1 from '../assets/Screenshot 2026-01-09 122545.png';
import img2 from '../assets/Screenshot 2026-01-09 122602.png';
import img3 from '../assets/Screenshot 2026-01-09 122614.png';
import img4 from '../assets/Screenshot 2026-01-09 122636.png';
import img5 from '../assets/Screenshot 2026-01-09 122701.png';
import img6 from '../assets/Screenshot 2026-01-09 122821.png';

function OurCreations() {
  const creations = [
    { id: 1, image: img1, alt: 'Cake Creation 1' },
    { id: 2, image: img2, alt: 'Cake Creation 2' },
    { id: 3, image: img3, alt: 'Cake Creation 3' },
    { id: 4, image: img4, alt: 'Cake Creation 4' },
    { id: 5, image: img5, alt: 'Cake Creation 5' },
    { id: 6, image: img6, alt: 'Cake Creation 6' },
  ];

  return (
    <div className="our-creations-page">
      <div className="our-creations-header">
        <h1>Our Creations</h1>
        <p>A glimpse of our delicious handcrafted cakes</p>
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {creations.map((creation) => (
            <div key={creation.id} className="gallery-item">
              <img src={creation.image} alt={creation.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCreations;
