import React, { useState, useEffect, useContext, useRef } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import "../../styles/ProgressBarSteps.css";
import validator from "validator";

import { Context } from "../store/appContext";
import { StepOne } from "../component/Quote/StepOne";
import { StepTwo } from "../component/Quote/StepTwo";
import { StepThree } from "../component/Quote/StepThree";
import { StepFour } from "../component/Quote/StepFour";
import { Preview } from "../component/Quote/Preview";

export const FormQuote = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(store.quote);
    const [error, setError] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const modalPreview = useRef();

    const showModalPreview = () => {
      const modalEle = modalPreview.current;
      const bsModal = new bootstrap.Modal(modalEle, {
        backdrop: "static",
        keyboard: false
      });
      bsModal.show();
    };

    const hideModal = () => {
      const modalEle = modalPreview.current;
      const bsModal = bootstrap.Modal.getInstance(modalEle);
      bsModal.hide();
    };

    const handleNext = (event) => {
      event.preventDefault();
      const form = event.target.form;
      if (form.checkValidity() === false) {
        form.reportValidity();
        return;
      }
      console.log("ERROR", error);
      setStep(step + 1);
    };


    const handleError = () => {
      if (step === 1) {
        if (store.quote.name === "" ||
          store.quote.email === "" ||
          store.quote.address === "" ||
          store.quote.phone === "") {
          setError(true);
        } else {
          localStorage.setItem("name", store.quote.name);
          localStorage.setItem("address", store.quote.address);
          localStorage.setItem("email", store.quote.email);
          localStorage.setItem("phone", store.quote.phone);

          console.log("MY QUOTE", store.quote);
        }
      } else if (step === 2) {
        if (store.quote.originAddress === "" ||
          store.quote.originZip === "" ||
          store.quote.originCity === "" ||
          store.quote.originState === "" ||
          store.quote.originCountry === "" ||
          store.quote.destinyAddress === "" ||
          store.quote.destinyZip === "" ||
          store.quote.destinyCity === "" ||
          store.quote.destinyState === "" ||
          store.quote.destinyCountry === "") {
          setError(true);
        } else {
          localStorage.setItem("originAddress", store.quote.originAddress);
          localStorage.setItem("originZip", store.quote.originZip);
          localStorage.setItem("originCity", store.quote.originCity);
          localStorage.setItem("originState", store.quote.originState);
          localStorage.setItem("originCountry", store.quote.originCountry);
          localStorage.setItem("destinyAddress", store.quote.destinyAddress);
          localStorage.setItem("destinyZip", store.quote.destinyZip);
          localStorage.setItem("destinyCity", store.quote.destinyCity);
          localStorage.setItem("destinyState", store.quote.destinyState);
          localStorage.setItem("destinyCountry", store.quote.destinyCountry);
          localStorage.setItem("movement", store.quote.movement);
          localStorage.setItem("service", store.quote.service);

          console.log("MY QUOTE", store.quote);
        }
      } else if (step === 3 && store.quote.service === "ground") {
        if (store.quote.groundCategory === "LTL") {
          if (store.quote.groundLtlAmount === "" ||
            store.quote.manyDifDimeCargo === "") {
            setError(true);
          } else {
            localStorage.setItem("groundCategory", store.quote.groundCategory);
            localStorage.setItem("groundLtlAmount", store.quote.groundLtlAmount);
            const dimensionsString = JSON.stringify(store.quote.manyDifDimeCargo);
            localStorage.setItem("manyDifDimeCargo", dimensionsString);

            console.log("MY QUOTE", store.quote);
          }
        } else if (store.quote.groundCategory === "Full truck") {
          if (store.quote.groundFullTruckEquipment === "" ||
            store.quote.groundFullTruckTrailerSize === "") {
            setError(true);
          } else {
            localStorage.setItem("groundFullTruckEquipment",
              store.quote.groundFullTruckEquipment);
            localStorage.setItem("groundFullTruckTrailerSize",
              store.quote.groundFullTruckTrailerSize);
          }

        } else if (store.quote.groundCategory === "Drayage") {
          if (store.quote.groundDrayageEquipmentSize === "" ||
            store.quote.groundDrayageEquipmentType === "") {
            setError(true);
          } else {
            localStorage.setItem("groundFullTruckEquipment",
              store.quote.groundFullTruckEquipment);
            localStorage.setItem("groundFullTruckTrailerSize",
              store.quote.groundFullTruckTrailerSize);
          }
        }

      } else console.log("Estoy fuera del step 1");
      console.log("MY QUOTE", store.quote);

    };


    const handlePrevious = () => {
      setStep(step - 1);
    };

    const handleStepClick = (stepNumber) => {
      setStep(stepNumber);
    };


    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

    const handlePhoneInputChange = (number) => {
      setFormData({ ...formData, ["phone"]: number });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      // handle form submission
      console.log("MyQuote-after-send: ",store.quote);
      const response = await actions.sendQuote();
      // if ( validator.isEmpty(formData[name]) ) {
      //   setError(true);
      // } else {
      //   console.log("FormData",formData);
      // }
      return response;
    };

    return <>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
      </svg>

      <div className="container  mt-5">
        {error &&
          <div className="alert alert-danger d-flex align-items-center
           justify-content-center" role="alert">
            <svg className="bi flex-shrink-0 me-2"
                 width="24" height="24" role="img" aria-label="Danger:">
              <use href="#exclamation-triangle-fill" />
            </svg>
            <div>
              All fields are required, be sure to fill each space with specific information!
            </div>
          </div>
        }
        <h2 className="fw-normal" style={{ marginBottom: "2rem" }}>
          Request a quote
        </h2>
        <div className="position-relative m-4">
          <div className="progress" role="progressbar"
               aria-label="Animated striped example" aria-valuenow="75"
               aria-valuemin="0" aria-valuemax="50">
            <div className="progress-bar progress-bar-striped
                    progress-bar-animated bg-success"
                 style={{
                   width: step === 1 ?
                     "0%" : step === 2 ?
                       "25%" : step === 3 ?
                         "50%" : step === 4 ?
                           "75%" : "100%"
                 }}></div>
          </div>
          <button type="button"
                  className="position-absolute top-0
                 translate-middle btn btn-sm btn-quote-progress rounded-pill"
                  style={{ left: "0%" }}
                  onClick={() => handleStepClick(1)}
          >1
          </button>
          <button type="button"
                  className="position-absolute top-0
                 translate-middle btn btn-sm btn-quote-progress rounded-pill"
                  style={{ left: "25%" }}
                  onClick={() => handleStepClick(2)}
          >2
          </button>
          <button type="button"
                  className="position-absolute top-0
                translate-middle btn btn-sm btn-quote-progress rounded-pill"
                  style={{ left: "50%" }}
                  onClick={() => handleStepClick(3)}
          >3
          </button>
          <button type="button"
                  className="position-absolute top-0
                translate-middle btn btn-sm btn-quote-progress rounded-pill"
                  style={{ left: "75%" }}
                  onClick={() => handleStepClick(4)}
          >4
          </button>

        </div>
        <div className="d-flex justify-content-between position-relative">
          <div className="text-center flex-fill">
            <h4 className="fw-normal" style={{ color: "#00A651" }}>
              Info
            </h4>
          </div>
          <div className="text-center flex-fill">
            <h4 className="fw-normal" style={{ color: "#00A651" }}>
              Details
            </h4>
          </div>
          <div className="text-center flex-fill">
            <h4 className="fw-normal" style={{ color: "#00A651" }}>
              Preferences
            </h4>
          </div>
          <div className="text-center flex-fill">
            <h4 className="fw-normal" style={{ color: "#00A651" }}>
              Complete
            </h4>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-5">

          {/*step1*/}
          {step === 1 && (<>
              <StepOne error={error} handleError={setError} />
            </>
          )}

          {/*step2*/}
          {step === 2 && (<>
              <StepTwo error={error} handleError={setError} />
            </>
          )}

          {/*step3*/}
          {step === 3 && (<>
              <StepThree error={error} handleError={setError} />
            </>
          )}

          {/*step4*/}
          {step >= 4 && (<>
              <StepFour handleInputChange={handleInputChange} />
            </>
          )}

          <div className="d-flex justify-content-between mt-5">
            {step > 1 && (
              <button type="button" className="btn btn-secondary btn-previous"
                      onClick={handlePrevious}>
              Previous
              </button>
            )}
            {step < 4 ? (
              <button className="btn btn-home-primary"
                      onClick={(event) => {
                        handleError();
                        handleNext(event);
                      }}>
                Next
              </button>
            ) :
              <button variant="btn btn-home-primary"
                      onClick={() => {
                        // handleNext();
                        showModalPreview();
                      }}
              >
                Preview
              </button>
            }
          </div>
          <div show={showPreview}
               aria-hidden="true"
               className="modal fade"
               data-bs-backdrop="static"
               aria-labelledby="exampleModalLabel"
               ref={modalPreview}
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
                          data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div className="modal-body">
                  <Preview />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary"
                          data-bs-dismiss="modal">
                    Close
                  </button>
                  <Button variant="primary btn-home-primary"
                          type="submit"
                          onClick={() => {
                            // handleNext();
                            showModalPreview();

                          }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>;
  }
;
