import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    orderType: 'custom'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container single">
        <div className="contact-form">
          <h2>Παραγγελία Έργου</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Όνομα</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="orderType">Τύπος Παραγγελίας</label>
              <select
                id="orderType"
                name="orderType"
                value={formData.orderType}
                onChange={handleChange}
              >
                <option value="custom">Βιβλία ευχών</option>
                <option value="print">Βούρτσες </option>
                <option value="commission">Καδρα-Πορτραίτα</option>
                <option value="commission">Λαμπάδες</option>
                <option value="commission">Τοιχογραφίες/Τζαμαρίες</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Λεπτομέρειες Έργου</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Πείτε μας για το έργο σας..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Στείλετε Αίτηση
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
