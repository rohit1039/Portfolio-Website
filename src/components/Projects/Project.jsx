import React from "react";
import { faCloudMoonRain, faComments, faDog, faSignal, faStoreAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Project = () => {
  return (
    <>
      <div class="title">
        <h2>Projects</h2>
        <div>
          <h2>My projects</h2>
        </div>
      </div>

      <section class="projects">
        <div class="container">
          <div class="item item1">
            <div id="up">
              <a
                href="https://github.com/rohit1039/jobify-backend"
                target="_blank"
              >
                <span><FontAwesomeIcon icon={faUser} style={{fontSize:"60px"}} /></span>
              </a>
            </div>
            <div id="down">
              <h3>Jobify Backend</h3>
              <hr class="d" />
            </div>
          </div>
          <div class="item item2">
            <div id="up">
              <a
                href="https://github.com/rohit1039/jobify-react"
                target="_blank"
              >
                 <span><FontAwesomeIcon icon={faSignal} style={{fontSize:"60px"}} /></span>
              </a>
            </div>
            <div id="down">
              <h3>jobify frontend</h3>
              <hr class="d" />
            </div>
          </div>
          <div class="item item3">
            <div id="up">
              <a
                href="https://github.com/rohit1039/Weather-Forecast-API-System"
                target="_blank"
              >
                <span><FontAwesomeIcon icon={faCloudMoonRain} style={{fontSize:"60px"}} /></span>
              </a>
            </div>
            <div id="down">
              <h3>weather API</h3>
              <hr class="d" />
            </div>
          </div>
          <div class="item item4">
            <div id="up">
              <a href="https://github.com/rohit1039/tweet-app" target="_blank">
              <span><FontAwesomeIcon icon={faComments} style={{fontSize:"60px"}} /></span>
              </a>
            </div>
            <div id="down">
              <h3>tweet app</h3>
              <hr class="d" />
            </div>
          </div>
          <div class="item item5">
            <div id="up">
              <a href="https://github.com/rohit1039/TinDog" target="_blank">
              <span><FontAwesomeIcon icon={faDog} style={{fontSize:"60px"}} /></span>
              </a>
            </div>
            <div id="down">
              <h3>tIndOG</h3>
              <hr class="d" />
            </div>
          </div>
          <div class="item item6">
            <div id="up">
              <a href="https://github.com/rohit1039/Ecommerce" target="_blank">
              <span><FontAwesomeIcon icon={faStoreAlt} style={{fontSize:"60px"}} /></span>
              </a>
            </div>
            <div id="down">
              <h3>E-coMMERCE</h3>
              <hr class="d" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
