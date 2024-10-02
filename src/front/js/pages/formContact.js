import React, { useState, useEffect, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../store/appContext";

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
    // Aquí puedes manejar el envío de la información, por ejemplo, haciendo una llamada a una API
    // const response = await actions.sendContact(formData);
    const response = false;
    if (response) {
      console.log("Success");
      setMsg('Success');
      showModalContact();
    } else {
      console.log("Fail");
      setMsg('Fail');
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

  return <div className="container  mt-5">
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
            {msg === 'Fail' &&
              <i className="bi bi-exclamation-triangle"
                 style={{fontSize: '2rem', color: "#00A651" }} />
            }
          </div>
          <div className="modal-body">
            <label className="form-label" style={{ color: "#00A651" }}>
              {msg === 'Success' ? t("contact_msg2") : (
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
              Close
            </a></p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-5">
      <h2 className="mb-4">{t("contact")}</h2>
      <div className="text-center">
        <label className="form-label"
               style={{ color: "#00A651", textAlign: "justify" }}>
          {t("contact_msg")}
        </label>
      </div>
      <div className="contact-form mt-3">
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

  </div>;
};

export default ContactForm;