import { useState, useEffect } from 'react';
import './MyWork.css';
import image1 from '../../assets/bear.jpg';
import image2 from '../../assets/room.jpg';
import image3 from '../../assets/santa.jpg';
import image4 from '../../assets/truck.jpg';
import image5 from '../../assets/fairy.jpg';

const MyWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const artworkItems = [
    {
      id: 1,
      title: "Αρκούδος",
      description: "Χειροποίητα προσκλήσεις με σχέδια και χρώματα της επιλογής σας",
      image: image1,
      category: "Προσκλήσεις"
    },
    {
      id: 2,
      title: "Δάδος",
      description: "Καταγράφοντας την ουσία της φυσικής ομορφιάς",
      image: image2,
      category: "Παιδικά Δωμάτια"
    },
    {
      id: 3,
      title: "Χριστούγεννα",
      description: "Θεματίκα σχέδια για κάθε κατάστημα",
      image: image3,
      category: "Μαγαζιά"
    },
    {
      id: 1,
      title: "Αφηρημένα Όνειρα",
      description: "Ένα ταξίδι μέσα από χρώματα και συναισθήματα",
      image: image4,
      category: "Ψηφιακή Τέχνη"
    },
    {
      id: 1,
      title: "Αφηρημένα Όνειρα",
      description: "Ένα ταξίδι μέσα από χρώματα και συναισθήματα",
      image: image5,
      category: "Ψηφιακή Τέχνη"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % artworkItems.length);
    }, 5000);

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
                  Δείτε Περισσότερα
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
