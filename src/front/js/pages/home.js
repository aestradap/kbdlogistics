import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import onlyTruck from "../../img/onlytruck.png";
import onlyBoat from "../../img/onlyboat-white.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return <>
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
                aria-label="Slide 1" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
               aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Supply Chain Solutions.</h1>
              <p className="opacity-75">
                We deliver essential supply chain solutions to the world's leading companies.
              </p>
              <p><a className="btn btn-lg btn-home-primary" href="#">
                Request a quote
              </a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
               aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <div className="container">
            <div className="carousel-caption">
              <h1>Reaching Across The World.</h1>
              <p>Whatever you need, we've got it handled..</p>
              <p><a className="btn btn-lg btn-home-primary" href="#">Explore our solutions</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
               aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>The client always comes first.</h1>
              <p>We offer real-time shipment tracking information, competitive pricing, and guaranteed delivery security.</p>
              {/*<p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>*/}
              <p><a className="btn btn-lg btn-home-primary" href="#">Connect whit us</a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


  {/*Marketing messaging and featurettes*/}



    <div className="container marketing">

      {/*Three columns of text below the carousel*/}
      <div className="row">
        <div className="col-lg-4">
          {/*<svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"*/}
          {/*     role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">*/}
          {/*  <title>Ground</title>*/}
          {/*  <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />*/}
          {/*</svg>*/}
          <a href="#">
            <img src={onlyTruck} alt="Logo"
                 className="d-inline-block align-text-top" />
          </a>
          <h2 className="fw-normal">Ground</h2>
          <p>Our ground freight services are not only fast but also efficient and consistently reliable.</p>
          <p><a className="btn btn-home-primary" href="#">View details &raquo;</a></p>
        </div>

        {/*.col-lg-4 */}
        <div className="col-lg-4">
          {/*<svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"*/}
          {/*     role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">*/}
          {/*  <title>Air</title>*/}
          {/*  <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />*/}
          {/*</svg>*/}
          <a href="#">
            <img src={onlyBoat} alt="Logo"
                 className="d-inline-block align-text-top" />
          </a>
          <h2 className="fw-normal">Air</h2>
          <p>Air freight is one of the fastest and most reliable ways of transportation.</p>
          <p><a className="btn btn-home-primary" href="#">View details &raquo;</a></p>
        </div>

        {/*.col-lg-4 */}

        <div className="col-lg-4">
          <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
               role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Ocean</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <h2 className="fw-normal">Ocean</h2>
          <p>We entrust our cargo to the world's most elite ocean freight liners.</p>
          <p><a className="btn btn-home-primary" href="#">View details &raquo;</a></p>
        </div>
      </div>

      {/*START THE FEATURETTES */}

      <hr className="featurette-divider hr-home"/>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span
              className="text-body-secondary">It’ll blow your mind.</span></h2>
            <p className="lead">
              Our ground freight services are not only swift but also efficient and consistently dependable. With routes spanning across all states in the United States, we ensure your products are delivered safely and securely. Your trust is our top priority, and we guarantee that everything you ship arrives in your hands without fail.
            </p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                 height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider hr-home" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Oh yeah, it’s that good.
              <span className="text-body-secondary">
                  See for yourself.
                </span>
            </h2>
            <p className="lead">
              Another featurette? Of course. More placeholder content here to give you an idea of
              how this layout would work with some actual real-world content in place.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                 width="500" height="500"
                 xmlns="http://www.w3.org/2000/svg" role="img"
                 aria-label="Placeholder: 500x500"
                 preserveAspectRatio="xMidYMid slice"
                 focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider hr-home" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              And lastly, this one.
              <span className="text-body-secondary">
                Checkmate.
              </span>
            </h2>
            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not
              really intended to be actually read, simply here to give you a better view of what this would look
              like with some actual content. Your content.\
            </p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                 width="500" height="500"
                 xmlns="http://www.w3.org/2000/svg"
                 role="img" aria-label="Placeholder: 500x500"
                 preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>
        <hr className="featurette-divider hr-home" />
    </div>
  </>
}

// return (
//   <div className="text-center mt-5">
//     <h1>Hello Rigo!!</h1>
//     <p>
//       <img src={rigoImageUrl} />
//     </p>
//     <div className="alert alert-info">
//       {store.message || "Loading message from the backend (make sure your python backend is running)..."}
//     </div>
//     <p>
//       This boilerplate comes with lots of documentation:{" "}
//       <a href="https://start.4geeksacademy.com/starters/react-flask">
//         Read documentation
//       </a>
//     </p>
//   </div>
// );

