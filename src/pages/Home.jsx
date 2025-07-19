import React, { useState } from "react";
import "../styles/Home.css";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const accordionData = [
    {
      title: "புத்தக கண்காட்சி 2025",
      images: [
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2024/2.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2024/3.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2024/4.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2024/5.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2024/6.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2024/7.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/2024/8.JPG"
      ],
      description: (
        <>
          <p>
            2025 ஆம் ஆண்டு ஈரோடு புத்தக கண்காட்சி, தமிழ்நாட்டின் மிகப்பெரிய
            புத்தக விழாவாக ஆகஸ்ட் 15 முதல் 25 வரை நடைபெற உள்ளது. இந்த 10 நாள்
            நிகழ்ச்சியில் 500க்கும் மேற்பட்ட புத்தக கடைகள், 50க்கும் மேற்பட்ட
            வெளியீட்டாளர்கள் மற்றும் 100க்கும் மேற்பட்ட எழுத்தாளர்கள்
            பங்கேற்கின்றனர்.
          </p>
          <p>
            <strong>சிறப்பம்சங்கள்:</strong>
          </p>
          <ul>
            <li>தினசரி எழுத்தாளர் சந்திப்புகள் மற்றும் வாசகர் உரையாடல்கள்</li>
            <li>இலவச குழந்தைகள் படைப்பாற்றல் முகாம்</li>
            <li>அரிய புத்தகங்களுக்கான சிறப்பு கண்காட்சி</li>
            <li>மாணவர்களுக்கான சிறப்பு தள்ளுபடி</li>
          </ul>
          <p>நிகழ்ச்சி நேரம்: காலை 10:00 முதல் இரவு 8:00 மணி வரை</p>
        </>
      )
    },
    {
      title: "எழுத்தாளர் சந்திப்பு",
      images: [
        "https://makalukkaga.mpeoplesnet.com/imagesebf/SANDIPU/1.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/SANDIPU/2.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/SANDIPU/3.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/SANDIPU/4.jpg",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/SANDIPU/5.jpg",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/SANDIPU/8.JPG"
      ],
      description: (
        <>
          <p>
            புகழ்பெற்ற தமிழ் எழுத்தாளர்களுடனான நேரடி உரையாடல் நிகழ்ச்சிகள். இந்த
            ஆண்டு சிறப்பாக பிரபல எழுத்தாளர்கள் சு.ராமகிருஷ்ணன், பூமணி, ஜெயமோகன்
            ஆகியோர் கலந்து கொள்கின்றனர்.
          </p>

          <p>
            <strong>முக்கிய நிகழ்ச்சிகள்:</strong>
          </p>
          <ul>
            <li>எழுத்தாளர்களுடனான திறந்த மன்றம் (ஆகஸ்ட் 18, மாலை 4:00 மணி)</li>
            <li>புதிய எழுத்தாளர்களுக்கான வழிகாட்டி அமர்வு</li>
            <li>புத்தக கையெழுத்து விழா</li>
            <li>எழுத்து பட்டறை மற்றும் படைப்பாற்றல் வகுப்புகள்</li>
          </ul>

          <p>
            <strong>நுழைவு கட்டணம்:</strong> இலவசம் (முன்பதிவு அவசியம்)
          </p>
        </>
      )
    },
    {
      title: "கலாச்சார நிகழ்ச்சிகள்",
      images: [
        "https://makalukkaga.mpeoplesnet.com/imagesebf/CULTURE/1.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/CULTURE/2.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/CULTURE/3.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/CULTURE/4.JPG",
        "https://makalukkaga.mpeoplesnet.com/imagesebf/CULTURE/5.JPG"
      ],
      description: (
        <>
          <p>
            புத்தக கண்காட்சியின் ஒருங்கிணைந்த பகுதியாக தினசரி கலாச்சார
            நிகழ்ச்சிகள் நடைபெறுகின்றன. மாணவர்கள் மற்றும் கலாச்சார குழுக்களின்
            அருமையான நிகழ்ச்சிகள் இடம்பெறுகின்றன.
          </p>

          <p>
            <strong>நிகழ்ச்சி அட்டவணை:</strong>
          </p>
          <ul>
            <li>பாரம்பரிய நடனங்கள் (பாரதநாட்டியம், கரகாட்டம்)</li>
            <li>நாடகங்கள் மற்றும் நாடக அரங்குகள்</li>
            <li>இசை நிகழ்ச்சிகள் (கர்நாடக, பாலகல்பம்)</li>
            <li>கவிதை வாசிப்பு மற்றும் கதை சொல்லும் நிகழ்ச்சிகள்</li>
          </ul>

          <p>
            <strong>சிறப்பு நிகழ்ச்சி:</strong> ஆகஸ்ட் 22 மாலை 6:00 மணிக்கு
            "தமிழ் இலக்கியத்தில் பெண்கள்" என்ற தலைப்பில் கலந்துரையாடல்
          </p>
        </>
      )
    }
  ];

  const cardData = [
    {
      title: "விருது வழங்கல்",
      image: "https://makalukkaga.mpeoplesnet.com/imagesebf/1.JPG",
      description: "ஜி.டி. நாயுடு இளம் விஞ்ஞானி விருது வழங்கும் விழா",
      buttonText: "மேலும் தகவல்"
    },
    {
      title: "குழந்தைகள் மன்றம்",
      image: "https://makalukkaga.mpeoplesnet.com/imagesebf/2.JPG",
      description: "இளம் வயது குழந்தைகளுக்கான படைப்பாற்றல் முகாம்",
      buttonText: "பங்குபெற"
    },
    {
      title: "வாசகர் சந்திப்பு",
      image: "https://makalukkaga.mpeoplesnet.com/imagesebf/DSC_3386.JPG",
      description: "பிரபல எழுத்தாளர்களுடன் வாசகர்களின் நேரடி சந்திப்பு",
      buttonText: "பதிவு செய்க"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="bg-slide bg-1"></div>
        <div className="bg-slide bg-2"></div>
        <div className="bg-slide bg-3"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">ஈரோடு புத்தகத் திருவிழா - 2025</h1>
          <p className="hero-description">
            2005 ஆகஸ்ட் முதல் நடைபெற்று வரும் ஈரோடு, தமிழ்நாட்டின்
            வருடாந்திர புத்தகக் கண்காட்சி. மக்கள் சிந்தனைப் பேரவையால்
            ஏற்பாடு செய்யப்படும் இக்கண்காட்சி மாநிலத்தின் மிகப்பெரிய
            கண்காட்சிகளில் ஒன்றாகும்.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Special Events Section */}
        <section className="section">
          <h2 className="section-title">சிறப்பு நிகழ்ச்சிகள்</h2>
          
          <div className="cards-container">
            {cardData.map((card, index) => (
              <div className="card" key={index}>
                <div className="card-image-container">
                  <img src={card.image} alt={card.title} className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <button className="card-button">{card.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Event Details Section */}
        <section className="section">
          <h2 className="section-title">நிகழ்ச்சி விவரங்கள்</h2>
          
          <div className="accordion-container">
            {accordionData.map((item, index) => (
              <div className="accordion" key={index}>
                <button 
                  className={`accordion-header ${expandedAccordion === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className="accordion-icon">{expandedAccordion === index ? '−' : '+'}</span>
                </button>
                
                <div 
                  className={`accordion-content ${expandedAccordion === index ? 'show' : ''}`}
                >
                  <div className="image-carousel">
                    {item.images.map((image, imgIndex) => (
                      <img 
                        key={imgIndex} 
                        src={image} 
                        alt={`${item.title} - Image ${imgIndex + 1}`} 
                        className="accordion-image"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  
                  <div className="accordion-description">
                    {item.description}
                  </div>
                  
                  <button className="details-button">முழு விவரங்கள்</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Preview Section */}
        <section className="section video-section">
          <h2 className="section-title">கடந்த ஆண்டு நிகழ்ச்சி முன்னோட்டம்</h2>
          
          <div className="video-poster" onClick={handleOpenModal}>
            <img src="https://makalukkaga.mpeoplesnet.com/imagesebf/ssv.png" alt="Video poster" className="video-poster-image" />
            <button className="play-button">▶</button>
          </div>
        </section>
      </div>

      {/* Video Modal */}
      {openModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <iframe
              src="https://www.youtube.com/embed/yeh69lVVH34?autoplay=1&rel=0"
              title="Erode Book Festival Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;