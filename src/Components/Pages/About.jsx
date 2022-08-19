import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { ImArrowRight } from "react-icons/im";


function About() {
  const [about, setAbout] = useState('');
  // const [emil,setEmail] = useState('ayush@gmail.com');

  useEffect(() => {
    axios.get('http://localhost:8000/v1/about').then(res => {
      console.log(res.data);
      setAbout(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, []);
  console.log(about);




  return (

    <>
      <section
        class="breadcrumb-area banner-1"
        data-background="images/banner/9.jpg"
      >
        <div class="text-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 v-center">
                <div class="bread-inner">
                  <div class="bread-menu">
                    <ul>
                      <li>
                        <a href="index-2.html">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                    </ul>
                  </div>
                  <div class="bread-title">
                    <h2>About Company</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Breadcrumb Area-->
  <!--Start About--> */}
      <section class="about-agency pad-tb block-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 v-center">
              {/* <div class="about-image">
                <img
                  src="images/about/company-about.png"
                  alt="about us"
                  class="img-fluid"
                />
              </div> */}
            </div>
            <div >
              <div class="common-heading text-l ">
                <span class=" text-lg-center p-5 ">About Us</span>
                <h2>{
                  about.aboutTitle
                }</h2>
                <p>
                  {about.aboutDescription}
                  Make It Simple, is an online marketplace for design & development services. Serving with quality is our constant goal to achieve. Working with Make It Simple, You can hustle free with all your digital design services.
                </p>
                <p>
                  We provide services for developing 2D, 3D, Print Graphics, Corporate Graphics, Multimedia Design, Video Production, Documentary films, Corporate Videos, UI/UX Design, Social Media Marketing, Online Promotion and many more.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div class="bread-title">
        <h2 style={{ textAlign: "center" }} >Why Us</h2>
      </div>
      <h2 style={{ fontSize: "x-large", marginLeft: "30px" }}>
        <br />
        We are your partner in your success
      </h2>

      <ul style={{ marginLeft: "50px" }} >
        <li class="m-2">
          <ImArrowRight />  Executive experts that produce effortless expertise.
        </li>
        <li class="m-2">
          <ImArrowRight /> Enriched outcomes empower by experience professional
        </li>
        <li class="m-2">
          <ImArrowRight /> Visionary approach to meet your conceptual ideas
        </li>
        <li class="m-2">
          <ImArrowRight /> Intense marketing research develops valuable insights
        </li>
      </ul >
      <div class="m-2">
        <section>

        </section>
      </div>


      <section class="pricing-block pad-tb">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="common-heading ptag">
                <span class="p-4">DIGITAL DESIGN SERVICES</span>

              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 nxpb-1">
              <div class="niwaxpricingbox shadow">
                <div
                  class="pricingheader"
                  data-background="images/icons/plan-1.svg"
                >
                  <h2>Our Mission</h2>
                  <p>To exceed customers expectations with innovation and bespoke Assurance, Testing, Inspection and Certification services for their operations and supply chain. Globally 24/7.</p>
                </div>

              </div>
            </div>

            <div class="col-lg-4 col-md-6 nxpb-2">
              <div class="niwaxpricingbox shadow reco">
                <div
                  class="pricingheader"
                  data-background="images/icons/plan-2.svg"
                >
                  <h2>Our Vision</h2>
                  <p>We are a global family that values diversity. We always do the right thing. With precision, pace and passion. We trust each other and have winning together. We own and shape our future. We create sustainable growth. For All.</p>
                </div>

              </div>
            </div>

            <div class="col-lg-4 col-md-6 nxpb-3">
              <div class="niwaxpricingbox shadow">
                <div
                  class="pricingheader"
                  data-background="images/icons/plan-3.svg"
                >
                  <h2>Our Values</h2>
                  <p>Responsive: We adapt, to the industry and to your business. Relentless: We aim for greatness in all we do. Resilient: We evolve with the market. To be the world’s most trusted partner for Quality Assurance.</p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
