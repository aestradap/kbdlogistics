import React, { useState, useContext } from "react";
import artboartLogo from "../../img/Artboard.png";
import AboutUs from "../pages/aboutUs";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const { t } = useTranslation();
  const { store, actions } = useContext(Context);
  const { lng } = store;
  const [animate, setAnimate] = useState(false);

  const LanguageSwitcher = () => {
    setAnimate(true);

    const newLng = lng === "es" ? "en" : "es";

    setTimeout(() => {
      i18n.changeLanguage(newLng);
      actions.setLng(newLng);
    }, 1000);

    setTimeout(() => setAnimate(false), 1000);
  };

  return <>
    <header data-bs-theme="dark">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="/">
            <img src={artboartLogo} alt="Logo" width="100" height="60"
                 className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button"
                  data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                  aria-controls="navbarCollapse" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <h2 className="nav-link active mb-0 pe-4"
                    style={{ color: "#ffffff" }} aria-current="page" href="#">
                  <b>K&BD</b> LOGISTICS INC
                </h2>
              </li>

              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="/quote">
                  {t("request")}
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="/contact">
                  {t("contact")}
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="/about">
                  {t('about')}
                </a>
              </li>

            </ul>
            <div className="d-flex" role="search">
              <button type="button"
                      className="btn btn-dark d-flex
                      align-items-center justify-content-center"
                      style={{ color: "#9B9D9E" }}
                      onClick={() => {
                        LanguageSwitcher(lng);
                      }}>
                <i className={`bi bi-translate pe-2 
                ${animate ? "animate__animated animate__jello" : ""}`}>
                </i>
                <p className={`mb-0 ${animate ? "animate__animated animate__jello" : ""}`}>
                  {lng === "en" ? "Español" : "English"}
                </p>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </>;
};


