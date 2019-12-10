import React from 'react';
import './Landing.css'

const Landing = () => {
  return (
    <div>
      <div className="home-slider">
        <div className="home-lead">
          <h1 className="home-text">Track Issue</h1>
          <h6 className="home-headline">Helps keep track of tasks that are part of an ongoing project. It helps, keep yourself and each other up to speed..</h6>
          <div className="d-flex wd-lg-350">
            <a href="#" className="btn btn-brand-01 btn-uppercase flex-fill">Report an Issue</a>
            <a href="#" className="btn btn-white btn-uppercase flex-fill mg-l-10">Admin Log in</a>
          </div>
        </div>
        <div className="home-slider-img">
          <div><img src="http://themepixels.me/dashforge/assets/img/home-1.png" alt="" /></div>
          <div><img src="https://issuehunt.io/static/images/img_feature_issue.svg" alt="" /></div>
          <div><img src="https://issuehunt.io/static/images/img_feature_issue.svg" alt="" /></div>
        </div>
        <div className="home-slider-bg-one" />
      </div>
    </div>
  );
};

export default Landing;