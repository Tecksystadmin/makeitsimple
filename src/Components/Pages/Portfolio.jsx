function Portfolio(){
    return(
        <>
            <section class="breadcrumb-area banner-3">
      <div class="text-block">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 v-center">
              <div class="bread-inner">
                <div class="bread-menu">
                  <ul>
                    <li><a href="index-2.html">Home</a></li>
                    <li><a href="#">Portfolio</a></li>
                  </ul>
                </div>
                <div class="bread-title">
                  <h2>Our Projects</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio-page pad-tb">
      <div class="container">
        <div class="row justify-content-left">
          <div class="col-lg-6">
            <div class="common-heading pp">
              <span>Our Work</span>
              <h2>Portfolio</h2>
            </div>
          </div>
          <div class="col-lg-12 v-center">
            <div class="filters">
              <ul class="filter-menu">
                <li data-filter="*" class="is-checked">All</li>
                <li data-filter=".website">3D</li>
                <li data-filter=".app">Motion Graphics</li>
                <li data-filter=".graphic">Graphic Designing</li>
                <li data-filter=".video">Video Editing</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row card-list">
          <div class="col-lg-4 col-md-6 grid-sizer"></div>
          <div class="col-lg-4 col-sm-6 single-card-item app">
            <div class="isotope_item hover-scale">
              <div class="item-image">
                <a href="#"><img src="https://makeitsimple.net.in/wp-content/uploads/2022/05/04.jpg" alt="portfolio" class="img-fluid"/> </a>
              </div>
              {/* <div class="item-info">
                <h4><a href="#">Creative App</a></h4>
                <p>ios, design</p>
              </div> */}
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 single-card-item graphic">
            <div class="isotope_item hover-scale">
              <div class="item-image">
                <a href="#"><img src="https://makeitsimple.net.in/wp-content/uploads/2022/05/05.jpg" alt="image" class="img-fluid"/> </a>
              </div>
              {/* <div class="item-info">
                <h4><a href="#">Brochure Design</a></h4>
                <p>Graphic, Print</p>
              </div> */}
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 single-card-item website">
            <div class="isotope_item hover-scale">
              <div class="item-image">
                <a href="#"><img src="https://makeitsimple.net.in/wp-content/uploads/2022/05/19.jpg" alt="image" class="img-fluid"/> </a>
              </div>
              {/* <div class="item-info">
                <h4><a href="#">Ecommerce Development</a></h4>
                <p>Web Application</p>
              </div> */}
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 single-card-item app">
            <div class="isotope_item hover-scale">
              <div class="item-image">
                <a href="#"><img src="https://makeitsimple.net.in/wp-content/uploads/2022/05/28.jpg" alt="image" class="img-fluid"/> </a>
              </div>
              {/* <div class="item-info">
                <h4><a href="#">Icon Pack</a></h4>
                <p>Android & iOs, Design</p>
              </div> */}
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 single-card-item graphic">
            <div class="isotope_item hover-scale">
              <div class="item-image">
                <a href="#"><img src="https://makeitsimple.net.in/wp-content/uploads/2022/05/A2-Gheee-D1-1.jpg" alt="image" class="img-fluid"/> </a>
              </div>
              {/* <div class="item-info">
                <h4><a href="#">Smart Watch</a></h4>
                <p>UI/UX Design</p>
              </div> */}
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 single-card-item graphic">
            <div class="isotope_item hover-scale">
              <div class="item-image">
                <a href="#"><img src="https://makeitsimple.net.in/wp-content/uploads/2022/05/A2-gheee-find-us-D2.jpg" alt="image" class="img-fluid"/> </a>
              </div>
              {/* <div class="item-info">
                <h4><a href="#">Brochure Design</a></h4>
                <p>Graphic, Print</p>
              </div> */}
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 single-card-item website">
            <div class="isotope_item hover-scale">
              <div class="item-image">
                <a href="#"><img src="https://makeitsimple.net.in/wp-content/uploads/2022/05/cpwd-scaled.jpg" alt="image" class="img-fluid"/> </a>
              </div>
              {/* <div class="item-info">
                <h4><a href="#">Packaging Design</a></h4>
                <p>Graphic, Print</p>
              </div> */}
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 single-card-item app">
            <div class="isotope_item hover-scale">
              <div class="item-image">
                <a href="#"><img src="https://makeitsimple.net.in/wp-content/uploads/2022/05/Design-4-scaled.jpg" alt="image" class="img-fluid"/> </a>
              </div>
              {/* <div class="item-info">
                <h4><a href="#">Restaurant App</a></h4>
                <p>Android App</p>
              </div> */}
            </div>
          </div>
          {/* <div class="col-lg-4 col-sm-6 single-card-item  website">
            <div class="isotope_item hover-scale">
              <div class="item-image">
                <a href="#"><img src="images/portfolio/image-9.jpg" alt="image" class="img-fluid"/> </a>
              </div>
              <div class="item-info">
                <h4><a href="#">Portfolio Website</a></h4>
                <p>Web Design</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
        </>
    );
}

export default Portfolio;