import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  faEnvelopeOpen,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nus0ku8",
        "template_cmo50af",
        form.current,
        "fBVnz9RFgmFeuwhVQ",
        {}
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          toast.error("Failed!");
        }
      );
    e.target.reset();
  };

  return (
    <section class="contact">
      <div class="title">
        <h2>contact</h2>
        <div>
          <h2>get in touch</h2>
        </div>
      </div>

      <p class="start">
        I am open for full time SDE Roles anywhere in India or abroad. Contact
        me for any openings. Also I can be contacted for any projects you want
        me to collaborate with.
      </p>

      <hr style={{ marginBottom: "0%", opacity: 0 }} />

      <div class="main">
        <div class="leftContact">
          <h2>feel free to ask me!</h2>
          <p style={{ fontSize: "small" }}>
            Connect with me via my mail or social media links :
          </p>
          <br />
          <div style={{ display: "inline-block" }}>
            <span>
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </span>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ display: "inline-block" }}>
            <div class="mail">mail me</div>
            <br />
            <div>rohitparida0599@gmail.com</div>
          </div>
          <br />
          <br />
          <br />
          <div style={{ display: "inline-block" }}>
            <span>
              <FontAwesomeIcon icon={faPhoneSquareAlt} />
            </span>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ display: "inline-block" }}>
            <div class="mail">Contact me</div>
            <br />
            <div>(+91) 7978251158</div>
          </div>
          <br />
          <br />
          <br />
          <div class="contact-social-links">
            <a href="#" target="_blank">
              <span>
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </span>
            </a>
            &nbsp;
            <a
              href="https://www.facebook.com/rohit.parida.391/"
              target="_blank"
            >
              <span>
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </span>
            </a>
            &nbsp;
            <a href="https://github.com/rohit1039" target="_blank">
              <span>
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </span>
            </a>
            &nbsp;
            <a
              href="https://www.linkedin.com/in/rohit-parida-3382911a6/"
              target="_blank"
            >
              <span>
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </span>
            </a>
            &nbsp;
          </div>
        </div>

        <div class="rightContact">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="your name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="your email"
              required
            />
            <input
              className="t"
              type="text"
              name="subject"
              placeholder="your subject"
              required
            />
            <br />
            <br />
            <br />
            <textarea name="message" rows="10" required></textarea>
            <br />
            <br />
            <br />
            <button className="btn">
              <span id="send" style={{ fontSize: "small" }}>
                send message!
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
