import React from 'react';

const Nav = () => {
  return (
    <header className="navbar navbar-header navbar-header-fixed">
      <div className="navbar-brand">
        <a href="#" className="df-logo">track<span>it</span></a>
      </div>
      <div id="navbarMenu" className="navbar-menu-wrapper">
        <div className="navbar-menu-header">
          <a href="../../index.html" className="df-logo">dash<span>forge</span></a>
          <a id="mainMenuClose" href><i data-feather="x" /></a>
        </div>
      </div>
      <div className="navbar-right">
        <a href="http://dribbble.com/themepixels" className="btn btn-social"><i className="fa fa-dribbble" /></a>
        <a href="https://github.com/themepixels" className="btn btn-social"><i className="fa fa-github" /></a>
        <a href="https://twitter.com/themepixels" className="btn btn-social"><i className="fa fa-twitter" /></a>
      </div>
    </header>
  );
};

export default Nav;