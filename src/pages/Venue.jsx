import React from 'react';
import '../styles/Venue.css';

const Venue = () => {
  return (
    <div className="festival-container">
      <header className="festival-header">
        <img src="https://makalukkaga.mpeoplesnet.com/imagesebf/img-9.png" alt="Tamil Nadu Govt Logo" className="logovenue" />
        <div>
          <h2 className='venuehead'>தமிழ்நாடு அரசு</h2>
          <h3 className='venuesubhead'>மக்கள் சிந்தனைப் பேரவை</h3>
        </div>
        <img src="https://makalukkaga.mpeoplesnet.com/imagesebf/mainlogo.png" alt="Peravai Logo" className="logovenue" />
      </header>

      <div className="festival-content">
        <p className="subtitle">இணைந்து நடத்தும்</p>
        <h1 className="main-title">21 ஆம் ஆண்டு<br />ஈரோடு புத்தகத் திருவிழா 2025</h1>

        <div className="details">
          <p><strong>நாள்:</strong> ஆகஸ்ட் 1 முதல் 12 வரை</p>
          <p><strong>இடம்:</strong> சிக்கையா நாயக்கர் கல்லூரி மைதானம், ஈரோடு</p>
        </div>

        <p className="motto">
          அனைவரும் வருக! ஆவலுடன் வருக! பயன் பெறுக!
        </p>

        <footer className="footer-note">
          மக்கள் சிந்தனைப் பேரவை, ஈரோடு
        </footer>
      </div>
    </div>
  );
};

export default Venue;
