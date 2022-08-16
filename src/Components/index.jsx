import React from "react";
import Header from "./Pages/Header";
import Sidebar from "./Pages/Sidebar";

function Index() {
  return (
    <div>
      <Header />
      <Sidebar />

      {/* <div id="progress-bar"></div>
      <div className="onloadpage" id="page_loader">
        <div className="pre-content">
          <div className="logo-pre">
            <img
              src="./assets/images/logo.png"
              alt="Logo"
              className="img-fluid"
            />
          </div>
          <div className="pre-text- text-radius text-light text-animation bg-b">
            Make it Simple- Creative Agency & Portfolio HTML Template Are 2 Seconds
            Away. Have Patience
          </div>
        </div>
      </div>
      */}
      <section className="hero-card-web bg-gradient12 shape-bg3">
        <div className="hero-main-rp container-fluid p-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <div className="hero-heading-sec">
                <h2 className="wow fadeIn text-center" data-wow-delay="0.3s">
                  <span>
                    Unlimited Graphics & Video Designs Flat Monthly Fees.
                    SUBSCRIBE NOW
                  </span>
                </h2>
                <div className="d-flex justify-content-center">
                <a style={{marginRight:'20px'}}
                  href="case-study.html"
                  className="niwax-btn2 wow fadeIn"
                  data-wow-delay="0.8s"
                >
                  Download Brochure{" "}
                  <i className="fas fa-chevron-right fa-ani"></i>
                </a>
                <a style={{marginRight:'20px'}}
                  href="case-study.html"
                  className="niwax-btn2 wow fadeIn"
                  data-wow-delay="0.8s"
                >
                  Schedule demo <i className="fas fa-chevron-right fa-ani"></i>
                </a>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>
           
            {/* OUR SERVICES */}
      <section className="portfolio-section pad-tb">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-8">
              <div className="common-heading">
                <span>Integrated services</span>
                <h2 className="mb0"> Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-sm-8 mt60 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="isotope_item hover-scale">
                <div
                  className="item-image"
                  data-tilt
                  data-tilt-max="2"
                  data-tilt-speed="1000"
                >
                  <a href="#">
                    <img
                      src="./assets/images/portfolio/image-d.jpg"
                      alt="image"
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">Graphic Designing</a>
                  </h4>
                  <p>Web Application</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-4 mt60 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="isotope_item hover-scale">
                <div
                  className="item-image"
                  data-tilt
                  data-tilt-max="2"
                  data-tilt-speed="1000"
                >
                  <a href="#">
                    <img
                      src="./assets/images/portfolio/image-1.jpg"
                      alt="image"
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">Video Editing</a>
                  </h4>
                  <p>iOs, Android</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-4 mt60 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="isotope_item hover-scale">
                <div
                  className="item-image"
                  data-tilt
                  data-tilt-max="2"
                  data-tilt-speed="1000"
                >
                  <a href="#">
                    <img
                      src="./assets/images/portfolio/image-6.jpg"
                      alt="image"
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">Motion Graphics</a>
                  </h4>
                  <p>Graphic, Print</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-8 mt60 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="isotope_item hover-scale">
                <div
                  className="item-image"
                  data-tilt
                  data-tilt-max="2"
                  data-tilt-speed="1000"
                >
                  <a href="#">
                    <img
                      src="./assets/images/portfolio/image-c.jpg"
                      alt="image"
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">3D Services</a>
                  </h4>
                  <p>iOs, Android</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-4 mt60 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="isotope_item hover-scale">
                <div
                  className="item-image"
                  data-tilt
                  data-tilt-max="2"
                  data-tilt-speed="1000"
                >
                  <a href="#">
                    <img
                      src="./assets/images/portfolio/image-6.jpg"
                      alt="image"
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">Digital Painting</a>
                  </h4>
                  <p>Graphic, Print</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-4 mt60 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="isotope_item hover-scale">
                <div
                  className="item-image"
                  data-tilt
                  data-tilt-max="2"
                  data-tilt-speed="1000"
                >
                  <a href="#">
                    <img
                      src="./assets/images/portfolio/image-6.jpg"
                      alt="image"
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">Interior Exterior Designing</a>
                  </h4>
                  <p>Graphic, Print</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-4 mt60 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="isotope_item hover-scale">
                <div
                  className="item-image"
                  data-tilt
                  data-tilt-max="2"
                  data-tilt-speed="1000"
                >
                  <a href="#">
                    <img
                      src="./assets/images/portfolio/image-6.jpg"
                      alt="image"
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">Web Development</a>
                  </h4>
                  <p>Graphic, Print</p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-4 mt60 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="isotope_item hover-scale">
                <div
                  className="item-image"
                  data-tilt
                  data-tilt-max="2"
                  data-tilt-speed="1000"
                >
                  <a href="#">
                    <img
                      src="./assets/images/portfolio/image-6.jpg"
                      alt="image"
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">App Development</a>
                  </h4>
                  <p>Graphic, Print</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-4 mt60 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="isotope_item hover-scale">
                <div
                  className="item-image"
                  data-tilt
                  data-tilt-max="2"
                  data-tilt-speed="1000"
                >
                  <a href="#">
                    <img
                      src="./assets/images/portfolio/image-6.jpg"
                      alt="image"
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">Software development</a>
                  </h4>
                  <p>Graphic, Print</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-4 mt60 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="isotope_item hover-scale">
                <div
                  className="item-image"
                  data-tilt
                  data-tilt-max="2"
                  data-tilt-speed="1000"
                >
                  <a href="#">
                    <img
                      src="./assets/images/portfolio/image-6.jpg"
                      alt="image"
                      className="img-fluid"
                    />{" "}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">Digital Marketing</a>
                  </h4>
                  <p>Graphic, Print</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section>  
        <div className="-cta-btn mt70">
            <div
              className="free-cta-title v-center zoomInDown wow"
              data-wow-delay="1.4s"
              style={{marginBottom :'50px'}}
            >
              <p>
                Hire a <span>Dedicated Developer</span>
              </p>
              <a href="#" className="btn-main bg-btn2 lnk">
                Hire Now<i className="fas fa-chevron-right fa-icon"></i>
                <span class="circle"></span>
              </a>
            </div>
        </div>
          <div className="statistics-section bg-gradient6 pad-tb tilt3d">
            <div className="container">
              <div className="row justify-content-center t-ctr">
                <div className="col-lg-4 col-sm-6">
                  <div className="statistics">
                    <div
                      data-tilt
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                      className="statistics-img"
                    >
                      <img
                        src="./assets/images/icons/startup.svg"
                        alt="years"
                        className="img-fluid"
                      />
                    </div>
                    <div className="statnumb">
                      <span className="counter">1.5</span>
                      <span>+</span>
                      <p>Year Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="statistics">
                    <div
                      data-tilt
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                      className="statistics-img"
                    >
                      <img
                        src="./assets/images/icons/team.svg"
                        alt="team"
                        className="img-fluid"
                      />
                    </div>
                    <div className="statnumb">
                      <span className="counter">15</span>
                      <span>+</span>
                      <p>Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row small t-ctr">
                <div className="col-lg-3 col-sm-6">
                  <div className="statistics">
                    <div
                      data-tilt
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                      className="statistics-img"
                    >
                      <img
                        src="./assets/images/icons/deal.svg"
                        alt="happy"
                        className="img-fluid"
                      />
                    </div>
                    <div className="statnumb">
                      <span className="counter">100</span>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="statistics">
                    <div
                      data-tilt
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                      className="statistics-img"
                    >
                      <img
                        src="./assets/images/icons/computers.svg"
                        alt="project"
                        className="img-fluid"
                      />
                    </div>
                    <div className="statnumb counter-number">
                      <span className="counter">250</span>
                      <span>+
                      </span>
                      <p>Projects Done</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="statistics">
                    <div
                      data-tilt
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                      className="statistics-img"
                    >
                      <img
                        src="images/icons/worker.svg"
                        alt="work"
                        className="img-fluid"
                      />
                    </div>
                    <div className="statnumb">
                      <span className="counter"></span>
                      <span>10k+</span>
                      <p>Hours Worked</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="statistics mb0">
                    <div
                      data-tilt
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                      className="statistics-img"
                    >
                      <img
                        src="images/icons/customer-service.svg"
                        alt="support"
                        className="img-fluid"
                      />
                    </div>
                    <div className="statnumb">
                      <span className="counter">24</span>
                      <span>/</span>
                      <span className="counter">7</span>
                      <p>Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>

               {/* why chosse us */}
    <section className="why-choos-lg pad-tb deep-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="common-heading text-l">
                <span>Why Choose Us</span>
                <h2 className="mb20">
                  Why The Niwax{" "}
                  <span className="text-second text-bold">Ranked Top</span>{" "}
                  Among The Leading Web & App Development Companies
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <div className="itm-media-object mt40 tilt-3d">
                  <div className="media">
                    <div
                      className="img-ab- base"
                      data-tilt
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                    >
                      <img
                        src="./assets/images/icons/computers.svg"
                        alt="icon"
                        className="layer"
                      />
                    </div>
                    <div className="media-body">
                      <h4>Streamlined Project Management</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc aliquet ligula nec leo elementum semper. Mauris
                        aliquet egestas metus.
                      </p>
                    </div>
                  </div>
                  <div className="media mt40">
                    <div
                      className="img-ab- base"
                      data-tilt
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                    >
                      <img
                        src="./assets/images/icons/worker.svg"
                        alt="icon"
                        className="layer"
                      />
                    </div>
                    <div className="media-body">
                      <h4>A Dedicated Team of Experts</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc aliquet ligula nec leo elementum semper. Mauris
                        aliquet egestas metus.
                      </p>
                    </div>
                  </div>
                  <div className="media mt40">
                    <div
                      className="img-ab- base"
                      data-tilt
                      data-tilt-max="20"
                      data-tilt-speed="1000"
                    >
                      {" "}
                      <img
                        src="./assets/images/icons/deal.svg"
                        alt="icon"
                        className="layer"
                      />
                    </div>
                    <div className="media-body">
                      <h4>Completion of Project in Given Time</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc aliquet ligula nec leo elementum semper. Mauris
                        aliquet egestas metus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                data-tilt
                data-tilt-max="5"
                data-tilt-speed="1000"
                className="single-image bg-shape-dez wow fadeIn"
                data-wow-duration="2s"
              >
                <img
                  src="./assets/images/about/about-company.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <p className="text-center mt30">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="cta-card mt60 text-center">
                <h3 className="mb20">
                  Let's Start a{" "}
                  <span className="text-second text-bold">New Project</span>{" "}
                  Together
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  aliquet ligula nec leo elementum semper.
                </p>
                <a href="#" className="niwax-btn1 mt30">
                  <span>
                    Request A Quote{" "}
                    <i className="fas fa-chevron-right fa-icon"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>  
      <section className="about-sec-rpb pad-tb">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="common-heading">
                <span>We Are Creative Agency</span>
                <h1 className="mb30">HOW WE WORK</h1>
                {/* <p>
                  Lorem Ipsum is{" "}
                  <span className="text-radius text-light text-animation bg-b">
                    simply dummy
                  </span>{" "}
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.{" "}
                  <span className="text-bold">Lorem Ipsum</span> is simply dummy
                  text of the printing and typesetting industry.{" "}
                  <span className="text-bold">Lorem Ipsum </span> is simply
                  dummy text of the printing and typesetting industry.
                </p> */}
                <h3 className="mt30 mb30">Process that Drives Results.</h3>
                {/* <p>
                  Lorem Ipsum is <span className="text-bold">simply dummy</span>{" "}
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's specimen book. Lorem Ipsum is simply dummy
                  text of the <span className="text-bold">printing</span> and
                  typesetting industry.{" "}
                  <span className="text-bold">Lorem Ipsum is simply</span> dummy
                  text of the printing and typesetting industry. is simply dummy
                  text of the printing and typesetting industry.{" "}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section-prb pad-tb">
        <div className="container-fluid">
          <div className="row upset my-2`">
            <div
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="1000"
              className="col-lg-3 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-sec-brp srvc-bg-nx bg-gradient13 text-w">
                <h4 className="mb10">
                  <u>DISCUSS</u>
                </h4>
                <p>
                  We discuss the subject in detail, especially considering
                  different ideas and opinions related to it. We drive the
                  creation and development of all creative communication.
                </p>
                <a href="javascript:void(0)" className="mt20 link-prb">
                  Learn More
                  <i className="fas fa-chevron-right fa-icon"></i>
                </a>
              </div>
            </div>
            <div
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="1000"
              className="col-lg-3 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-sec-brp srvc-bg-nx bg-gradient13 text-w">
                <h4 className="mb10">
                  <u>RIGHT PROCESS</u>
                </h4>
                <p>
                  We do an in-depth review of your current processes and will
                  identify areas of inefficiency and recommend business
                  processes that maximize the capabilities of your business
                  management solution.
                </p>
                <a href="javascript:void(0)" className="mt20 link-prb">
                  Learn More
                  <i className="fas fa-chevron-right fa-icon"></i>
                </a>
              </div>
            </div>
            <div
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="1000"
              className="col-lg-3 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-sec-brp srvc-bg-nx bg-gradient13 text-w">
                <h4 className="mb10">
                  <u>CLIENT FOCUS</u>
                </h4>
                <p>
                  By putting our-self in the customers' situations and viewing
                  things from their perspective, that helps us better understand
                  the customer and what is likely to form the right solution for
                  their business.
                </p>
                <a href="javascript:void(0)" className="mt20 link-prb">
                  Learn More
                  <i className="fas fa-chevron-right fa-icon"></i>
                </a>
              </div>
            </div>
            <div
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="1000"
              className="col-lg-3 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-sec-brp srvc-bg-nx bg-gradient13 text-w">
                <h4 className="mb10">
                  <u> CUSTOMER SATISFACTION </u>
                </h4>
                <p>
                  We Develop Customer Service Communities that Offer Proactive
                  Customer Service and Treat Customers Like they Want to Be
                  Treated.
                </p>
                <a href="javascript:void(0)" className="mt20 link-prb">
                  Learn More
                  <i className="fas fa-chevron-right fa-icon"></i>
                </a>
              </div>
            </div>
            {/* <div
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="1000"
              className="col-lg-3-cus wow fadeInUp"
              data-wow-delay=".4s">
              <div className="service-sec-list srvc-bg-nx srcl1">
                <img
                  src="./assets/images/icons/development.svg"
                  alt="service"
                />
                <h5 className="mb10">Web Development</h5>
                <ul className="-service-list">
                  <li>
                    {" "}
                    <a href="#">PHP</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <strong>.</strong>Net
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Java</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Joomla</a>
                  </li>
                </ul>
                <p>
                  Lorem Ipsum is text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500.
                </p>
              </div>
            </div>
            <div
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="1000"
              className="col-lg-3-cus wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="service-sec-list srvc-bg-nx srcl2">
                <img src="./assets/images/icons/ecommerce.svg" alt="service" />
                <h5 className="mb10">Ecommerce Development</h5>
                <ul className="-service-list">
                  <li>
                    {" "}
                    <a href="#">Magento </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">WP</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Shopify </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Joomla</a>
                  </li>
                </ul>
                <p>
                  Lorem Ipsum is text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500.
                </p>
              </div>
            </div>
            <div
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="1000"
              className="col-lg-3-cus mt30- wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="service-sec-list srvc-bg-nx srcl3">
                <img src="./assets/images/icons/app.svg" alt="service" />
                <h5 className="mb10">Mobile App Development</h5>
                <ul className="-service-list">
                  <li>
                    {" "}
                    <a href="#">iPhone </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Android</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Cross Platform </a>
                  </li>
                </ul>
                <p>
                  Lorem Ipsum is text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500.
                </p>
              </div>
            </div>
            <div
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="1000"
              className="col-lg-3-cus mt30- wow fadeInUp"
              data-wow-delay="1s"
            >
              <div className="service-sec-list srvc-bg-nx srcl4">
                <img src="./assets/images/icons/tech.svg" alt="service" />
                <h5 className="mb10">Trending Technologies</h5>
                <ul className="-service-list">
                  <li>
                    {" "}
                    <a href="#">React.JS </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">Node.JS </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Angular.JS </a>
                  </li>
                </ul>
                <p>
                  Lorem Ipsum is text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500.
                </p>
              </div>
            </div>
            <div
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="1000"
              className="col-lg-6-cus mt30- wow fadeInUp"
              data-wow-delay="1.2s"
            >
              <div className="service-sec-list srvc-bg-nx srcl5">
                <img src="./assets/images/icons/seo.svg" alt="service" />
                <h5 className="mb10">Digital Marketing</h5>
                <ul className="-service-list">
                  <li>
                    {" "}
                    <a href="#">SEO </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">SMO </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">PPC </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">PPC </a>
                  </li>
                </ul>
                <p>
                  Lorem Ipsum is text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

           {/* happy customers */}
      <section className="clients-section- bg-gradient15 pad-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="common-heading">
                <span>Our happy customers</span>
                <h2 className="mb30">Some of our Clients</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="clients-logos text-center col-12">
                <ul className="row text-center clearfix">
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay=".2s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-1.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Shutter, USA</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay=".4s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-2.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Hipster, USA</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay=".6s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-3.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Happy, USA</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay=".8s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-4.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Opera Tours, USA</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="1s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-5.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Royale Stone, UK</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="1.2s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-6.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>QTP, Australia</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="1.4s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-7.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>PAPA, Malaysia</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="1.6s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-8.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Coffee, Australia</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="1.8s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-9.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Bakery, India</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="2s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-10.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Iconico, India</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="2.2s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-11.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Tom N Jerry, UK</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="2.4s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-12.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Arch, India</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="2.6s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-13.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Aro Group, India</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="2.8s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-14.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Tom Group, India</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="3s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-4.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Premier Pipes, India</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="3.2s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-1.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Dynamic, India</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="3.4s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-7.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>Fns Inc, India</p>
                  </li>
                  <li
                    className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeIn"
                    data-wow-delay="3.6s"
                  >
                    <div className="brand-logo">
                      <img
                        src="./assets/images/client/clients-2.png"
                        alt="clients"
                        className="img-fluid"
                      />
                    </div>
                    <p>RP School, India</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
              {/* our perks */}
      <section className="work-category pad-tb">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 v-center">
              <div className="common-heading text-l">
                {/* <span>Industries we work for</span> */}
                <h2>OUR PERKS</h2>
                <p>
                  99% of the current market assets are handled manually or by
                  some Technical Indicators and Fundamentals or with the help of
                  wealth managers human-derived results with emotions and
                  Failure.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="work-card-set">
                {/* <div className="icon-set wow fadeIn" data-wow-delay=".2s">
                  <div className="work-card cd1">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-1.png"
                        alt="Industries"
                      />
                    </div>
                    <p>Social Networking</p>
                  </div>
                </div> */}
                {/* <div className="icon-set wow fadeIn" data-wow-delay=".4s">
                  <div className="work-card cd2">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-2.png"
                        alt="Industries"
                      />
                    </div>
                    <p>Digital Marketing</p>
                  </div>
                </div> */}
                {/* <div className="icon-set wow fadeIn" data-wow-delay=".6s">
                  <div className="work-card cd3">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-3.png"
                        alt="Industries"
                      />
                    </div>
                    <p>Ecommerce Development</p>
                  </div>
                </div> */}
                {/* <div className="icon-set wow fadeIn" data-wow-delay=".8s">
                  <div className="work-card cd4">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-4.png"
                        alt="Industries"
                      />
                    </div>
                    <p>Video Service</p>
                  </div>
                </div> */}
                <div className="icon-set wow fadeIn" data-wow-delay="1s">
                  <div className="work-card cd5">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-5.png"
                        alt="Industries"
                      />
                    </div>
                    <p>Unlimited Design & Revision</p>
                  </div>
                </div>
                <div className="icon-set wow fadeIn" data-wow-delay="1.2s">
                  <div className="work-card cd6">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-6.png"
                        alt="Industries"
                      />
                    </div>
                    <p>Unlimited Brands</p>
                  </div>
                </div>
                <div className="icon-set wow fadeIn" data-wow-delay="1.4s">
                  <div className="work-card cd7">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-7.png"
                        alt="Industries"
                      />
                    </div>
                    <p>Fast Turnarounds</p>
                  </div>
                </div>
                <div className="icon-set wow fadeIn" data-wow-delay="1.6s">
                  <div className="work-card cd8">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-8.png"
                        alt="Industries"
                      />
                    </div>
                    <p>Team Collaboration</p>
                  </div>
                </div>
                <div className="icon-set wow fadeIn" data-wow-delay="1.8s">
                  <div className="work-card cd9">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-9.png"
                        alt="Industries"
                      />
                    </div>
                    <p>Own Every Design</p>
                  </div>
                </div>
                <div className="icon-set wow fadeIn" data-wow-delay="2s">
                  <div className="work-card cd10">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-10.png"
                        alt="Industries"
                      />
                    </div>
                    <p>No Contracts</p>
                  </div>
                </div>
                <div className="icon-set wow fadeIn" data-wow-delay="2.2s">
                  <div className="work-card cd11">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-11.png"
                        alt="Industries"
                      />
                    </div>
                    <p>No Hidden Costs</p>
                  </div>
                </div>
                <div className="icon-set wow fadeIn" data-wow-delay="2.4s">
                  <div className="work-card cd12">
                    <div className="icon-bg">
                      <img
                        src="./assets/images/icons/icon-12.png"
                        alt="Industries"
                      />
                    </div>
                    <p>Get Human Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testinomial-section bg-none pad-tb">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-8">
              <div className="common-heading">
                <span>What our clients say about Niwax.</span>
                <h2>Over 1200+ Satisfied Clients and Growing</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="video-testimonials owl-carousel">
                <div
                  className="video-review"
                  data-tilt
                  data-tilt-max="5"
                  data-tilt-speed="1000"
                >
                  <a
                    className="video-link"
                    href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&amp;rel=0"
                  >
                    <img
                      src="./assets/images/client/client-pic.jpg"
                      alt="client"
                      className="img-fluid"
                    />
                    <div className="review-vid-details">
                      <div className="-vid-ico">
                        <span className="triangle-play2"></span>
                      </div>
                      <p>Cina Cleaves</p>
                    </div>
                  </a>
                </div>
                <div
                  className="video-review"
                  data-tilt
                  data-tilt-max="5"
                  data-tilt-speed="1000"
                >
                  <a
                    className="video-link"
                    href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&amp;rel=0"
                  >
                    <img
                      src="./assets/images/client/client-pic-a.jpg"
                      alt="client"
                      className="img-fluid"
                    />
                    <div className="review-vid-details">
                      <div className="-vid-ico">
                        <span className="triangle-play2"></span>
                      </div>
                      <p>Jokvch Marlin</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="owl-carousel testimonial-card-a pl25">
                <div className="testimonial-card">
                  <div className="t-text">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div className="client-thumbs mt30">
                    <div className="media v-center">
                      <div className="user-image bdr-radius">
                        <img
                          src="./assets/images/user-thumb/girl.jpg"
                          alt="girl"
                          className="img-fluid"
                        />
                      </div>
                      <div class="media-body user-info v-center">
                        <h5>Mike Smith</h5>
                        <p>
                          Business Owner, <small>Sydney, Australia</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-card">
                  <div class="t-text">
                    <p>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div class="client-thumbs mt30">
                    <div class="media v-center">
                      <div class="user-image bdr-radius">
                        <img
                          src="./assets/images/user-thumb/girl.jpg"
                          alt="girl"
                          class="img-fluid"
                        />
                      </div>
                      <div class="media-body user-info">
                        <h5>Fred Chener</h5>
                        <p>
                          CEO of Aramxx, <small>Ohio, US State</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="testimonial-card">
                  <div class="t-text">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                  <div class="client-thumbs mt30">
                    <div class="media v-center">
                      <div class="user-image bdr-radius">
                        <img
                          src="images/user-thumb/girl.jpg"
                          alt="girl"
                          class="img-fluid"
                        />
                      </div>
                      <div class="media-body user-info">
                        <h5>Mathilda Burns</h5>
                        <p>
                          Backery Shop, <small>Tronto, Italy</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="review-ref mt100">
                <div class="review-title-ref">
                  <h4>Read More Reviews</h4>
                  <p>Read our reviews from all over world.</p>
                </div>
                <div class="review-icons">
                  <a
                    href="#"
                    target="blank"
                    class="wow fadeIn"
                    data-wow-delay=".2s"
                  >
                    <img
                      src="./assets/images/about/reviews-icon-1.png"
                      alt="review"
                      class="img-fluid"
                    />
                  </a>
                  <a
                    href="#"
                    target="blank"
                    class="wow fadeIn"
                    data-wow-delay=".4s"
                  >
                    <img
                      src="./assets/images/about/reviews-icon-2.png"
                      alt="review"
                      class="img-fluid"
                    />
                  </a>
                  <a
                    href="#"
                    target="blank"
                    class="wow fadeIn"
                    data-wow-delay=".6s"
                  >
                    <img
                      src="./assets/images/about/reviews-icon-3.png"
                      alt="review"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
        {/* LOCATION */}
      <section className="our-office pad-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="common-heading">
                <span>Our Locations</span>
                <h2>Our Office</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center upset shape-numm">
            <div
              className="col-lg-4 col-sm-6 shape-loc wow fadeInUp"
              data-wow-delay=".2s">
              <div className="office-card">
                <div
                  className="skyline-img"
                  data-tilt
                  data-tilt-max="4"
                  data-tilt-speed="1000"
                >
                  <img
                    src="./assets/images/location/newyork.png"
                    alt="New York"
                    className="img-fluid"
                  />
                </div>
                <div className="office-text">
                  <h4>New York</h4>
                  <p>603 FA Forest Avenue, New York, USA 10021</p>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    className="btn-outline rount-btn"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    className="btn-outline rount-btn"
                  >
                    <i className="fas fa-phone-alt"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    className="btn-outline rount-btn"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    className="btn-outline rount-btn"
                  >
                    <i className="fab fa-skype"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 shape-loc wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="office-card">
                <div
                  className="skyline-img"
                  data-tilt
                  data-tilt-max="4"
                  data-tilt-speed="1000"
                >
                  <img
                    src="./assets/images/location/sydeny.png"
                    alt="sydney"
                    className="img-fluid"
                  />
                </div>
                <div className="office-text">
                  <h4>Sydney</h4>
                  <p>2449 Columbia Boulevard, Sydney, 10021</p>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    className="btn-outline rount-btn"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    className="btn-outline rount-btn"
                  >
                    <i className="fas fa-phone-alt"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    className="btn-outline rount-btn"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    className="btn-outline rount-btn"
                  >
                    <i className="fab fa-skype"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-sm-6 shape-loc wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div class="office-card mb0">
                <div
                  class="skyline-img"
                  data-tilt
                  data-tilt-max="4"
                  data-tilt-speed="1000"
                >
                  <img
                    src="images/location/rome.png"
                    alt="rome"
                    class="img-fluid"
                  />
                </div>
                <div class="office-text">
                  <h4>Rome</h4>
                  <p>9988 Piazzetta Scalette Rubiani 99, Rome, 84090</p>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    class="btn-outline rount-btn"
                  >
                    <i class="fas fa-map-marker-alt"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    class="btn-outline rount-btn"
                  >
                    <i class="fas fa-phone-alt"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    class="btn-outline rount-btn"
                  >
                    <i class="fas fa-envelope"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    target="blank"
                    class="btn-outline rount-btn"
                  >
                    <i class="fab fa-skype"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </div>
  );
}

export default Index;
