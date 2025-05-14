import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Me</h2>
          <div className="about-text">
            <p>
              Welcome to my artistic journey. I am a passionate creator dedicated to bringing unique visions to life through various mediums. With a background in [Your Background], I blend traditional techniques with modern innovation to create pieces that resonate with emotion and meaning.
            </p>
            <p>
              My work is inspired by [Your Inspiration], and I strive to capture the essence of [Your Artistic Focus] in every piece. Whether it's through digital art, photography, or mixed media, I aim to create experiences that connect with viewers on a deeper level.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Artworks</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Exhibitions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Specialization</span>
              <span className="detail-value">Digital Art & Photography</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Experience</span>
              <span className="detail-value">5+ Years</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">City, Country</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 