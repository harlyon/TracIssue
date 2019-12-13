import React from 'react';

const SignIn = () => {
  return (
    <div className="content content-fixed content-auth">
      <div className="container">
        <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
          <div className="media-body align-items-center d-none d-lg-flex">
            <div className="mx-wd-600">
              <img src="http://themepixels.me/dashforge/assets/img/img15.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60">
            <div className="wd-100p">
              <h3 className="tx-color-01 mg-b-5">Sign In</h3>
              <p className="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="yourname@yourmail.com"
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between mg-b-5">
                  <label className="mg-b-0-f">Password</label>
                  <a href className="tx-13"></a>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <button className="btn btn-brand-02 btn-block">Sign In</button>
              <div className="divider-text">or</div>
              <button className="btn btn-outline-facebook btn-block">Sign In With Facebook</button>
              <button className="btn btn-outline-twitter btn-block">Sign In With Twitter</button>
              {/* <div className="tx-13 mg-t-20 tx-center">Don't have an account? <a href="page-signup.html">Create an Account</a></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;