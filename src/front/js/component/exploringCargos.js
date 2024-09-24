import React from "react";
import { useNavigate } from "react-router-dom";
import boat from "../../img/containers-boat-2421992563.jpg";
import truck from "../../img/green-truck1.jpg";
import { useTranslation } from "react-i18next";


export const ExploringCargos = ({
                                  theme, title, body, subject, imageSubject,
                                  exploreImage1, exploreImage2, exploreTitle1,
                                  exploreTitle2
                                }) => {

  const navigate = useNavigate();
  const { t } = useTranslation();
  const handlerNavigate = (position) => {
    if (subject === "ground") {
      if (position === 1)
        navigate("/ocean-cargo");
      else
        navigate("/air-cargo");
    } else if (subject === "ocean") {
      if (position === 1)
        navigate("/air-cargo");
      else
        navigate("/ground-cargo");
    } else if (subject === "air") {
      if (position === 1)
        navigate("/ground-cargo");
      else
        navigate("/ocean-cargo");
    }
  };

  return <>
    <div className="cargo-banner"
         style={{
           height: "25rem",
           backgroundImage: `url(${imageSubject})`,
           backgroundSize: "cover",
           backgroundPosition: "center"
         }}>
      <div className="overlay">
        <h1>{theme}</h1>
      </div>
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2 className="mb-4">{title}</h2>
          {body}
        </div>
        <div className="col-md-6">
          <div className="container">
            <div className="row">
              <div className="col p-0">
                <div className="card text-center card-mosaic ">
                  <div className="card-body"
                       style={{
                         height: "15rem",
                         backgroundImage: `url(${imageSubject})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center"
                       }}>
                  </div>
                  <button className="btn btn-home-primary"
                          onClick={() => navigate("/quote")}>
                    <b>{t("request")}</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col p-0 ">
                <div className="card card-mosaic">
                  <div className="card-body"
                       style={{
                         height: "10rem",
                         backgroundImage: `url(${exploreImage1})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center"
                       }}>
                  </div>
                  <button type="button" className="btn btn-secondary
                   btn-previous" onClick={() => handlerNavigate(1)}>
                    <b>{exploreTitle1}</b>
                  </button>
                </div>
              </div>
              <div className="col p-0 ">
                <div className="card text-end card-mosaic">
                  <div className="card-body"
                       style={{
                         height: "10rem",
                         backgroundImage: `url(${exploreImage2})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center"
                       }}>
                  </div>
                  <button type="button" className="btn btn-secondary
                  btn-previous" onClick={() => handlerNavigate(2)}>
                    <b>{exploreTitle2}</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8" />
      </div>
    </div>
  </>;
};
