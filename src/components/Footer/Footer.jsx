import React from "react";
import {
  faArrowRight,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Roll } from "react-reveal";
const Footer = () => {
  return (
    <>
      <hr id="footer" />
      <div class="footer">
        <div class="leftFooter">
          <Roll>
          <h3 class="footer-title">Some Direct Links :</h3>
          <div>
            <span>
              <FontAwesomeIcon icon={faHandPointRight} className="icon" />
            </span>
            &nbsp;
            <span class="text">
              <a href="/skills">Frontend Skills</a>
            </span>
          </div>
          <br />
          <div>
            <span>
              <FontAwesomeIcon icon={faHandPointRight} className="icon"/>
            </span>
            &nbsp;
            <span class="text">
              <a href="/skills">Backend Skills</a>
            </span>
          </div>
          <br />
          <div>
            <span>
              <FontAwesomeIcon icon={faHandPointRight} className="icon"/>
            </span>
            &nbsp;
            <span class="text">
              <a href="/#certifications">Certifications</a>
            </span>
          </div>
          <br />
          <div className="social">
            <a href="#">
              <span>
                <FontAwesomeIcon icon={faTwitter} className="footer-icon"/>
              </span>
            </a>
            <a
              href="https://www.facebook.com/rohit.parida.391/"
              target="_blank"
            >
              <span>
                <FontAwesomeIcon icon={faFacebook} className="footer-icon"/>
              </span>
            </a>
            <a href="https://github.com/rohit1039" target="_blank">
              <span>
                <FontAwesomeIcon icon={faGithub} className="footer-icon"/>
              </span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rohit-parida-3382911a6/"
            >
              <span>
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
              </span>
            </a>
          </div>
          </Roll>
        </div>

        <div class="midFooter">
          <Roll>
          <h3 class="footer-title">Navigate :</h3>
          <div>
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="icon"/>
            </span>
            &nbsp;
            <span class="text">
              <a href="/">Home</a>
            </span>
          </div>
          <br />
          <div>
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="icon"/>
            </span>
            &nbsp;
            <span class="text">
              <a href="/projects">Projects</a>
            </span>
          </div>
          <br />
          <div>
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="icon"/>
            </span>
            &nbsp;
            <span class="text">
              <a href="/skills">Skills</a>
            </span>
          </div>
          <br />
          <div>
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="icon"/>
            </span>
            &nbsp;
            <span class="text">
              <a href="/about">About</a>
            </span>
          </div>
          <br />
          <div>
            <span>
              <FontAwesomeIcon icon={faArrowRight} className="icon"/>
            </span>
            &nbsp;
            <span class="text">
              <a href="/contact">Contact</a>
            </span>
          </div>
          </Roll>
        </div>

        <div class="midRightFooter">
          <Roll>
          <h3>Objective :</h3>
          <div>
            <p>
              Looking for a challenging role in a reputable organization to
              utilize my skills for the growth of the organization as well as to
              enhance my knowledge about new and emerging trends in the IT
              sector.
            </p>
          </div>
          </Roll>
        </div>

        <div class="projectsFooter">
          <Roll>
          <h3 class="footer-title">Project Directs :</h3>
          <div>
            <span>
              <FontAwesomeIcon icon={faHandPointRight} className="icon"/>
            </span>
            &nbsp;
            <span class="text">
              <a href="/projects">Jobify</a>
            </span>
          </div>
          <br />
          <div>
            <span>
              <FontAwesomeIcon icon={faHandPointRight} className="icon"/>
            </span>
            &nbsp;
            <span class="text">
              <a href="/projects">Tweet App</a>
            </span>
          </div>
          <br />
          <div>
            <span>
              <FontAwesomeIcon icon={faHandPointRight} className="icon"/>
            </span>
            &nbsp;
            <span class="text">
              <a href="/projects">Tin Dog</a>
            </span>
          </div>
          </Roll>
        </div>

        <div class="rightFooter">
          <Roll>
          <h3 class="footer-title">have any question?</h3>
          <div>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>
            </span>
            &nbsp;
            <span class="text"> Karanjia, District - Mayurbhanj </span>
          </div>
          <br />
          <div>
            <span>
              <FontAwesomeIcon icon={faPhone} className="icon"/>
            </span>
            &nbsp;
            <span class="text">(+91) 7978251158</span>
          </div>
          <br />
          <div>
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="icon"/>
            </span>
            &nbsp;
            <span class="text">rohitparida0599@gmail.com</span>
          </div>
          <br />
          <div>
            <span>
              <FontAwesomeIcon icon={faLinkedinIn} className="icon"/>
            </span>
            &nbsp;
            <span class="text">
              <a
                class="l"
                target="_blank"
                href="https://www.linkedin.com/in/rohit-parida-3382911a6/"
              >
                Click to chat with me!
              </a>
            </span>
          </div>
          </Roll>
        </div>
      </div>
      <div class="footer-text">
        <p class="last-text">
          Copyright &copy; 2023 All rights reserved | <span>Rohit Parida</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
