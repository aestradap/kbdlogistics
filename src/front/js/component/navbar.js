import React from "react";
import artboartLogo from "../../img/Artboard.png";
import AboutUs from "../pages/aboutUs";


export const Navbar = () => {
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
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <h2 className="nav-link active mb-0 pe-4"
                    style={{color:"#ffffff"}} aria-current="page" href="#">
                  <b>K&BD</b> LOGISTICS INC
                </h2>
              </li>

              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="/quote">
                  Request a quote
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  </>;
};


