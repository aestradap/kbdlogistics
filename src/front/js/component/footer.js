import React, { useRef, useState } from "react";
import { Preview } from "./Quote/Preview";
import { useTranslation } from "react-i18next";

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
      <div className="row m-0">
        <div className="col d-flex justify-content-center align-items-center">
          <i className="bi bi-phone-vibrate p-2"
             style={{ fontSize: "1rem", color: "#00A651" }} />
          <p style={{ margin: 0, color: "#00A651" }}>
            <strong>+1 (786) 289-1398</strong>
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
          <a className="float-end" href="#">
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
            Privacy
          </a>
          &middot;
          <a style={{ color: "#00A651" }} href="#">
            Terms
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
              <h3>
                <b>Privacy Policy and Terms of Service</b>
              </h3>

              <hr style={{ color: "#00A651", marginTop: 5 }} />

              <p><strong>1. Introduction:</strong></p>
              <p>Welcome to K&BD LOGISTICS INC, your trusted partner in logistics and shipping solutions. We are
                committed to protecting your privacy and providing you with a safe online experience. By using our
                website, you agree to the following terms and conditions.</p>

              <p><strong>2. Data Collection and Usage:</strong></p>
              <p>We collect personal information such as name, email, phone number, and shipping details when you
                request a quote or service. This data is used solely to process your requests, improve our services,
                and communicate with you regarding your logistics needs. We do not sell or share your information with
                third parties without your consent, except as required by law.</p>

              <p><strong>3. Cookies and Tracking:</strong></p>
              <p>Our website uses cookies to enhance your browsing experience and analyze site traffic. By continuing
                to use our site, you consent to our use of cookies. You may disable cookies in your browser settings,
                but this may affect the functionality of the site.</p>

              <p><strong>4. Data Security:</strong></p>
              <p>We implement industry-standard security measures to protect your data from unauthorized access,
                disclosure, or destruction. However, no method of transmission over the internet is completely secure,
                and we cannot guarantee absolute security.</p>

              <p><strong>5. User Responsibilities:</strong></p>
              <p>As a user, you agree to provide accurate information when using our services. You are responsible for
                maintaining the confidentiality of your account details and for any activities conducted under your
                account.</p>

              <p><strong>6. Limitation of Liability:</strong></p>
              <p>K&BD LOGISTICS INC is not liable for any indirect, incidental, or consequential damages arising from
                your use of our website or services. We strive to provide accurate and timely information, but we do
                not guarantee the completeness or reliability of the content on our site.</p>

              <p><strong>7. Changes to the Privacy Policy and Terms:</strong></p>
              <p>We may update our Privacy Policy and Terms of Service from time to time. Any changes will be posted
                on this page, and your continued use of the site after such changes will constitute your
                acceptance.</p>

              <p><strong>8. Contact Information:</strong></p>
              <p style={{ margin: 0, color: "#00A651" }}>
                If you have any questions or concerns about our Privacy Policy or Terms of Service, please contact us
                at <strong>Op02@kbdlogistics.com</strong>
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




