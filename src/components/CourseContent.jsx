import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import mobileDevImg from "../../public/assets/mobile-developer-bootcamp.png";
import softwareEngImg from "../../public/assets/software-engineer-bootcamp.png";

function CourseContent() {
  return (
    <div className="container-fluid">
      <div class="row main">
        <div class="col-xs-12 col-md-6 col-lg-6">
          <Jumbotron />
          <div className="trial-container">
            <h4>Trial another Bootcamp</h4>
            <div className="cards">
              <Card
                cardClass="media-title mobile-dev-img"
                bodyImg={mobileDevImg}
              />
              <Card
                cardClass="media-title soft-eng-img"
                bodyImg={softwareEngImg}
              />
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-4 col-lg-4 paddedContainer">
          <div className="row firstRow">
            <div className="firstTextBox">
              <h4>Your coding journey</h4>
              <span class="glyphicon glyphicon-question-sign hidden-xs"></span>
            </div>
            <div className="totalText">
              <div className="inlineText">
                <div>
                  <span>1</span>
                </div>
                <div className="inlineShort">
                  <p className="para-style">Total programs written</p>
                </div>
              </div>
              <div className="inlineText">
                <div>
                  <span>4</span>
                </div>
                <div className="inlineShort">
                  <p className="para-style">Total code reviews</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row basslineClass">
            <div className="">
              <h4 className="section-header-style">Get more information</h4>
            </div>
            <div className="secondTextBox">
              <p className="para-style">
                We're ready with any question you may have about our Bootcamps
                and Mentor Support.
              </p>
              <div className="doubleBtn">
                <button class="btn btn-default no-space-left" type="submit">
                  Book a call
                </button>
                <button class="btn btn-default no-space-left" type="submit">
                  Join an info session
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="row basslineClass">
            <div className="">
              <h4 className="section-header-style">
                Upgrade to the Full Bootcamp
              </h4>
            </div>
            <div className="thirdTextBox">
              <p className="para-style">
                Our Next Cohort starts 3 January 2018.
              </p>
              <button class="btn btn-default no-space-left" type="submit">
                Reserve you spot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
