import React, { useState, useEffect, useContext } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validator from "validator";

import { Context } from "../store/appContext";
import { Dimension } from "../component/dimension";
import { Weight } from "../component/weight";

export const FormQuote = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(store.quote);
  const [groundCategory, setGroundCategory] = useState("LTL");
  const [oceanCategory, setOceanCategory] = useState("LCL");



  const [error, setError] = useState(false);

  const handleNext = () => {
    // if ( validator.isEmpty(store.quote) ) {
    //   setError(true);
    // } else {
    //   setStep(step + 1);
    //   console.log("FormData",formData);
    // }
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneInputChange = (number) => {
    setFormData({ ...formData, ["phone"]: number });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    console.log("FormData", formData);
    // if ( validator.isEmpty(formData[name]) ) {
    //   setError(true);
    // } else {
    //   console.log("FormData",formData);
    // }
  };


  return <>
    <div className="container  mt-5">
      <h2 className="fw-normal">Request a quote</h2>
      <div className="position-relative m-4">
        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75"
             aria-valuemin="0" aria-valuemax="50">
          <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
               style={{ width: step == 1 ? "35%" : step == 2 ? "75%" : "100%" }}></div>
        </div>
        <button type="button"
                className="position-absolute top-0 start-0
                 translate-middle btn btn-sm btn-quote-progress rounded-pill"
        >1
        </button>
        <button type="button"
                className="position-absolute top-0 start-50
                translate-middle btn btn-sm btn-quote-progress rounded-pill"
        >2
        </button>
        <button type="button"
                className="position-absolute top-0 start-100
                translate-middle btn btn-sm  btn-quote-progress rounded-pill"
        >3
        </button>
      </div>
      <div className="position-relative">
        <div className="position-absolute top-0 start-0">
          <h4 className="fw-normal" style={{ color: "#00A651" }}>Details</h4>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x">
          <h4 className="fw-normal" style={{ color: "#00A651" }}>
            Preferences
          </h4>
        </div>
        <div className="position-absolute top-0 end-0">
          <h4 className="fw-normal" style={{ color: "#00A651" }}>
            Complete
          </h4>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5">

        {/*step1*/}
        {step === 1 && (<>
            <div className="row">
              <div className="col-sm-4">
                <div className="mb-3 mt-5">
                  <label htmlFor="exampleInputName" className="form-label">Name</label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         id="validationDefault01"
                         name="name"
                         value={formData.name}
                         onChange={handleInputChange}
                  />
                  {error ? (
                    <div id="nameHelp" style={{ color: "red" }} className="form-text">This is a required field</div>
                  ) : (
                    <div id="nameHelp" className="form-text">How do you identify yourself or your company?</div>
                  )}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3 mt-5">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1"
                         style={{ border: error ? "2px solid red" : "" }}

                         aria-describedby="emailHelp" />
                  {error ? (
                    <div id="nameHelp" style={{ color: "red" }} className="form-text">This is a required field</div>
                  ) : (
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  )}

                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3 mt-5">
                  <label htmlFor="exampleInputEmail1" className="form-label">Phone number</label>
                  <div className="col-12 col-sm-8 col-md-6 col-lg-4 phone-input-container">
                    <PhoneInput
                      style={{ border: error ? "2px solid red" : "" }}
                      country={"us"}
                      value={formData.phone}
                      onChange={(phone) => handlePhoneInputChange(phone)}
                    />
                  </div>
                  {error ? (
                    <div id="nameHelp" style={{ color: "red" }} className="form-text">This is a required field</div>
                  ) : (
                    <div id="emailHelp" className="form-text">Provide a contact phone number.</div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/*step2*/}
        {step === 2 && (<>

            <nav>
              <div style={{ marginTop: "5rem" }} className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-ground-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-ground"
                        type="button" role="tab" aria-controls="nav-ground" aria-selected="true">Ground
                </button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-air"
                        type="button" role="tab" aria-controls="nav-air" aria-selected="false">Air
                </button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-ocean"
                        type="button" role="tab" aria-controls="nav-ocean" aria-selected="false">Ocean
                </button>
                <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled"
                        type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled
                </button>
              </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">

              {/*ground*/}
              <div className="tab-pane fade show active" id="nav-ground"
                   role="tabpanel" aria-labelledby="nav-ground-tab" tabIndex="0">
                <div className="row">
                  <div className="col-sm-4 mb-3 mt-5">
                    <div className="form-check">
                      <input className="form-check-input"
                             type="radio"
                             id="flexRadioDefault1"
                             name="groundCategory"
                             value="Full truck"
                             checked={groundCategory === "Full truck"}
                             onChange={event => {
                               handleInputChange(event);
                               setGroundCategory(event.target.value);
                             }}
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Full truck
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input"
                             type="radio"
                             id="flexRadioDefault2"
                             name="groundCategory"
                             value="LTL"
                             checked={groundCategory === "LTL"}
                             onChange={event => {
                               handleInputChange(event);
                               setGroundCategory(event.target.value);
                             }}
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        LTL
                      </label>
                    </div>
                  </div>
                  {groundCategory === "LTL"
                    ? <>
                      <div className="col-sm-4 mb-3 mt-5">
                        <Dimension error={error} formData={formData} handlerInput={handleInputChange} />
                      </div>
                      <div className="col-sm-4 mb-3 mt-5">
                        <Weight error={error} formData={formData} handlerInput={handleInputChange} />
                      </div>
                    </>
                    : <>
                      <div className="col-sm-6 mb-3 mt-5">
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Transportation area</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </>
                  }
                </div>
              </div>

              {/*air*/}
              <div className="tab-pane fade" id="nav-air"
                   role="tabpanel" aria-labelledby="nav-air-tab" tabIndex="0">
                <div className="row mb-3 mt-5">
                  <div className="row">
                    <div className="col-sm-4 mb-3 ">
                      <label htmlFor="exampleInputName" className="form-label">Product</label>
                      <input style={{ border: error ? "2px solid red" : "" }}
                             type="text" className="form-control"
                             id="validationDefault01"
                             name="type"
                             value={formData.type}
                             onChange={handleInputChange}
                      />
                      {error ? (
                        <div id="nameHelp" style={{ color: "red" }} className="form-text">This is a required field</div>
                      ) : (
                        <div id="nameHelp" className="form-text">Define, what kind of product?</div>
                      )}
                    </div>
                    <div className="col-sm-4 mb-3 ">
                      <Dimension error={error} formData={formData} handlerInput={handleInputChange} />
                    </div>
                    <div className="col-sm-4 mb-3 ">
                      <Weight error={error} formData={formData} handlerInput={handleInputChange} />
                    </div>
                    <div className="col" />
                    <div className="col-sm-4 mb-3 mt-3">
                      <label htmlFor="exampleInputName" className="form-label">4-OPCT</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Transportation area</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col" />
                  </div>
                </div>
              </div>

              {/*ocean*/}
              <div className="tab-pane fade" id="nav-ocean"
                   role="tabpanel" aria-labelledby="nav-ocean-tab" tabIndex="0">
                <div className="row">
                  <div className="col-sm-4 mb-3 mt-5">
                    <div className="form-check">
                      <input className="form-check-input"
                             type="radio"
                             id="flexRadioDefault3"
                             name="oceanCategory"
                             value="Full container"
                             checked={oceanCategory === "Full container"}
                             onChange={event => {
                               handleInputChange(event);
                               setOceanCategory(event.target.value);
                             }}
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault3">
                        Full container
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input"
                             type="radio"
                             id="flexRadioDefault4"
                             name="oceanCategory"
                             value="LCL"
                             checked={oceanCategory === "LCL"}
                             onChange={event => {
                               handleInputChange(event);
                               setOceanCategory(event.target.value);
                             }}
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault4">
                        LCL
                      </label>
                    </div>
                  </div>
                  {oceanCategory === "LCL"
                    ? <>
                      <div className="col-sm-4 mb-3 mt-5">
                        <Dimension error={error} formData={formData} handlerInput={handleInputChange} />
                      </div>
                      <div className="col-sm-4 mb-3 mt-5">
                        <Weight error={error} formData={formData} handlerInput={handleInputChange} />
                      </div>

                      <div className="col-sm-4 mb-3 mt-3"/>
                      <div className="col-sm-4 mb-3 mt-3">
                        <label className="form-label">Comority</label>
                        <input type="text" className="form-control"
                               style={{ border: error ? "2px solid red" : "" }}
                               aria-describedby="weight"
                        />
                        {error ? (
                          <div id="nameHelp" style={{ color: "red" }} className="form-text">This is a required field</div>
                        ) : (
                          <div id="emailHelp" className="form-text">Entender bien q es la comority?</div>
                        )}
                      </div>
                      <div className="col-sm-4 mb-3 mt-3">
                        <label htmlFor="exampleInputName" className="form-label">4-OPCT</label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Entender q es opct</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </>
                    : <>
                      <div className="col-sm-6 mb-3 mt-5">
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Transportation area</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </>
                  }
                </div>
              </div>
              <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab"
                   tabIndex="0">...
              </div>
            </div>
          </>
        )}

        {/*step3*/}
        {step >= 3 && (<>
            <div className="form-floating my-5">
                    <textarea className="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea2"
                              style={{ height: 100 }}
                              onChange={handleInputChange}
                    />
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>
          </>
        )}
        <div className="d-flex justify-content-between mt-5">
          {step > 1 && (
            <Button variant="secondary" onClick={handlePrevious}>
              Previous
            </Button>
          )}
          {step < 3 ? (
            <Button variant="primary" type="submit" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="primary"
                    type="submit"
                    onClick={() => {
                      handleNext();
                    }}
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  </>;
};
