import {useEffect,useState} from 'react';
import axios, { Axios } from 'axios';


function About() {
	const [about, setAbout] = useState('');

	useEffect(()=>{
		axios.get('http://localhost:8000/v1/about').then(res=>{
			console.log(res.data);
			setAbout(res.data);
		}).catch(err=>{
			console.log(err);
		})
	},[]);
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
              <div class="about-image">
                <img
                  src="images/about/company-about.png"
                  alt="about us"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="common-heading text-l ">
			  <span><b>We Are Creative Agency</b></span>
                <span>About Us</span>
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
              <div class="row in-stats small about-statistics">
                <div class="col-lg-4 col-sm-4">
                  <div class="statistics">
                    <div class="statnumb counter-number">
                      <span class="counter">450</span>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                  <div class="statistics">
                    <div class="statnumb">
                      <span class="counter">95</span>
                      <span>k</span>
                      <p>Hours Worked</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-4">
                  <div class="statistics mb0">
                    <div class="statnumb counter-number">
                      <span class="counter">850</span>
                      <p>Projects Done</p>
                    </div>
                  </div>
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
