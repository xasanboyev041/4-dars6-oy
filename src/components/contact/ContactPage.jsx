import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <div className="contact-info">
          <h1>
            Let's talk on something <span className="highlight">great</span>{" "}
            together
          </h1>
          <p>
            <span className="icon">📧</span> andreaDesign@gmail.com
          </p>
          <p>
            <span className="icon">📞</span> +34 123 456 789
          </p>
          <p>
            <span className="icon">📍</span> 123 Street 487 House
          </p>
          <div className="social-icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Icon
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance Icon
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram Icon
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h2>I'm interested in:</h2>
          <div className="interest-buttons">
            <button>UX/UI design</button>
            <button>Web design</button>
            <button>Design system</button>
            <button>Graphic design</button>
            <button>Other</button>
          </div>
          <form>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" placeholder="Jhon Smith" />

            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@gmail.com"
            />

            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
            ></textarea>

            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
