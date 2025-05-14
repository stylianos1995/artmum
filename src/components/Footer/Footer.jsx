import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const socialLinks = [
    {
      platform: 'Instagram',
      handle: '@artmum',
      url: 'https://instagram.com/artmum',
      icon: 'fab fa-instagram'
    },
    {
      platform: 'Facebook',
      handle: '@artmum',
      url: 'https://facebook.com/artmum',
      icon: 'fab fa-facebook'
    },
    {
      platform: 'TikTok',
      handle: '@artmum',
      url: 'https://tiktok.com/@artmum',
      icon: 'fab fa-tiktok'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 2000);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ArtMum</h3>
          <p>Creating unique artistic experiences through various mediums. Let's bring your vision to life.</p>
        </div>

        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="social-links">
            {socialLinks.map((social) => (
              <div key={social.platform} className="social-item">
                <span className="social-label">{social.platform}</span>
                <div className="social-value">
                  <span>{social.handle}</span>
                  <i 
                    className={`${social.icon} social-icon`}
                    onClick={() => copyToClipboard(social.handle)}
                    title={`Copy ${social.platform} handle`}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>
              <i className="fas fa-envelope"></i>
              <span>artmum@email.com</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+1 234 567 890</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>City, Country</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to receive updates on new artwork and exhibitions.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} ArtMum. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      {showCopyMessage && (
        <div className="copy-message">
          Copied to clipboard!
        </div>
      )}
    </footer>
  );
};

export default Footer;
