import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row top">
          <div className="jumboTopImg col-md-1 col-xs-1 col-lg-3"></div>
          <div className="jumboTopTitle col-md-8 col-xs-8 col-lg-8">
            <h4>Web Development Bootcamp Trial</h4>
            <button className="btn jumboTopBtn">
              Continue your trial
              <span class="glyphicon glyphicon-chevron-right"></span>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row bottom">
        <div className="bottomTitle">
          <h4>
            Your progress <small>(1/4 complete)</small>
          </h4>
        </div>
        <div class="btn-group">
          <button class="btn btn-default selected">
            Industry Knowledge 1<span class="glyphicon glyphicon-ok"></span>
          </button>
          <button class="btn btn-default">Industry Knowledge 2</button>
          <button class="btn btn-default">HTML Basics</button>
          <button class="btn btn-default">Your First PHP Script</button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
