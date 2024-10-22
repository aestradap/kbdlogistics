import React, { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import onlyTruck from "../../img/onlytruck.png";
import onlyPlane from "../../img/onlyplane-white.png";
import onlyBoat from "../../img/onlyboat-white.png";
import greenTruck from "../../img/green-truck2-2048010029.webp";
import containersBoat from "../../img/containers-boat-2421992563.webp";
import cargoPlane from "../../img/cargo-plane-2377868775.webp";
import { BackgroundVideo } from "../component/BackgroundVideo";
import boatVideo from "../../img/container-boat-video.mp4";
import truckVideo from "../../img/container-truck-video.mp4";
import portVideo from "../../img/landing_plane.webm";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


export const Home = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const [cookiesInfo, setCookiesInfo] = useState(false);
  const modalCookies = useRef();
  const navigate = useNavigate();
  const { t } = useTranslation();
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

    <div show={show} className="modal fade"
         aria-hidden="false"
         data-bs-backdrop="false"
         onClick={hideModal}
         ref={modalCookies}
    >
      <div className="modal-dialog modal-lg modal-custom-position"
           onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="nav-link active mb-0"
                style={{ color: "#ffffff" }}
                aria-current="page" href="#"
            >
              <b>K&BD</b> LOGISTICS INC
            </h4>
          </div>
          <div className="modal-body">
            {cookiesInfo ?
              <div className="scrollspy-example bg-body-tertiary rounded-2"
                   style={{ textAlign: "justify" }}>
                <h3 style={{ textAlign: "start !important" }}>
                  <b>{t("cookies_title")}</b>
                </h3>

                <hr style={{ color: "#00A651", marginTop: 5 }} />

                <p><strong>{t("cookies_one")}</strong></p>
                <p>{t("cookies_one_msg")}</p>

                <hr style={{ color: "#00A651", marginTop: 5 }} />

                <p><strong>{t("cookies_two")}</strong></p>
                <p>{t("cookies_two_msg")}</p>

                <hr style={{ color: "#00A651", marginTop: 5 }} />

                <p><strong>{t("cookies_three")}</strong></p>
                <p>{t("cookies_three_msg")}</p>

                <p><strong>{t("cookies_three_a")}</strong>
                  {t("cookies_three_a_msg")}</p>

                <p><strong>{t("cookies_three_b")}</strong>
                  {t("cookies_three_b_msg")}</p>

                <p><strong>{t("cookies_three_c")}</strong>
                  {t("cookies_three_c_msg")}</p>

                <p><strong>{t("cookies_three_d")}</strong>
                  {t("cookies_three_d_msg")}</p>

                <hr style={{ color: "#00A651", marginTop: 5 }} />

                <p><strong>{t("cookies_four")}</strong></p>
                <p>{t("cookies_four_msg")}</p>

                <hr style={{ color: "#00A651", marginTop: 5 }} />

                <p><strong>{t("cookies_five")}</strong></p>
                <p>{t("cookies_five_msg")}</p>

                <hr style={{ color: "#00A651", marginTop: 5 }} />

                <p><strong>{t("cookies_six")}</strong></p>
                <p>{t("cookies_six_msg")}</p>

                <hr style={{ color: "#00A651", marginTop: 5 }} />

                <p><strong>{t("cookies_seven")}</strong></p>
                <p style={{
                  margin: 0, color: "#00A651",
                  textAlign: "start !important"
                }}>
                  {t("cookies_seven_msg")}
                  <Link to="/contact" style={{ color: "#00A651" }}
                        onClick={hideModal}>
                    <strong>Op02@kbdlogistics.com</strong>
                  </Link>
                </p>

              </div>
              :
              <label className="form-label"
                     style={{ color: "#00A651", textAlign: "justify" }}>
                {t("cookies_msg")}
                <a style={{ color: "#00A651" }}
                   onClick={() => setCookiesInfo(true)}>
                  <b>{t("cookies_more")}</b>
                </a>
              </label>
            }
          </div>
          <div className="modal-footer">

            <p><a className="btn btn-lg btn-home-primary"
                  onClick={hideModal}
            >
              {t("cookies_btn")}
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
              <h1>{t("supply")}</h1>
              <p className="opacity-75">
                {t("supply_msg")}
              </p>
              <p><a className="btn btn-lg btn-home-primary" href="/quote">
                {t("request")}
              </a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <BackgroundVideo video={portVideo} />
          <div className="container">
            <div className="carousel-caption">
              <h1>{t("reaching")}</h1>
              <p>{t("reaching_msg")}</p>
              <p><a className="btn btn-lg btn-home-primary" href="/air-cargo">
                {t("explore")}
              </a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <BackgroundVideo video={truckVideo} />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>{t("client")}</h1>
              <p>{t("client_msg")}</p>
              <p><a className="btn btn-lg btn-home-primary" href="/contact">
                {t("connect")}
              </a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">{t("previous")}</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">{t("next")}</span>
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
          <h2 className="fw-normal">{t("ground")}</h2>
          <p>{t("ground_msg")}</p>
          <p><a className="btn btn-home-primary" href="/ground-cargo">
            {t("view_details")}
          </a></p>
        </div>

        {/*.col-lg-4 */}

        <div className="col-lg-4">
          <a href="#">
            <img src={onlyPlane} alt="Logo"
                 className="d-inline-block align-text-top" />
          </a>
          <h2 className="fw-normal">{t("air")}</h2>
          <p>{t("air_msg")}</p>
          <p><a className="btn btn-home-primary" href="/air-cargo">
            {t("view_details")}
          </a></p>
        </div>

        {/*.col-lg-4 */}

        <div className="col-lg-4">
          <a href="#">
            <img src={onlyBoat} alt="Logo"
                 className="d-inline-block align-text-top" />
          </a>
          <h2 className="fw-normal">{t("ocean")}</h2>
          <p>{t("ocean_msg")}</p>
          <p><a className="btn btn-home-primary" href="/ocean-cargo">
            {t("view_details")}
          </a></p>
        </div>
      </div>

      {/*START THE FEATURETTES */}

      <hr className="featurette-divider hr-home" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            {t("home_ground_title")}</h2>
          <p className="lead d-none d-md-block" style={{ textAlign: "justify" }}>
            {t("home_ground_msg")}
          </p>
        </div>
        <div className="col-md-5 featurette-image"
             style={{
               backgroundImage: `url(${greenTruck})`,
               margin: 0
             }}
             onClick={() => navigate("/ground-cargo")}
        >
        </div>
      </div>

      <hr className="featurette-divider hr-home" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            {t("home_air_title")}
          </h2>
          <p className="lead d-none d-md-block" style={{ textAlign: "justify" }}>
            {t("home_air_msg")}
          </p>
        </div>
        <div className="col-md-5 order-md-1 featurette-image"
             style={{
               backgroundImage: `url(${cargoPlane})`,
               margin: 0
             }}
             onClick={() => navigate("/air-cargo")}
        >
        </div>
      </div>

      <hr className="featurette-divider hr-home" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            {t("home_ocean_title")}
          </h2>
          <p className="lead d-none d-md-block" style={{ textAlign: "justify" }}>
            {t("home_ocean_msg")}
          </p>
        </div>
        <div className="col-md-5 featurette-image"
             style={{
               backgroundImage: `url(${containersBoat})`,
               margin: 0
             }}
             onClick={() => navigate("/ocean-cargo")}
        >
        </div>
      </div>
      <hr className="featurette-divider hr-home" />
    </div>
  </>;
};
;


