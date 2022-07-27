import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
        <div className="niwaxofcanvas offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample">
      <div className="offcanvas-body">
        <div className="cbtn animation">
          <div className="btnclose"> <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
        </div>
        <div className="form-block sidebarform">
          <h4>Request A Quote</h4>
          <form id="contactForm" data-bs-toggle="validator" className="shake mt20">
            <div className="row">
              <div className="form-group col-sm-12">
                <input type="text"  id="name" placeholder="Enter name" required data-error="Please fill Out"/>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group col-sm-12">
                <input type="email"  id="email" placeholder="Enter email" required/>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-12">
                <input type="text" id="mobile" placeholder="Enter mobile" required data-error="Please fill Out"/>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group col-sm-12">
                <select name="Dtype" id="Dtype" required>
                  <option value="">Select Requirement</option>
                  <option value="web">web</option>
                  <option value="graphic">graphic</option>
                  <option value="video">video</option>
                </select>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="form-group">
              <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
              <div className="help-block with-errors"></div>
            </div>
            <button type="submit" id="form-submit" className="btn lnk btn-main bg-btn">Submit <span className="circle"></span></button>
            <div id="msgSubmit" className="h3 text-center hidden"></div>
            <div className="clearfix"></div>
          </form>
        </div>
        <div className="getintouchblock mt30">
          <h4>Get In Touch</h4>
          <p className="mt10">Please fill out the form below if you have a plan or project in mind that you'd like to share with us.</p>
          <div className="media mt15">
            <div className="icondive"><img src="./assets/images/icons/call.svg" alt="icon"/></div>
            <div className="media-body getintouchinfo">
              <a href="tel:123456790">+91-123 4567 890 <span>Mon-Fri 9am - 6pm</span></a>
            </div>
          </div>
          <div className="media mt15">
            <div className="icondive"><img src="./assets/images/icons/whatsapp.svg" alt="icon"/></div>
            <div className="media-body getintouchinfo">
              <a href="tel:123456790">+91-123 4567 890 <span>Mon-Fri 9am - 6pm</span></a>
            </div>
          </div>
          <div className="media mt15">
            <div className="icondive"><img src="./assets/images/icons/mail.svg" alt="icon"/></div>
            <div className="media-body getintouchinfo">
              <a href="https://separateweb.com/cdn-cgi/l/email-protection#264f48404966514344554f52430845494b"><span className="__cf_email__" data-cfemail="0a63646c654a7d6f6879637e6f24696567">[email&#160;protected]</span> <span>Online Support</span></a>
            </div>
          </div>
          <div className="media mt15">
            <div className="icondive"><img src="./assets/images/icons/map.svg" alt="icon"/></div>
            <div className="media-body getintouchinfo">
              <a href="https://separateweb.com/cdn-cgi/l/email-protection#2a43444c456a5d4f4859435e4f04494547">Jaipur, Rajasthan, India<span>Visit Our Office</span></a>
            </div>
          </div>
        </div>
        <div className="contact-data mt30">
          <h4>Follow Us On:</h4>
          <div className="social-media-linkz mt10">
            <a href="javascript:void(0)" target="blank"><i className="fab fa-facebook"></i></a>
            <a href="javascript:void(0)" target="blank"><i className="fab fa-twitter"></i></a>
            <a href="javascript:void(0)" target="blank"><i className="fab fa-instagram"></i></a>
            <a href="javascript:void(0)" target="blank"><i className="fab fa-linkedin"></i></a>
            <a href="javascript:void(0)" target="blank"><i className="fab fa-youtube"></i></a>
            <a href="javascript:void(0)" target="blank"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>
    // <div>Sidebar</div>
  );
}

export default Sidebar;
