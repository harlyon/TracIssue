import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light bd">
        <a class="navbar-brand tx-bold tx-spacing--2" href="#">
          <img style={{ height: "20%", width: "0%"}} src="https://i2.wp.com/www.swiftelearningservices.com/wp-content/uploads/2017/01/Bug-Tracker-2.png?fit=523%2C592&ssl=1" />
        </a>
          <button class="navbar-toggler order-2" type="button" data-toggle="collapse" data-target="#navbarNav"    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i data-feather="menu" class="wd-20 ht-20"></i>
          </button>
        {/* <div class="collapse navbar-collapse order-2" id="navbarNav">
          <ul class="navbar-nav">...</ul>
        </div> */}
      </nav>
    </div>
  );
};

export default Nav;