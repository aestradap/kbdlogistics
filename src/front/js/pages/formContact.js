import React, { useState, useEffect, useRef } from "react";

const ContactForm = () => {
  const [show, setShow] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de la información, por ejemplo, haciendo una llamada a una API
    console.log("Información enviada:", formData);
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


  useEffect(() => {
    setTimeout(() => {
      showModalContact();
    }, 1000);
  }, []);


  return <div className="mt-5">

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
          </div>
          <div className="modal-body">
            <label className="form-label" style={{ color: "#00A651" }}>
              This contact form is subject to changes.
              Once finalized, this message will be removed.
              <b> :) See you soon ;)</b>.
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
    <div className="contact-form mt-5">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit"
                className="btn btn-lg btn-home-primary">
          Send
        </button>
      </form>
    </div>
  </div>;
};

export default ContactForm;