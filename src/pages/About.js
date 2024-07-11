import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import nobg from "../img/melvin4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container2">
            

            <div id="about-info" className="bg-secondary bg-gradient">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      About
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>
        </div>
      </div>

      <section id="carton">
        <div className="container mt-5">
          <div className="col">
            <div className="card p-5 shadow">
              <div className="row">
                <div className="col-lg-7 text">
                  <h4 className="text-black"><b>About Me</b></h4>
                  <p class="text-light">
                  Excellent Stamina/Aerobic capacity 
Strong legs/High vertical leap (for blocking and kill shots)
Good pivoting skills and excellent quickness
Expertise in their chosen position
Good Team/Communication Skills
Skills in controlling the ball
Strong Arms
Excellent understanding of the game/tactics
Motivation/ Can do attitude
                  </p>
                  <h4 className="text-black"><b>Volleyball Journey</b></h4> 
                  <p class="text-light">
                  From grade 9 to grade 12, my team got first place. In 3rd year college to 4th year college, we achieve the championship. While in barangay league, we always achieve the first place, and that makes me train harder for volleyball. Although we become champions, we receive a cash prize and a trophy.
                  </p>
                </div>
                <div className="col-lg-5 mb-5">
                  <center>
                    <img
                      src={nobg}
                      alt="Profile Picture of Danny Joy Vidal Macahilig"
                    />
                  </center>
                  <center>
                    <div className="card box">
                      <div className="row p-2">
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faGithub} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faGoogle} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faFacebook} />
                        </div>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pb-5 pt-5">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center"></div>
          </div>
        </div>
      </section>

      <section id="education" class="education">
        <div class="section-heading text-center mb-5">
          <h2>LOCATION</h2>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">

                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                      Barangay Inapoy Kabankalan City Negros Occidental
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <p className="text-white">
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
