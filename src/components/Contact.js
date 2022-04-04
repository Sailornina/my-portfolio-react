import React, { useState } from 'react';
import '../styles/main.scss';

function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    });

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData)
  
  };


  return (
    <section id="contact">
      <div className="contact-me">
        <h1>Contact me</h1>
        <div className="map-data">
          <iframe
            title="stockholm"
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=stockholm&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
      </div>
      <form onSubmit={handleSubmit} name="simple-contact-form" data-netlify="true" data-netlify-honeypot="bot-field" className="contact-form">
        <h2 className="title-form">Hire me!</h2>
        <p>Here is my contact information, in case you want to have some coffee and discuss any of my projects.</p>
        <div className="info-contact-form">
          <label htmlFor="name">
            Name
          </label>
          <input
           onChange={(e) => setFormData({...formData, name: e.target.value})}
            value={formData.name}
            type="text"
            id="name"
            name="name"
            className="form-control"
          />
        </div>
        <div className="info-contact-form">
          <label htmlFor="email">
            Email
          </label>
          <input
          onChange={(e) => setFormData({...formData, email: e.target.value})}
            value={formData.email}
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className="info-contact-form">
          <label
            htmlFor="message">
            Message
          </label>
          <textarea
          onChange={(e) => setFormData({...formData, message: e.target.value})}
            value={formData.message}
            id="message"
            name="message"
            className="form-control"
          />
        </div>
        <button
          type="submit" className="button">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;