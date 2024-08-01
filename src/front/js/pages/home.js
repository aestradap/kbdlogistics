import React, { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import onlyTruck from "../../img/onlytruck.png";
import onlyPlane from "../../img/onlyplane-white.png";
import onlyBoat from "../../img/onlyboat-white.png";
import greenTruck from "../../img/green-truck2-2048010029.jpg";
import containersBoat from "../../img/containers-boat-2421992563.jpg";
import cargoPlane from "../../img/cargo-plane-2377868775.jpg";
import { BackgroundVideo } from "../component/BackgroundVideo";
import boatVideo from "../../img/container-boat-video.mp4";
import truckVideo from "../../img/container-truck-video.mp4";
import portVideo from "../../img/container-port-video.mp4";


export const Home = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const modalCookies = useRef();

  const showModal = () => {
    const modalEle = modalCookies.current;
    const bsModal = new bootstrap.Modal(modalEle, {
      backdrop: "static",
      keyboard: false
    });
    bsModal.show();
  };

  const hideModal = () => {
    const modalEle = modalCookies.current;
    const bsModal = bootstrap.Modal.getInstance(modalEle);
    bsModal.hide();
  };


  useEffect(() => {
    setTimeout(() => {
      showModal();
    }, 1000);
  }, []);


  return <>

    <div show={show} class="modal fade"
         id="exampleModal" tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
         data-bs-backdrop="static"
         ref={modalCookies}
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 className="nav-link active mb-0" style={{ color: "#ffffff" }} aria-current="page" href="#">
              <b>K&BD</b> LOGISTICS INC
            </h4>
          </div>
          <div class="modal-body">
            <label className="form-label" style={{ color: "#00A651" }}>
              This website is currently under development.
              Feel free to interact and learn more as the solution is finished.
              Please note that the main functionalities will not be released
              until after the testing phase is completed.
              And of course be kind and <b>accept cookies</b>.
            </label>
          </div>
          <div class="modal-footer">

            <p><a className="btn btn-lg btn-home-primary"
                  onClick={hideModal}
            >
              Accept Cookies
            </a></p>
          </div>
        </div>
      </div>
    </div>

    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0"
                className="active" aria-current="true"
                aria-label="Slide 1" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"
                aria-label="Slide 2" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"
                aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <BackgroundVideo video={boatVideo} />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Supply Chain Solutions.</h1>
              <p className="opacity-75">
                We deliver essential supply chain solutions to the world's leading companies.
              </p>
              <p><a className="btn btn-lg btn-home-primary" href="/quote">
                Request a quote
              </a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <BackgroundVideo video={portVideo} />
          <div className="container">
            <div className="carousel-caption">
              <h1>Reaching Across The World.</h1>
              <p>Whatever you need, we've got it handled..</p>
              <p><a className="btn btn-lg btn-home-primary" href="#">Explore our solutions</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <BackgroundVideo video={truckVideo} />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>The client always comes first.</h1>
              <p>We offer real-time shipment tracking information, competitive pricing, and guaranteed delivery
                security.</p>
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
          <a href="#">
            <img src={onlyPlane} alt="Logo"
                 className="d-inline-block align-text-top" />
          </a>
          <h2 className="fw-normal">Air</h2>
          <p>Air freight is one of the fastest and most reliable ways of transportation.</p>
          <p><a className="btn btn-home-primary" href="#">View details &raquo;</a></p>
        </div>

        {/*.col-lg-4 */}

        <div className="col-lg-4">
          <a href="#">
            <img src={onlyBoat} alt="Logo"
                 className="d-inline-block align-text-top" />
          </a>
          <h2 className="fw-normal">Ocean</h2>
          <p>We entrust our cargo to the world's most elite ocean freight liners.</p>
          <p><a className="btn btn-home-primary" href="#">View details &raquo;</a></p>
        </div>
      </div>

      {/*START THE FEATURETTES */}

      <hr className="featurette-divider hr-home" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            The shortest routes to your location.</h2>
          <p className="lead">
            Our ground freight services are not only swift but also efficient
            and consistently dependable. With routes spanning all states in the
            United States, we ensure your products are delivered safely and
            securely. Your trust is our top priority, and we guarantee that
            everything you ship arrives in your hands without fail.
          </p>
        </div>
        <div className="col-md-5"
             style={{
               backgroundImage: `url(${greenTruck})`,
               backgroundSize: "cover",
               backgroundPosition: "center"
             }}>
        </div>
      </div>

      <hr className="featurette-divider hr-home" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            Air Freight, Simplified.
          </h2>
          <p className="lead">
            It is a fact that air freight is one of the fastest and most
            reliable modes of transportation. We are focused on creating
            reliable transport lines with the best companies in the world.
            Our air freight service is among the fastest and safest in the
            world. If you are looking for reliability and efficiency, you
            are looking for K&BD LOGISTICS.
          </p>
        </div>
        <div className="col-md-5 order-md-1"
             style={{
               backgroundImage: `url(${cargoPlane})`,
               backgroundSize: "cover",
               backgroundPosition: "center"
             }}>
        </div>
      </div>

      <hr className="featurette-divider hr-home" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            Easy Ocean Freight Solutions.
          </h2>
          <p className="lead">Our ocean freight is handled by the most capable
            carriers. We maintain and cultivate the best relationships to
            ensure meticulously cared-for transportation, guaranteeing you
            will always receive your goods exactly as you expect them.
          </p>
        </div>
        <div className="col-md-5" style={{
          backgroundImage: `url(${containersBoat})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        </div>
      </div>
      <hr className="featurette-divider hr-home" />
    </div>
  </>;
};

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

