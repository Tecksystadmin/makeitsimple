import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';


function ContactUs() {
  

  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [emailAddress, setemailAddress] = useState('');

  const handleSubmit = () => {

    console.log(fullName, emailAddress)
    let data = {
      fullName: fullName,
      emailAddress: emailAddress,
      message: message,
      mobileNo: mobileNo
    };
    
    axios.post('http://localhost:8000/v1/form/', data).then(res => {
      console.log(res.data);
      swal({
        title: "Thank you!",
        text: "We will contact you soon.",
        icon: "success",
    });
      setFullName('');
      setMessage('');
      setMobileNo('');
      setemailAddress('');

    }).catch(err => {
      console.log(err);
      swal({
        title: "Oops!!",
        text: "Some issue occured. Try again sometime!!",
        icon: "warning",
    });
    })

    console.log(data);

  }
  const handleFullNameChange = event => {
    setFullName(event.target.value)
  };
  const handleEmailAddressChange = event => {
    setemailAddress(event.target.value)
  };
  const handleMessageChange = event => {
    setMessage(event.target.value)
  };
  const handleMobileNoChange = event => {
    setMobileNo(event.target.value)
  };
  return (
    <>
      <section class="breadcrumb-area banner-3">
        <div class="text-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 v-center">
                <div class="bread-inner">
                  <div class="bread-title">
                    <h2>Contact Us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row" style={{ marginLeft: "80px" }}>
          <div className="col-md-5">

            <ul className="footer-address-list ftr-details" style={{ margin: "80px" }}>
              <li>
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <p >
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
                  <span>
                    {" "}
                    OPS Nagar, Kalindipuram, Prayagraj, Uttar Pradesh, 211011
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-6" style={{ marginTop: "80px" }}>
            <h5>Get In Touch</h5>
            <div className="form-block mt20">
              <form action="#" id="quotes-form" method="post">
                <div className="fieldsets row">
                  <div className="col-md-12 form-group floating-label">
                    <input
                      type="text"
                      placeholder=" "
                      required="required"
                      className="floating-input"
                      name="name"
                      value={fullName}
                      onChange={handleFullNameChange}
                    />
                    <label>Full Name*</label>
                  </div>
                  <div className="col-md-12 form-group floating-label">
                    <input
                      type="text"
                      placeholder=" "
                      required="required"
                      className="floating-input"
                      name="name"
                      value={emailAddress}
                      onChange={handleEmailAddressChange}
                    />
                    <label>Email Address*</label>
                  </div>
                  <div className="col-md-12 form-group floating-label">
                    <input
                      type="text"
                      placeholder=" "
                      required="required"
                      className="floating-input"
                      name="name"
                      value={message}
                      onChange={handleMessageChange}
                    />
                    <label>Message</label>
                  </div>
                </div>

                <div className="fieldsets row">
                  <div className="col-md-12 form-group floating-label">
                    <input
                      type="text"
                      placeholder=" "
                      required="required"
                      className="floating-input"
                      name="name"
                      value={mobileNo}
                      onChange={handleMobileNoChange}
                    />
                    <label>Mobile Number*</label>
                  </div>
                </div>
                <div className="fieldsets mt20">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
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
            {/* <ul className="footer-address-list link-hover">
            <li>
              <a href="get-quote.html">Contact</a>
            </li>
            <li>
              <a href="javascript:void(0)">Customer's FAQ</a>
            </li>
            <li>
              <a href="javascript:void(0)">Refund Policy</a>
            </li>
            <li>
              <a href="javascript:void(0)">Privacy Policy</a>
            </li>
            <li>
              <a href="javascript:void(0)">Terms and Conditions</a>
            </li>
            <li>
              <a href="javascript:void(0)">License & Copyright</a>
            </li>
          </ul> */}
          </div>
        </div>

      </section>

      {/* <section class="pricing-block pad-tb">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="common-heading ptag">
                <span>Our Pricing</span>
                <h2>Pricing Table</h2>
                <p class="mb30">
                  Choose from one of our three packages, all of which are priced
                  competitively. We offer comprehensive yet cost-effective
                  options. Everyone will find enticing features in our Basic,
                  Professional, and Premium packages.
                </p>
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
                  <h2>Graphic Designing</h2>
                  <p>Graphic designs for day-to-day marketing needs and big campaigns.</p>
                </div>
                <div class="pricingrate">
                  <div class="pricevalue">
                    <h2>
                      <sup>₹</sup> 19999 Per
                    </h2>
                    <h6>Month</h6>
                  </div>
                  <div class="priceoffer">
                    <h2>
                     <span>₹ 29999</span>
                    </h2>
                  </div>
                </div>
                <div class="pricingoffers">
                  <ul class="list-ul ul-check">
                    <li>Unlimited Requests </li>
				    <li>Unlimited Revisions</li>
					<li>Unlimited Brands</li>
					<li>No Contract</li>
					<li>24 Hour Turnaround</li>
					<li>Dedicated Design Team</li>
					<li>Dedicated Project Manager</li>
					<li>Free Stock Images</li>
					<li>Source Files</li>
					<li>Includes Print & Digital Designs</li>
					<li>Also Includes Custom Illustrations</li>
					<li>Also Includes GIFS</li>
					<li>Also Includes Landing Page Designs</li>
					<li>Trello Project Management</li>
                  </ul>
                </div>
                <div class="priceodernow">
                  <div class="priceoderbtn">
                    <a href="#" class="niwax-btn3">
                      Order Now
                    </a>
                  </div>
                  <div class="priceaskwithus">
                    <a href="#" class="livechatbtn d-flex gap10 v-center">
                      <i class="fas fa-comment"></i>
                      <div>
                        <span>Click here to</span> Live Chat{" "}
                      </div>
                    </a>
                  </div>
                </div>
                <div class="pricingfooter mt30">
                  <div class="pfdiv1">
                    <a href="#">Call Us: +91 8957848236</a>
                  </div>
                  <div class="pfdiv2">
                    <a href="#">Need Support</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 nxpb-2">
              <div class="niwaxpricingbox shadow reco">
                <div
                  class="pricingheader"
                  data-background="images/icons/plan-2.svg"
                >
                  <h2>Video</h2>
                  <p>Video designs and motion graphics to ramp up your content marketing.</p>
                </div>
                <div class="pricingrate">
                  <div class="pricevalue">
                    <h2>
                      <sup> ₹ </sup>24999 Per
                    </h2>
                    <h6>Month</h6>
                  </div>
                  <div class="priceoffer">
                    <h2>
                      <span>₹ 34999</span>
                    </h2>
                  </div>
                </div>
                <div class="pricingoffers">
                  <ul class="list-ul ul-check">
                    <li>Unlimited Requests </li>
				    <li>Unlimited Revisions</li>
					<li>Unlimited Brands</li>
					<li>No Contract</li>
					<li>2-4 Day Turnaround</li>
					<li>Dedicated Design Team</li>
					<li>Dedicated Project Manager</li>
                    <li>Free Stock Image</li>
                    <li>Free Stock Videos</li>
                    <li>Free Stock Audios</li>
                    <li>Source Files</li>
                    <li>Trello Project Management</li>
                  </ul>
                </div>
                <div class="priceodernow">
                  <div class="priceoderbtn">
                    <a href="#" class="niwax-btn2">
                      Order Now
                    </a>
                  </div>
                  <div class="priceaskwithus">
                    <a href="#" class="livechatbtn d-flex gap10 v-center">
                      <i class="fas fa-comment"></i>
                      <div>
                        <span>Click here to</span> Live Chat{" "}
                      </div>
                    </a>
                  </div>
                </div>
                <div class="pricingfooter mt30">
                  <div class="pfdiv1">
                    <a href="#">Call Us: +91 8957848236</a>
                  </div>
                  <div class="pfdiv2">
                    <a href="#">Need Support</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 nxpb-3">
              <div class="niwaxpricingbox shadow">
                <div
                  class="pricingheader"
                  data-background="images/icons/plan-3.svg"
                >
                  <h2>Video + Graphics </h2>
                  <p>Get everything from Make it Simple Graphics + Make It Simple Video for a discounted flat monthly fee.</p>
                </div>
                <div class="pricingrate">
                  <div class="pricevalue">
                    <h2>
                      <sup>₹</sup> 39999 Per
                    </h2>
                    <h6>Month</h6>
                  </div>
                  <div class="priceoffer">
                    <h2>
                      <span>₹ 49999</span>
                    </h2>
                  </div>
                </div>
                <div class="pricingoffers">
                  <ul class="list-ul ul-check">
                    <li>Unlimited Requests </li>
				    <li>Unlimited Revisions</li>
					<li>Unlimited Brands</li>
					<li>No Contract</li>
					<li>2-4 Day Turnaround</li>
                    <li>24 Hour Turnaround For Graphics</li>
                    <li>Dedicated Design & Video Team</li>
                    <li>Dedicated Project Manager</li>
                    <li>Responsive Device Design</li>
                    <li>Free Stock Images, Videos & Audio</li>
                    <li>Source Files</li>
                    <li>Includes Print & Digital Designs</li>
                    <li>Also Includes Custom Illustrations,GIFS, Landing Page Designs</li>
                    <li>Trello Project Management</li>
                  </ul>
                </div>
                <div class="priceodernow">
                  <div class="priceoderbtn">
                    <a href="#" class="niwax-btn3">
                      Order Now
                    </a>
                  </div>
                  <div class="priceaskwithus">
                    <a href="#" class="livechatbtn d-flex gap10 v-center">
                      <i class="fas fa-comment"></i>
                      <div>
                        <span>Click here to</span> Live Chat{" "}
                      </div>
                    </a>
                  </div>
                </div>
                <div class="pricingfooter mt30">
                  <div class="pfdiv1">
                    <a href="#">Call Us: +91 8957848236</a>
                  </div>
                  <div class="pfdiv2">
                    <a href="#">Need Support</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default ContactUs;
