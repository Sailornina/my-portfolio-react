import React from "react";
import '../styles/styles.scss';

function Contact() {
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
      <form name="simple-contact-form" data-netlify="true" data-netlify-honeypot="bot-field" className="contact-form">
        <h2 className="title-form">Hire me!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="info-contact-form">
          <label htmlFor="name">
            Name
          </label>
          <imput
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