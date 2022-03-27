import React from "react";
import '../styles/styles.scss';

function Contact() {
  return (
    <section id="contact">
      <div className="contact-me">
      <h1>Contacme</h1>
        <div className="map-data">
          <iframe
            title="stockholm"
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=stockholm&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        </div>
        <div>
          <div className="addres-contact">
            <h2>
              Addres</h2>
            <p>
              Stockholm <br />
              Sweden
            </p>
          </div>
          <div className="mail-contact">
            <div>
              <h2>Email</h2>
              <a className="mail-contact-exemple">
                sylcardozo.sc@gmail.com
              </a>
            </div>
          </div>
        </div>
    </section>

  );

}

export default Contact;