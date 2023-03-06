import React from "react";

const Skill = () => {
  return (
    <>
      <div class="title">
        <h2>Skills</h2>
        <div>
          <h2>My skills</h2>
        </div>
      </div>

      <section class="skills">
        <p>My skills are mentioned below :</p>
        <br />
        <br />

        <div class="skillsMain">
          <div class="leftSkills">
            <div>
              <span id="javaLeft">Core Java</span>
              <span id="javaRight">80%</span>
            </div>
            <br />
            <progress value="80" max="100"></progress>
            <br />
            <br />

            <div>
              <span class="springLeft">Spring Framework</span>
              <span class="springRight">70%</span>
            </div>
            <br />
            <progress value="70" max="100"></progress>
            <br />
            <br />

            <div>
              <span class="vertxLeft">Eclipse Vert.x</span>
              <span class="vertxRight">60%</span>
            </div>
            <br />
            <progress value="60" max="100"></progress>
            <br />
          </div>

          <div class="rightSkills">
            <div>
              <span class="htmlLeft">HTML5</span>
              <span class="htmlRight">90%</span>
            </div>
            <br />
            <progress value="90" max="100"></progress>
            <br />
            <br />

            <div>
              <span class="scriptLeft">JavaScript</span>
              <span class="scriptRight">80%</span>
            </div>
            <br />
            <progress value="80" max="100"></progress>
            <br />
            <br />

            <div>
              <span class="reactLeft">React JS</span>
              <span class="reactRight">70%</span>
            </div>
            <br />
            <progress value="70" max="100"></progress>
            <br />
            <br />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
