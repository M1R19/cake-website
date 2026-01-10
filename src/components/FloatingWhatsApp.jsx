import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const message = `Hi! I'm visiting the Chimu Cakes website and would like to know more about your cakes.`;
    const whatsappUrl = `https://wa.me/919764872991?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button className="floating-whatsapp" onClick={handleClick} aria-label="Contact us on WhatsApp">
      <svg viewBox="0 0 32 32" className="whatsapp-icon">
        <path
          fill="currentColor"
          d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.788 30.988 12.792 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.304 22.594c-.39 1.098-1.932 2.01-3.156 2.276-.84.18-1.936.322-5.626-1.21-4.72-1.96-7.756-6.756-7.992-7.068-.226-.312-1.9-2.528-1.9-4.822s1.2-3.422 1.628-3.892c.39-.428.91-.61 1.216-.61.148 0 .28.008.4.014.428.018.644.044.926.716.352.84 1.212 2.948 1.316 3.164.106.216.212.502.072.79-.13.296-.244.428-.46.674-.216.246-.422.434-.638.7-.198.232-.42.48-.18.94.24.458 1.068 1.762 2.294 2.854 1.578 1.406 2.908 1.842 3.32 2.046.312.154.684.13.932-.13.316-.334.706-.888 1.104-1.434.282-.39.638-.44.982-.296.35.136 2.212 1.042 2.592 1.232.38.19.632.286.726.446.092.16.092.914-.298 2.01z"
        />
      </svg>
      <span className="whatsapp-tooltip">Chat with us!</span>
    </button>
  );
};

export default FloatingWhatsApp;
