import {
  faBuildingCircleCheck,
  faCalendarAlt,
  faFileSignature,
  faMailBulk,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProfileImage from "../../images/ROHIT.jpg";

const About = () => {
  
  const usersDataInFileFormat = () => {
    fetch("Rohit's Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Rohit's Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <div class="title">
        <h2>About</h2>
        <div>
          <h2>about me</h2>
        </div>
      </div>

      <section class="about">
        <div class="leftAbout">
          <img src={ProfileImage} />
        </div>
        <div class="rightAbout">
          <p>
            I am a full-stack developer, specialised in HTML, CSS, JavaScript,
            and React for Frontend, Java, Spring Boot and Eclipse Vert.x for
            Backend, AWS for Cloud, Docker for Containerization, MySQL for
            databases. Also have worked on various Microservices architecture.
            I'm always open to work with people from any places in the world.
          </p>
          <br />
          <div class="personal_Details">
            <div>
              <span id="t">
                <FontAwesomeIcon className="icon" icon={faFileSignature} />{" "}
                &nbsp;Name: &nbsp;
              </span>
              <span>Rohit Parida</span>
            </div>

            <div>
              <span id="t">
                <FontAwesomeIcon className="icon" icon={faMapMarkedAlt} />{" "}
                &nbsp;Location: &nbsp;
              </span>
              <span>India, Odisha, District - Mayurbhanj</span>
            </div>

            <div>
              <span id="t">
                <FontAwesomeIcon className="icon" icon={faCalendarAlt} />{" "}
                &nbsp;Date of Birth: &nbsp;
              </span>
              <span>5th March, 1999</span>
            </div>

            <div>
              <span id="t">
                <FontAwesomeIcon className="icon" icon={faMailBulk} />{" "}
                &nbsp;Email Address: &nbsp;
              </span>
              <span>rohitparida0599@gmail.com</span>
            </div>

            <div>
              <span id="t">
                <FontAwesomeIcon className="icon" icon={faPhone} /> &nbsp;Phone
                number: &nbsp;
              </span>
              <span>(+91) 7978251158</span>
            </div>

            <div>
              <span id="t">
                <FontAwesomeIcon
                  className="icon"
                  icon={faBuildingCircleCheck}
                />{" "}
                &nbsp;Company: &nbsp;
              </span>
              <span>Wissen Technology</span>
            </div>
          </div>
          <div class="xyz">
            <h1>10+</h1> projects till date.
            <br />
            <button
              className="download-btn"
              onClick={() => usersDataInFileFormat()}
            >
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
