import React, { useState, useEffect, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../store/appContext";
import contactImage from "../../img/contact-2336591569.jpg";

const ContactForm = () => {

  const { t } = useTranslation();
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const modalContact = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await actions.sendContact(formData);
    if (response) {
      console.log("Success");
      setMsg("Success");
      showModalContact();
    } else {
      console.log("Fail");
      setMsg("Fail");
      showModalContact();
    }
  };

  const showModalContact = () => {
    const modalEle = modalContact.current;
    const bsModal = new bootstrap.Modal(modalEle, {
      backdrop: "static",
      keyboard: false
    });
    bsModal.show();
  };

  const hideModalContact = () => {
    const modalEle = modalContact.current;
    const bsModal = bootstrap.Modal.getInstance(modalEle);
    bsModal.hide();
  };

  return <>
    <div className="cargo-banner"
         style={{
           height: "40rem",
           backgroundImage: `url(${contactImage})`,
           backgroundSize: "cover",
           backgroundPosition: "center"
         }}>
      <div className="overlay">
        <h1>Contact us</h1>
      </div>
    </div>
    <div className="container  mt-5"
         style={{
           minHeight: "calc(100vh - 13rem)", marginBottom: "2rem"
         }}>
      <div show={show} className="modal fade"
           id="exampleModal" tabIndex="-1"
           aria-labelledby="exampleModalLabel"
           aria-hidden="true"
           data-bs-backdrop="static"
           ref={modalContact}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="nav-link active mb-0" style={{ color: "#ffffff" }} aria-current="page" href="#">
                <b>K&BD</b> LOGISTICS INC
              </h4>
              {msg === "Fail" &&
                <i className="bi bi-exclamation-triangle"
                   style={{ fontSize: "2rem", color: "#00A651" }} />
              }
            </div>
            <div className="modal-body">
              <label className="form-label" style={{ color: "#00A651" }}>
                {msg === "Success" ? t("contact_msg2") : (
                  <>
                    {t("contact_msg3")} <strong>Op02@kbdlogistics.com</strong>.
                  </>
                )}
              </label>
            </div>
            <div className="modal-footer">

              <p><a className="btn btn-lg btn-home-primary"
                    onClick={hideModalContact}
              >
                {t("close")}
              </a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center m-5">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center">
              <i className="bi bi-envelope-at p-2"
                 style={{ fontSize: "3rem", color: "#00A651" }} />
              <h3 style={{ color: "#00A651" }}>
                {t("drop")}
              </h3>
            </div>
            <h4 style={{ color: "#00A651" }}>
              <strong>Op02@kbdlogistics.com</strong>
            </h4>
          </div>

          <div className="col">
            <div className="d-flex justify-content-center align-items-center">
              <i className="bi bi-phone-vibrate p-2"
                 style={{ fontSize: "3rem", color: "#00A651" }} />
              <h3 style={{ color: "#00A651" }}>
                {t('talk')}
              </h3>
            </div>
            <h4 style={{ color: "#00A651" }}>
              <strong>+1 (786) 289-1389</strong>
            </h4>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h4 style={{ color: "#00A651" }}>
          <strong>{t("contact_you")}</strong>
        </h4>
        <label className="form-label"
               style={{ color: "#00A651", textAlign: "justify" }}>
          {t("contact_msg")}
        </label>
      </div>
      <div className="contact-form mt-3 p-0">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              {t("name")}
            </label>
            <input
              type="name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              {t("phone")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              {t("message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit"
                    className="btn btn-lg btn-home-primary">
              {t("send")}
            </button>
          </div>

        </form>
      </div>
    </div>
  </>;
};

export default ContactForm;