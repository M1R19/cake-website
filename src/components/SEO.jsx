import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | Chimu Cakes` : 'Chimu Cakes - Delicious Homemade Cakes';

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Order delicious homemade cakes from Chimu Cakes. Fresh daily baked cakes for birthdays, weddings, and special occasions. Custom designs available!';

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title ? `${title} | Chimu Cakes` : 'Chimu Cakes';

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = description || 'Order delicious homemade cakes from Chimu Cakes.';

  }, [title, description]);

  return null;
};

export default SEO;
