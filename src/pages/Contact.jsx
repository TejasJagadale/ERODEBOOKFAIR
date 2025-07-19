import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faComment,
  faPaperPlane,
  faBuilding,
  faMobileScreen
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    comments: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        address: "",
        email: "",
        phone: "",
        comments: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-main-title">மக்கள் சிந்தனைப் பேரவை</h1>
      </div>

      <div className="contact-content-container">
        <div className="contact-info-container">
          <div className="contact-info-card">
            <FontAwesomeIcon icon={faBuilding} className="contact-info-icon" />
            <h2 className="contact-info-title">Our Office</h2>
            <p className="contact-info-text">
              A-47, சம்பத் நகர், <br /> ஈரோடு - 638 011. <br /> தமிழ்நாடு.
              இந்தியா
            </p>
          </div>

          <div className="contact-info-card">
            {/* <FontAwesomeIcon icon={faPhone} className="contact-info-icon" /> */}
            <h2 className="contact-info-title">Contact Info</h2>
            <p className="contact-info-text">
              <div className="cnticon">
                <FontAwesomeIcon
                  icon={faMobileScreen}
                  className="contact-info-icon"
                />
                Phone: 0424 2269186
              </div>
              <div className="cnticon">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="contact-info-icon"
                />
                Email: stalin_guna@yahoo.com
              </div>
            </p>
          </div>

          <div className="contact-social-container">
            <a
              href="https://www.facebook.com/share/16gTkLiZqt/"
              className="contact-social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://x.com/Makkalsinthanai?t=FrfS33rgLjff6ZcnbYCaWg&s=08"
              className="contact-social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/makkalsinthanaiperavai?igsh=MTh4OXpsYzFidGczZQ=="
              className="contact-social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://youtube.com/@makkalsinthanaiperavai?feature=shared"
              className="contact-social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <h2 className="contact-form-title">Send us a message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-group">
              <div className="contact-input-container">
                <FontAwesomeIcon icon={faUser} className="contact-input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="பெயர் (Name)"
                  required
                />
              </div>
            </div>

            <div className="contact-form-group">
              <div className="contact-input-container">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="contact-input-icon"
                />
                <input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="முகவரி (Address)"
                  required
                />
              </div>
            </div>

            <div className="contact-form-group">
              <div className="contact-input-container">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="contact-input-icon"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="மின்னஞ்சல் (Email)"
                  required
                />
              </div>
            </div>

            <div className="contact-form-group">
              <div className="contact-input-container">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="contact-input-icon"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-input"
                  placeholder="தொலைபேசி (Phone)"
                  required
                />
              </div>
            </div>

            <div className="contact-form-group">
              <div className="contact-input-container">
                <FontAwesomeIcon
                  icon={faComment}
                  className="contact-input-icon"
                />
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="contact-textarea"
                  placeholder="கருத்துகள் (Comments)"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`contact-submit-button ${
                isSubmitting ? "contact-submit-button-disabled" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="contact-button-icon"
                  />
                  Submit
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
