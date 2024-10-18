import React, { useRef, useState } from "react";
import { Preview } from "./Quote/Preview";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();
  const [showTerms, setTerms] = useState(false);
  const modalTerms = useRef();

  const showModalTerms = () => {
    const modalEle = modalTerms.current;
    const bsModal = new bootstrap.Modal(modalEle, {
      backdrop: "static",
      keyboard: false
    });
    bsModal.show();
  };

  const hideModalTerms = () => {
    const modalEle = modalTerms.current;
    const bsModal = bootstrap.Modal.getInstance(modalEle);
    bsModal.hide();
  };

  return <>
    <footer className="footer py-3 text-center bg-dark">
      <div className="row m-0 row-mobile-column">
        <div className="col d-flex justify-content-center align-items-center">
          <i className="bi bi-phone-vibrate p-2"
             style={{ fontSize: "1rem", color: "#00A651" }} />
          <p style={{ margin: 0, color: "#00A651" }}>
            <strong>+1 (786) 389-1398</strong>
          </p>
        </div>

        <div className="col d-flex justify-content-center align-items-center">
          <i className="bi bi-envelope-at p-2"
             style={{ fontSize: "1rem", color: "#00A651" }} />
          <p style={{ margin: 0, color: "#00A651" }}>
            <strong>Op02@kbdlogistics.com</strong>
          </p>

        </div>

        <div className="col">
          <a className="float-end" href="#" onClick={() => window.scrollTo(0, 0)}>
            <i
              className="bi bi-arrow-up-circle"
              style={{ fontSize: "2rem", color: "#00A651" }}
            ></i>
          </a>
        </div>
      </div>

      <div className="row m-0">
        <p style={{ color: "#ffffff" }} onClick={showModalTerms}>
          &copy; 2024 K&BD LOGISTICS INC. &middot;
          <a style={{ color: "#00A651" }} href="#">
            {t("privacy")}
          </a>
          &middot;
          <a style={{ color: "#00A651" }} href="#">
            {t("terms")}
          </a>
        </p>
      </div>
    </footer>

    <div show={showTerms}
         aria-hidden="true"
         className="modal fade"
         data-bs-backdrop="static"
         aria-labelledby="exampleModalLabel"
         ref={modalTerms}
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="nav-link active mb-0 p-0"
                style={{ color: "#ffffff" }}
                aria-current="page" href="#"
            >
              <b>K&BD</b> LOGISTICS INC
            </h4>
            <button type="button" className="btn-close"
                    data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">

            <div className="scrollspy-example bg-body-tertiary rounded-2"
                 style={{ textAlign: "justify" }}>
              <h3 style={{ textAlign: "start !important" }}>
                <b>Privacy Policy and Terms of Service</b>
              </h3>

              <hr style={{ color: "#00A651", marginTop: 5 }} />

              <p><strong>{t("one_title")}</strong></p>
              <p>{t("one_msg")}</p>

              <p><strong>{t("two_title")}</strong></p>
              <p>{t("two_msg")}</p>

              <p><strong>{t("three_title")}</strong></p>
              <p>{t("three_msg")}</p>

              <p><strong>{t("four_title")}</strong></p>
              <p>{t("four_msg")}</p>

              <p><strong>{t("five_title")}</strong></p>
              <p>{t("five_msg")}</p>

              <p><strong>{t("six_title")}</strong></p>
              <p>{t("six_msg")}</p>

              <p><strong>{t("seven_title")}</strong></p>
              <p>{t("seven_msg")}</p>

              <p><strong>{t("eight")}</strong></p>
              <p style={{
                margin: 0, color: "#00A651",
                textAlign: "start !important"
              }}>
                {t("eight_msg")}
                <Link to="/contact" style={{ color: "#00A651" }}
                      onClick={hideModalTerms}>
                  <strong>Op02@kbdlogistics.com</strong>
                </Link>
              </p>

              <hr style={{ color: "#00A651", marginTop: 5 }} />
            </div>
          </div>

          <div className="modal-footer">

            <button type="button" className="btn btn-secondary"
                    onClick={() => {
                      hideModalTerms();
                    }}
                    data-bs-dismiss="modal">
              {t("close")}
            </button>
          </div>
        </div>
      </div>
    </div>
  </>;

};




