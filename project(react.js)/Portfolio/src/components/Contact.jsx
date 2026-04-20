import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="How can I help you?"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
