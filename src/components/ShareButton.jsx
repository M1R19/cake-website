import { useState } from 'react';
import './ShareButton.css';

const ShareButton = ({ title, text, url, className = '' }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: title || 'Chimu Cakes',
      text: text || 'Check out these delicious cakes from Chimu Cakes!',
      url: url || window.location.href,
    };

    // Try native share first (works on mobile)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard(shareData.url);
        }
      }
    } else {
      // Fallback: copy to clipboard
      copyToClipboard(shareData.url);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    });
  };

  return (
    <button className={`share-button ${className}`} onClick={handleShare} aria-label="Share">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
      {showTooltip && <span className="share-tooltip">Link copied!</span>}
    </button>
  );
};

export default ShareButton;
