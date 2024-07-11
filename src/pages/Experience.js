import "./Experience.css";
import Navbar from "./Navbar";

import OJT18 from "../img/melvin5.jpg";


const Experience = () => {
  return (
    <>
      <Navbar />
            <div id="exprience-info">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Experiences
                    </h1>
                  </div>
                </div>
              </div>
            </div>
      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <br />
            <hr />
          </div>
      
          <div class="isotope">
            <div class="row">
            <h1 className="text display-4 fw-bold"><center>During my Cauyan Legue with SK Chairman and SK Kagawad<p className="display-6"></p></center></h1>
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={OJT18} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>
              <hr />  
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default Experience;
