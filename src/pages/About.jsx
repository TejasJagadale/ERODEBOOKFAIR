import React from "react";
import "../styles/About.css";
import aboutImage1 from "../imagesebf/about1.jpg";
import aboutImage2 from "../imagesebf/about2.jpg";
import organizer1 from "../imagesebf/organizer1.jpg";
import organizer2 from "../imagesebf/organizer2.jpg";
import {
  FaCalendarAlt as EventIcon,
  FaBook as LibraryBooksIcon,
  FaUsers as PeopleIcon,
  FaMapMarkerAlt as LocationIcon
} from "react-icons/fa";

const About = () => {
  const stats = [
    {
      icon: <EventIcon className="stat-icon" />,
      number: "18+",
      text: "வருடங்கள்"
    },
    {
      icon: <LibraryBooksIcon className="stat-icon" />,
      number: "500+",
      text: "புத்தகங்கள்"
    },
    {
      icon: <PeopleIcon className="stat-icon" />,
      number: "50,000+",
      text: "பார்வையாளர்கள்"
    },
    {
      icon: <LocationIcon className="stat-icon" />,
      number: "100+",
      text: "ஆசிரியர்கள்"
    }
  ];

  const organizers = [
    {
      name: "டாக்டர். இராம. சுப்பிரமணியன்",
      role: "தலைவர், மக்கள் சிந்தனை பேரவை",
      avatar: organizer1,
      social: [
        { name: "Twitter", url: "#" },
        { name: "Facebook", url: "#" }
      ]
    },
    {
      name: "எஸ். கணேஷ் குமார்",
      role: "ஆயோஜகர்",
      avatar: organizer2,
      social: [
        { name: "Twitter", url: "#" },
        { name: "LinkedIn", url: "#" }
      ]
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div>
          <h1 className="about-hero-title">ஈரோடு புத்தகத் திருவிழா</h1>
          <p className="about-hero-subtitle">
            2005 முதல் அறிவு, பண்பாடு மற்றும் இலக்கியத்தை பரப்பும் ஒரு இயக்கம்
          </p>
        </div>
      </section>
      <div className="about-container1">
        {/* Introduction Section */}
        <section className="about-section fade-in">
          <h2 className="about-section-title">அறிமுகம்</h2>
          <div className="about-divider"></div>
          <div className="about-grid">
            <div className="about-grid-item">
              <p className="about-text">
                ஈரோடு புத்தகத் திருவிழா ஒரு வருடாந்திர நிகழ்வாகும். இது 2005ஆம்
                ஆண்டில் மக்கள் சிந்தனை பேரவை என்ற அமைப்பால் தொடங்கப்பட்டது.
                தமிழ்நாட்டில் நடக்கும் முக்கியமான புத்தகத் திருவிழாக்களில்
                இதுவும் ஒன்று.
              </p>
              <p className="about-text">
                புத்தகங்கள், ஆசிரியர்கள், மாணவர்கள், கல்வியாளர்கள் மற்றும்
                பொதுமக்களுக்கு இது ஓர் அறிவுத் திருவிழா. ஒவ்வொரு ஆண்டும் ஜனவரி
                மாதம் நடைபெறும் இந்த திருவிழா 10 நாட்கள் வரை நீடிக்கும்.
              </p>
            </div>
            <div className="about-grid-item">
              <div className="about-image-card hover-effect">
                <img
                  src={aboutImage1}
                  alt="ஈரோடு புத்தகத் திருவிழா"
                  className="about-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-section about-stats-section fade-in">
          <h2 className="about-section-title">எங்கள் திருவிழா எண்களில்</h2>
          <div className="about-divider"></div>
          <div className="about-stats-container">
            {stats.map((stat, index) => (
              <div className="about-stat-item stat-hover-effect" key={index}>
                <div className="about-stat-icon">{stat.icon}</div>
                <h3 className="about-stat-number">{stat.number}</h3>
                <p className="about-stat-text">{stat.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* History Section */}
        <section className="about-section fade-in">
          <h2 className="about-section-title">எங்கள் வரலாறு</h2>
          <div className="about-divider"></div>
          <div className="about-history-container">
            <div className="about-history-image">
              <div className="about-image-card hover-effect">
                <img
                  src={aboutImage2}
                  alt="ஈரோடு புத்தகத் திருவிழா வரலாறு"
                  className="about-image"
                />
              </div>
            </div>
            <div className="about-history-content">
              <p className="about-text">
                2005ஆம் ஆண்டில் சில இலக்கிய ஆர்வலர்களின் சிறிய கூட்டத்தில்
                தொடங்கப்பட்ட இந்த திருவிழா, இன்று தமிழ்நாட்டின் முன்னணி புத்தகக்
                கண்காட்சிகளில் ஒன்றாக உள்ளது.
              </p>
              <p className="about-text">
                முதல் ஆண்டில் 20 புத்தக நிலையங்கள் மற்றும் 5,000
                பார்வையாளர்களுடன் தொடங்கிய இந்த திருவிழா, இன்று 150+ புத்தக
                நிலையங்கள் மற்றும் 50,000+ பார்வையாளர்களை ஈர்க்கிறது.
              </p>
              <p className="about-text">
                2010ஆம் ஆண்டு முதல் இளஞ்சிறார் இலக்கிய மாநாடு, 2015 முதல்
                பெண்கள் எழுத்தாளர் மாநாடு போன்ற சிறப்பு நிகழ்ச்சிகளும்
                இணைக்கப்பட்டன.
              </p>
            </div>
          </div>
        </section>

        {/* Organizers Section */}
        <section className="about-section about-organizers-section fade-in">
          <h2 className="about-section-title">நிர்வாகிகள்</h2>
          <div className="about-divider"></div>
          <div className="about-organizers-grid">
            {organizers.map((organizer, index) => (
              <div
                className="about-organizer-card organizer-hover-effect"
                key={index}
              >
                <div className="about-organizer-content">
                  <div className="avatar-container">
                    <img
                      src={organizer.avatar}
                      className="about-organizer-avatar"
                      alt={organizer.name}
                    />
                    <div className="social-links">
                      {organizer.social.map((social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <h3 className="about-organizer-name">{organizer.name}</h3>
                  <p className="about-organizer-role">{organizer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta-section fade-in">
          <h2 className="about-cta-title">
            இந்த ஆண்டு புத்தகத் திருவிழாவில் பங்கேற்க விரும்புகிறீர்களா?
          </h2>
          <a className="about-cta-button" href="/contact">
            எங்களை தொடர்பு கொள்ள
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;