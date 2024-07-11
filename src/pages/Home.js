import "./Home.css";

import melvin6 from "../img/melvin6.jpeg";
import analyst from "../img/APPROACH.jpg";
import graph from "../img/SET.jpg";
import digiart1 from "../img/RECIEVE.jpg";
import graphd from "../img/melvin7.jpeg";
import graphd1 from "../img/melvin5.jpg";
import graphd2 from "../img/kabankalan.jpg";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            

            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-6 fw-bold">안녕하세요, 저는 Melvin P. Cayaban입니다.</h1>
                      <br />
                      <p className="self text-light">
                      
I have been a volleyball player since grade 9 in high school in Inapoy. I took my college course at Central Philippines State University, taking a Bachelor of Science in Information Technology, and continued my fashion on volleyball. I joined volleyball sports during University Week at CPSU in my 3rd and 4th years of college. I'm willing to teach or train you if you want. Let's go! Let's enhance your skills.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={melvin6}
                        
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>

      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={graph} alt="" />
                <h4 className="text-center text-white">How to set?</h4>
                <p class="text-white">
                Holding the ball above your head with your elbows bent, transfer the weight from your back foot to your front foot, and then push up from your hips all the way through to your fingertips. The goal is to develop a soft touch, which you can practice by setting the volleyball to yourself or setting against a wall.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={analyst} alt="" />
                <h4 className="text-center text-white">How to spike?</h4>
                <p class="text-white">
               Step forward with your right foot while swinging your arms back behind you. Step again with your left foot, ending with your feet shoulder-width apart and knees bent. Swing your arms forward, jump up, and hit the ball with the center of your hand.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={digiart1} alt=""/>
                <h4 className="text-center text-white">How to recieve?</h4>
                <p class="text-white">
                Position yourself so that you hit the ball with both. Otherwise, you won't be able to aim the ball correctly and could be fouled. This can be a bit tricky, when the ball is coming at you at an unexpected angle, but it's always important to position yourself so that your ball hits your arms with equal force so you can aim and hit it correctly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        className="radio-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="radio-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(165,0,165)" />
        </g>
        <g className="radio-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(165,0,165, .5)" />
        </g>
        <g className="radio-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(165,0,165, .3)" />
        </g>
      </svg>

      <section id="game">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="display-3">
            <h1 className="text display-4 fw-bold"><center>TEAM PICTURES <br /></center> </h1>
            </h3>
            <div className="col-lg-7 align-items-center">
              <div className="card">
                <h4 className="ms-3 mt-3">INAPOY ORIENTAL LEGUE</h4>
                <img src={graphd} alt="" />
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3">CAUYAN LEGUE</h4>
                <img src={graphd1} alt="" />
              </div>
              <div className="card">
                <h4 className="ms-3 mt-3">
                  KABANKALAN LEGUE
                </h4>
                <img src={graphd2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
