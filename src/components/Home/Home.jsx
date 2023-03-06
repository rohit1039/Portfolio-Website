import React from "react";
import { Bounce, Fade, Zoom } from "react-reveal";
import ProfileImage from "../../images/image.jpeg";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <hr id="home" style={{ opacity: 0 }} />
      <section class="home">
        <div class="leftHome">
          <Bounce>
            <div>
              <img src={ProfileImage} />
            </div>
          </Bounce>
        </div>

        <div class="rightHome">
          <Fade>
            <div class="line-height">
              <p>HELLO!</p>
              <h1>
                I'm <span id="name">Rohit Parida</span>
              </h1>
              <p id="p">
                A <u>F</u>ULL <u>S</u>TACK <u>E</u>NGINEER
              </p>
              <div>
                <form action="/footer">
                  <button id="but1">
                    <span>HIRE ME!</span>
                  </button>
                </form>
                <form action="/projects">
                  <button id="but2">
                    <span>MY PROJECTS</span>
                  </button>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <hr id="certifications" style={{ opacity: 0 }} />

      <section class="certifications">
        <div>
          <h1>
            <span>CERTIFICATIONS</span>
          </h1>
        </div>
        <Zoom>
          <Slider className="slider"/>
        </Zoom>
      </section>
    </>
  );
};

export default Home;
