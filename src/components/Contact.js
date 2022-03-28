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
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <h2 className="title-form">Hire me!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="info-form">
          <label htmlFor="name">
            Name
          </label>
          <imput
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="info-form">
          <label htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="info-form">
          <label
            htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;