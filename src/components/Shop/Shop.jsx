import { useState } from 'react';
import './Shop.css';
import kadra1 from '../../assets/Artmum/kadra/500010382_18063970592319493_569529069748825977_n.jpg';
import kadra2 from '../../assets/Artmum/kadra/471139059_18048758390319493_2463748448306741143_n.jpg';
import kadra3 from '../../assets/Artmum/kadra/470816146_18048762731319493_6918352292249955877_n.jpg';
import kadra4 from '../../assets/Artmum/kadra/470794961_18048759203319493_8968263172299492815_n.jpg';
import kadra5 from '../../assets/Artmum/kadra/470686838_18048760343319493_3337941950152895491_n.jpg';
import brush1 from '../../assets/Artmum/Brush/497504662_18063688775319493_2998909560523063238_n.jpg';
import brush2 from '../../assets/Artmum/Brush/497702143_18063688685319493_7962958998639133488_n.jpg';
import brush3 from '../../assets/Artmum/Brush/497716636_18063688706319493_5912184419927974918_n.jpg';
import brush4 from '../../assets/Artmum/Brush/497859593_18063688748319493_1451404138396500638_n.jpg';
import brush5 from '../../assets/Artmum/Brush/499377438_18064188395319493_5051615203589705255_n.jpg';
import lamp1 from '../../assets/Artmum/Lampades/489844289_18060003239319493_5942422031184244566_n.jpg';
import lamp2 from '../../assets/Artmum/Lampades/487124797_18059108951319493_6378035829244724890_n.jpg';
import lamp3 from '../../assets/Artmum/Lampades/486614396_18059108990319493_7963554867145338918_n.jpg';
import lamp4 from '../../assets/Artmum/Lampades/470891739_18048764561319493_1020075058995049893_n.jpg';
import lamp5 from '../../assets/Artmum/Lampades/470816345_18048764270319493_4953422689954388779_n.jpg';
import toixo1 from '../../assets/Artmum/toixo/480426556_942870881297481_6879471551512654146_n.jpg';
import toixo2 from '../../assets/Artmum/toixo/476389915_939873604930542_527169398792698140_n.jpg';
import toixo3 from '../../assets/Artmum/toixo/471173746_18048758528319493_4086544121746046573_n.jpg';
import toixo4 from '../../assets/Artmum/toixo/471168856_18048757664319493_5889589208414191090_n.jpg';
import wish1 from '../../assets/Artmum/wish/491452858_18062319500319493_6053674194283729922_n.jpg';
import wish2 from '../../assets/Artmum/wish/491447660_18061378742319493_7198152866540933338_n.jpg';
import wish3 from '../../assets/Artmum/wish/491415734_18061378772319493_3214185843773628668_n.jpg';
import wish4 from '../../assets/Artmum/wish/490943702_18061378781319493_6796931834632792067_n.jpg';
import wish5 from '../../assets/Artmum/wish/490447871_18061378763319493_2825137921009667427_n.jpg';
import wish6 from '../../assets/Artmum/wish/474714956_18052536305319493_3428501179296912865_n.jpg';
import wish7 from '../../assets/Artmum/wish/472105697_18050971799319493_2266948486486224731_n.jpg';
import Contact from '../Contact/Contact';

const brushArtworks = [
  { id: 1, title: 'Πριγκίπισσες', image: brush1 },
  { id: 2, title: 'Tinkerbell', image: brush2 },
  { id: 3, title: 'Αυτοκίνητο & Spiderman', image: brush3 },
  { id: 4, title: 'Mulan', image: brush4 },
  { id: 5, title: 'Stitch & Angel', image: brush5 },
];

const kadraArtworks = [
  { id: 1, title: 'Dog Portrait 1', image: kadra1 },
  { id: 2, title: 'Dog Portrait 2', image: kadra2 },
  { id: 3, title: 'Dog Portrait 3', image: kadra3 },
  { id: 4, title: 'Couple Portrait', image: kadra4 },
  { id: 5, title: 'Cat Portraits', image: kadra5 },
];

const lampArtworks = [
  { id: 1, title: 'Λαμπάδα 1', image: lamp1 },
  { id: 2, title: 'Λαμπάδα 2', image: lamp2 },
  { id: 3, title: 'Λαμπάδα 3', image: lamp3 },
  { id: 4, title: 'Λαμπάδα 4', image: lamp4 },
  { id: 5, title: 'Λαμπάδα 5', image: lamp5 },
];

const toixoArtworks = [
  { id: 1, title: 'Τοιχογραφία 1', image: toixo1 },
  { id: 2, title: 'Τοιχογραφία 2', image: toixo2 },
  { id: 3, title: 'Τοιχογραφία 3', image: toixo3 },
  { id: 4, title: 'Τοιχογραφία 4', image: toixo4 },
];

const wishArtworks = [
  { id: 1, title: 'Βιβλίο Ευχών 1', image: wish1 },
  { id: 2, title: 'Βιβλίο Ευχών 2', image: wish2 },
  { id: 3, title: 'Βιβλίο Ευχών 3', image: wish3 },
  { id: 4, title: 'Βιβλίο Ευχών 4', image: wish4 },
  { id: 5, title: 'Βιβλίο Ευχών 5', image: wish5 },
  { id: 6, title: 'Βιβλίο Ευχών 6', image: wish6 },
  { id: 7, title: 'Βιβλίο Ευχών 7', image: wish7 },
];

const categories = [
  {
    id: 1,
    title: "Βιβλία ευχών",
    image: wishArtworks[0]?.image,
    description: "Μοναδικά βιβλία ευχών για βαπτίσεις και γάμους"
  },
  {
    id: 2,
    title: "Βούρτσες",
    image: brushArtworks[0]?.image,
    description: "Χειροποίητες βούρτσες για κάθε περίσταση"
  },
  {
    id: 3,
    title: "Λαμπάδες",
    image: lampArtworks[0]?.image,
    description: "Εξατομικά σχεδιασμένες λαμπάδες"
  },
  {
    id: 4,
    title: "Τοιχογραφίες/Τζαμαρίες",
    image: toixoArtworks[0]?.image,
    description: "Μαγικές τοιχογραφίες και τζαμαρίες"
  },
  {
    id: 5,
    title: "Κάδρα-Πορτρέτα",
    image: kadraArtworks[0]?.image,
    description: "Μοναδικά πορτραίτα και καδράρισμα"
  }
];

const categoryPriceRanges = {
  'Βιβλία ευχών': '80€ – 200€',
  'Βούρτσες': '15€ – 30€',
  'Λαμπάδες': '40€ – 80€',
  'Τοιχογραφίες/Τζαμαρίες': '300€ – 1200€',
  'Κάδρα-Πορτρέτα': '50€ – 400€',
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  const handleOrderClick = () => {
    setShowOrderForm(true);
  };

  const handleCloseOrderForm = () => {
    setShowOrderForm(false);
  };

  const handleImageClick = (img) => {
    setLightboxImage(img);
  };

  const handleLightboxClose = (e) => {
    if (e.target.classList.contains('lightbox-modal') || e.target.classList.contains('close-lightbox')) {
      setLightboxImage(null);
    }
  };

  // Dedicated handler for order modal overlay
  const handleOrderModalOverlay = (e) => {
    if (e.target.classList.contains('order-modal')) {
      setShowOrderForm(false);
    }
  };

  // Handle order form submit
  const handleOrderFormSubmit = (e) => {
    e.preventDefault();
    setShowOrderForm(false);
    // Optionally, show a success message here
  };

  const handleContactOpen = () => setShowContactModal(true);
  const handleContactClose = (e) => {
    if (!e || e.target.classList.contains('contact-modal') || e.target.classList.contains('close-contact-modal')) {
      setShowContactModal(false);
    }
  };

  return (
    <section className="shop" id="shop">
      <div className="shop-container">
        <h2>Κατάστημα</h2>
        
        <div className="shop-content">
          {!selectedCategory ? (
            // Show categories grid
            <div className="categories-grid">
              {categories.map(category => (
                <div 
                  key={category.id} 
                  className="category-card"
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="category-image">
                    <img src={category.image} alt={category.title} />
                  </div>
                  <div className="category-info">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show artwork for selected category
            <div className="artwork-section">
              <button className="back-btn" onClick={handleBackClick}>
                <i className="fas fa-arrow-left"></i> Επιστροφή στις Κατηγορίες
              </button>
              <h3>{selectedCategory.title}</h3>
              <div className="category-price-range">
                Τιμή: {categoryPriceRanges[selectedCategory.title]}
              </div>
              <div className="artwork-grid">
                {selectedCategory.title === 'Βιβλία ευχών' ? (
                  wishArtworks.map(art => (
                    <div key={art.id} className="artwork-item">
                      <div className="artwork-image" onClick={() => handleImageClick(art.image)} style={{cursor:'pointer'}}>
                        <img src={art.image} alt={art.title} />
                      </div>
                      <div className="artwork-info">
                        <h4>{art.title}</h4>
                      </div>
                    </div>
                  ))
                ) : selectedCategory.title === 'Βούρτσες' ? (
                  brushArtworks.map(art => (
                    <div key={art.id} className="artwork-item">
                      <div className="artwork-image" onClick={() => handleImageClick(art.image)} style={{cursor:'pointer'}}>
                        <img src={art.image} alt={art.title} />
                      </div>
                      <div className="artwork-info">
                        <h4>{art.title}</h4>
                      </div>
                    </div>
                  ))
                ) : selectedCategory.title === 'Κάδρα-Πορτρέτα' ? (
                  kadraArtworks.map(art => (
                    <div key={art.id} className="artwork-item">
                      <div className="artwork-image" onClick={() => handleImageClick(art.image)} style={{cursor:'pointer'}}>
                        <img src={art.image} alt={art.title} />
                      </div>
                      <div className="artwork-info">
                        <h4>{art.title}</h4>
                      </div>
                    </div>
                  ))
                ) : selectedCategory.title === 'Λαμπάδες' ? (
                  lampArtworks.map(art => (
                    <div key={art.id} className="artwork-item">
                      <div className="artwork-image" onClick={() => handleImageClick(art.image)} style={{cursor:'pointer'}}>
                        <img src={art.image} alt={art.title} />
                      </div>
                      <div className="artwork-info">
                        <h4>{art.title}</h4>
                      </div>
                    </div>
                  ))
                ) : selectedCategory.title === 'Τοιχογραφίες/Τζαμαρίες' ? (
                  toixoArtworks.map(art => (
                    <div key={art.id} className="artwork-item">
                      <div className="artwork-image" onClick={() => handleImageClick(art.image)} style={{cursor:'pointer'}}>
                        <img src={art.image} alt={art.title} />
                      </div>
                      <div className="artwork-info">
                        <h4>{art.title}</h4>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="coming-soon">Τα έργα θα προστεθούν σύντομα...</p>
                )}
              </div>
              <button className="order-btn" onClick={() => setShowOrderForm((prev) => !prev)}>
                {showOrderForm ? 'Κλείσιμο Φόρμας' : 'Κάντε την παραγγελία σας'}
              </button>
              {showOrderForm && (
                <div className="order-modal" onClick={handleOrderModalOverlay}>
                  <div className="order-modal-content">
                    <button className="close-modal" onClick={handleCloseOrderForm}>
                      <i className="fas fa-times"></i>
                    </button>
                    <h3>Φόρμα Παραγγελίας</h3>
                    <p className="selected-category">Κατηγορία: {selectedCategory.title}</p>
                    <form className="order-form" onSubmit={handleOrderFormSubmit}>
                      <div className="form-group">
                        <label htmlFor="order-name">Όνομα</label>
                        <input type="text" id="order-name" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="order-email">Email</label>
                        <input type="email" id="order-email" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="order-phone">Τηλέφωνο</label>
                        <input type="tel" id="order-phone" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="order-message">Μήνυμα</label>
                        <textarea id="order-message" rows="4" placeholder="Περιγράψτε τι θέλετε να παραγγείλετε..."></textarea>
                      </div>
                      <button type="submit" className="submit-order-btn">Αποστολή Παραγγελίας</button>
                    </form>
                  </div>
                </div>
              )}
              {lightboxImage && (
                <div className="lightbox-modal" onClick={handleLightboxClose}>
                  <div className="lightbox-content">
                    <img src={lightboxImage} alt="artwork large" />
                  </div>
                </div>
              )}
            </div>
          )}
          {!selectedCategory && (
            <button className="order-btn" style={{marginTop: '2rem'}} onClick={handleContactOpen}>
              Custom Order
            </button>
          )}
          {showContactModal && (
            <div className="contact-modal" onClick={handleContactClose} style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(20,10,30,0.88)',zIndex:3000,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{position:'relative',zIndex:3100}}>
                <Contact />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop; 