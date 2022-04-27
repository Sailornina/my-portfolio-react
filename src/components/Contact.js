import React, { useState } from 'react';
import '../styles/main.scss';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "simple-contact-form", ...this.formData })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));


    e.preventDefault();
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-me">
          <div className="map-data">
            <iframe
              title="stockholm"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.9)" }}
              src="https://www.google.com/maps/embed/v1/place?q=stockholm&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} name="simple-contact-form" method="post" className="form-container">
        <input type="hidden" name="form-name" value="simple-contact-form" />
          <h1 className="title-form">Hire me!</h1>
          <p>Here is my contact information, in case you want to have some coffee and discuss any of my projects.</p>
          <div className="info-contact-form">
            <label htmlFor="name">
              Name
            </label>
            <input
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              value={formData.message}
              id="message"
              name="message"
              className="form-control"
            />
          </div>
          <button
            type="submit" className="button">
            Get in Touch
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;