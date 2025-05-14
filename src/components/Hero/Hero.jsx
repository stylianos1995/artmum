import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Hero Background with Overlay */}
      <div className="hero-background"></div>
      
      {/* Main Hero Content */}
      <div className="hero-content">
        <div className="hero-profile">
          <div className="profile-image-container">
            <img 
              src="https://placehold.co/400x400" 
              alt="Artist Profile" 
              className="profile-image"
            />
            <div className="profile-border"></div>
          </div>
        </div>

        <div className="hero-text">
          <h1 className="hero-title">
            <span className="line">Welcome to</span>
            <span className="line">My Atelier</span>
          </h1>
          <p className="hero-subtitle">
            Where creativity meets craftsmanship
          </p>
          <div className="hero-cta">
            <a href="#work" className="cta-button">View Gallery</a>
            <a href="#contact" className="cta-button secondary">Commission Work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
