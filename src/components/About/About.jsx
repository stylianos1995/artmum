import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Σχετικά με εμένα</h2>
          <div className="about-text">
            <p>
              Καλώς ήρθατε στο καλλιτεχνικό μου ταξίδι. Είμαι μια παθιασμένη δημιουργός αφιερωμένη στη δημιουργία μοναδικών έργων μέσα από διάφορα μέσα. Με υπόβαθρο στην [Το Υπόβαθρό σας], συνδυάζω παραδοσιακές τεχνικές με σύγχρονες καινοτομίες για να δημιουργήσω έργα που προκαλούν συναισθήματα και νόημα.
            </p>
            <p>
              Η δουλειά μου εμπνέεται από [Η Έμπνευσή σας], και προσπαθώ να καταγράψω την ουσία της [Καλλιτεχνικής σας Εστίασης] σε κάθε έργο. Είτε μέσω ψηφιακής τέχνης, φωτογραφίας ή μικτής τεχνικής, στοχεύω στη δημιουργία εμπειριών που συνδέονται με τους θεατές σε ένα βαθύτερο επίπεδο.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Έργα</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Εκθέσεις</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Ευχαριστημένοι Πελάτες</span>
            </div>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Εξειδίκευση</span>
              <span className="detail-value">Ψηφιακή Τέχνη & Φωτογραφία</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Εμπειρία</span>
              <span className="detail-value">5+ Χρόνια</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Τοποθεσία</span>
              <span className="detail-value">Πόλη, Χώρα</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 