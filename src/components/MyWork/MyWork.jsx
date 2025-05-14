import { useState, useEffect } from 'react';
import './MyWork.css';

const MyWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const artworkItems = [
    {
      id: 1,
      title: "Abstract Dreams",
      description: "A journey through colors and emotions",
      image: "https://placehold.co/1920x1080", // Replace with your artwork
      category: "Digital Art"
    },
    {
      id: 2,
      title: "Nature's Whisper",
      description: "Capturing the essence of natural beauty",
      image: "https://placehold.co/1920x1080", // Replace with your artwork
      category: "Photography"
    },
    {
      id: 3,
      title: "Urban Stories",
      description: "City life through an artistic lens",
      image: "https://placehold.co/1920x1080", // Replace with your artwork
      category: "Mixed Media"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % artworkItems.length);
    }, 5000); // Change artwork every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % artworkItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + artworkItems.length) % artworkItems.length);
  };

  return (
    <section className="my-work" id="work">
      <div className="artwork-slideshow">
        {artworkItems.map((item, index) => (
          <div
            key={item.id}
            className={`artwork-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="slide-content">
              <div className="slide-info">
                <span className="category">{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href="#" className="see-more">
                  See More
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slide-navigation">
        <button className="nav-btn prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="slide-dots">
          {artworkItems.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button className="nav-btn next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default MyWork;
