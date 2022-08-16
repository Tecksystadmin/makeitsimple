import React from "react";
import mis from '../images/white-logo.png';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="m-5">
        <div className="footer-row1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="email-subs">
                  <h3>Get New Insights Weekly</h3>
                  <p>
                    News letter dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt. Enter your email
                  </p>
                </div>
              </div>
              <div className="col-lg-6 v-center">
                <div className="email-subs-form">
                  <form>
                    <input
                      type="email"
                      placeholder="Email Your Address"
                      name="emails"
                    />
                    <button
                      type="submit"
                      name="submit"
                      className="lnk btn-main bg-btn"
                    >
                      Subscribe <i className="fas fa-chevron-right fa-icon"></i>
                      <span className="circle"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-row2">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-3 col-sm-6  ftr-brand-pp">
                <a className="navbar-brand mt30 mb25 f-dark-logo" href="#">
                  {" "}
                  <img src={mis} alt="Logo" />
                </a>
                <a className="navbar-brand mt30 mb25 f-white-logo" href="#">
                  {" "}
                  <img src="images/white-logo.png" alt="Logo" />
                </a>
                <p>
                Make It Simple, is an online marketplace for design & development services. Serving with quality is our constant goal to achieve. Working with Make It Simple, You can hustle free with all your digital design services.
                </p>
                <a href="/about" className="btn-main bg-btn3 lnk mt20">
                  Know More{" "}
                  <i className="fas fa-chevron-right fa-icon"></i>
                  <span className="circle"></span>
                </a>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h5><b>Contact Us</b></h5>
                <ul className="footer-address-list ftr-details">
                  <li>
                    <span>
                      <i className="fas fa-envelope"></i>
                    </span>
                    <p>
                      Email{" "}
                      <span>
                        {" "}
                        <a href="mailto:text@mail.com">
                          <span
                            className="__cf_email__"
                            data-cfemail="80e9eee6efc0e2f5f3e9eee5f3f3eee1ede5aee3efed"
                          >
                            [support@makeitsimple.net.in]
                          </span>
                        </a>
                      </span>
                    </p>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    <p>
                      Phone{" "}
                      <span>
                        {" "}
                        <a href="+918957848236">+91 8957848236</a>
                      </span>
                    </p>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <p>
                      Address{" "}
                      <span> {" "}
                        OPS Nagar, Kalindipuram, Prayagraj, Uttar Pradesh,
                        211011
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-sm-6">
                <h5><b>Company</b></h5>
                <ul className="footer-address-list link-hover">
                  <li>
                  <Link to="/" className="menu-links">
                    Home
                  </Link>
                  </li>
                  <li>
                  <Link to={"/about"}>
                    About
                  </Link>
                  </li>
                  <li>
                  <Link to={"/Price"} >
                    Price
                  </Link>
                  </li>
                  <li>
                  <Link to={"/Testimonial"}>
                    Testimonial
                  </Link>
                  </li>
                  <li>
                  <Link to={"/Portfolio"}>
                    Portfolio
                  </Link>
                  </li>
                  <li>
                  <Link to={"/ContactUs"}>
                    Contact Us
                  </Link>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>

    
        <div className="footer-row3">
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer-social-media-icons">
                    <a href="javascript:void(0)" target="blank">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="javascript:void(0)" target="blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="javascript:void(0)" target="blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="javascript:void(0)" target="blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="javascript:void(0)" target="blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                  <div className="footer-">
                    <p  style={{fontSize:"x-large"}} >
                      Private Policy / Terms & Condition. © 2021{" "}
                      <a
                        href="https://themeforest.net/user/rajesh-doot/portfolio"
                        target="blank"
                      >
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="modal leadpopup" id="leadModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="innerbody">
                <div className="innerleft">
                  <div className="leadbtnclose">
                    {" "}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <h3>Build Your App in just 2 Weeks</h3>
                  <p className="mt10">
                    Leave your details and one of our experts will contact you
                    soon
                  </p>
                  <div className="form-block mt20">
                    <form action="#" id="quotes-form" method="post">
                      <div className="fieldsets row">
                        <div className="col-md-12 form-group floating-label">
                          <input
                            type="text"
                            placeholder=" "
                            required="required"
                            className="floating-input"
                          />
                          <label>Full Name*</label>
                        </div>
                        <div className="col-md-12 form-group floating-label">
                          <input
                            type="email"
                            placeholder=" "
                            required="required"
                            className="floating-input"
                          />
                          <label>Email Address*</label>
                        </div>
                      </div>
                      <div className="fieldsets row">
                        <div className="col-md-12 form-group floating-label">
                          <input
                            type="tel"
                            placeholder=" "
                            required="required"
                            className="floating-input"
                          />
                          <label>Mobile Number*</label>
                        </div>
                      </div>
                      <div className="fieldsets mt20">
                        {" "}
                        <button
                          type="submit"
                          name="submit"
                          className="lnk btn-main bg-btn"
                        >
                          Submit{" "}
                          <i className="fas fa-chevron-right fa-icon"></i>
                          <span className="circle"></span>
                        </button>{" "}
                      </div>
                      <p className="trm">
                        <i className="fas fa-lock"></i>We hate spam, and we
                        respect your privacy.
                      </p>
                    </form>
                  </div>
                </div>
                <div
                  class="innerright"
                  data-background="./assets/images/service/mockup-app.jpg"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
