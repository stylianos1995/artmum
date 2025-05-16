import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Η Τέχνη της Προσωποποίησης</h2>
          <div className="about-text">
            <p>
              Καλώς ήρθατε στον μαγικό κόσμο της προσωπικής μου τέχνης. Ειδικεύομαι στη δημιουργία μοναδικών έργων που μεταμορφώνουν χώρους και στιγμές σε αξέχαστες εμπειρίες. Από τοιχογραφίες σε καταστήματα και παιδικά δωμάτια μέχρι χειροποίητες προσκλήσεις για γάμους και βαπτίσεις, κάθε έργο μου είναι μια ιστορία που ζωγραφίζεται με αγάπη και προσοχή στη λεπτομέρεια.
            </p>
            <p>
              Η τέχνη μου φέρνει στη ζωή τις ιδέες και τα όνειρά σας, μετατρέποντάς τα σε οπτικά αριστουργήματα. Είτε πρόκειται για μια ζωηρή τοιχογραφία στο παιδικό δωμάτι που θα συνοδεύει τα όνειρα των μικρών, είτε για προσεκτικά σχεδιασμένες προσκλήσεις που θα σηματοδοτήσουν τις πιο σημαντικές στιγμές της ζωής σας, κάθε κομμάτι είναι μοναδικό και προσωπικό.
            </p>
            <p>
              Συνεργάζομαι στενά με κάθε πελάτη για να κατανοήσω τη δική του όραση και να τη μετατρέψω σε πραγματικότητα. Η ικανοποίηση σας είναι η μεγαλύτερή μου ευχαρίστηση, και η δημιουργία έργων που θα σας συνοδεύουν για χρόνια είναι η κύρια μου εστίαση.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Τοιχογραφίες</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Παιδικά Δωμάτια</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Ευχαριστημένοι Πελάτες</span>
            </div>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Ειδικότητα</span>
              <span className="detail-value">Τοιχογραφίες & Χειροποίητες Προσκλήσεις</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Εμπειρία</span>
              <span className="detail-value">5+ Χρόνια Δημιουργίας</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Υπηρεσίες</span>
              <span className="detail-value">Προσωπικές & Εταιρικές</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 