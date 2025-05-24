import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const socialLinks = [
    {
      platform: 'Instagram',
      handle: '@artmum',
      url: 'https://www.instagram.com/art._.mum/',
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
      url: 'https://www.tiktok.com/@art._.mum',
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
          <p>Δημιουργώντας μοναδικές καλλιτεχνικές εμπειρίες μέσα από διάφορα μέσα. Ας δώσουμε ζωή στη δική σας όραση.</p>
        </div>

        <div className="footer-section">
          <h4>Κοινωνικά Δίκτυα</h4>
          <div className="social-links">
            {socialLinks.map((social) => (
              <div key={social.platform} className="social-item">
                <span className="social-label">{social.platform}</span>
                <div className="social-value">
                  <span>{social.handle}</span>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Μετάβαση στο ${social.platform}`}
                  >
                    <i className={`${social.icon} social-icon`}></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Στοιχεία Επικοινωνίας</h4>
          <ul className="contact-info">
            <li>
              <i className="fas fa-envelope"></i>
              <span>artmum@email.com</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+30 123 456 7890</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Πόλη, Ελλάδα</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Εγγραφείτε για να λαμβάνετε ενημερώσεις για νέα έργα και εκθέσεις.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Εισάγετε το email σας" />
            <button type="submit">Εγγραφή</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} ArtMum. Με επιφύλαξη παντός δικαιώματος.</p>
          <div className="footer-links">
            <a href="#">Πολιτική Απορρήτου</a>
            <a href="#">Όροι Χρήσης</a>
          </div>
        </div>
      </div>

      {showCopyMessage && (
        <div className="copy-message">
          Αντιγράφηκε!
        </div>
      )}
    </footer>
  );
};

export default Footer;
