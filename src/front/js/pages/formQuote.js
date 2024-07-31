import React, { useState, useEffect, useContext } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import '../../styles/ProgressBarSteps.css';
import validator from "validator";

import { Context } from "../store/appContext";
import { StepOne } from "../component/Quote/StepOne";
import { StepTwo } from "../component/Quote/StepTwo";
import { StepThree } from "../component/Quote/StepThree";
import { StepFour } from "../component/Quote/StepFour";

export const FormQuote = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(store.quote);


  const [error, setError] = useState(false
  );

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
      <h2 className="fw-normal" style={{marginBottom:'2rem'}}>Request a quote</h2>
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
            <StepOne error={error}
                     formData={formData}
                     handleInputChange={handleInputChange}
                     handlePhoneInputChange={handlePhoneInputChange}
            />
          </>
        )}

        {/*step2*/}
        {step === 2 && (<>
            <StepTwo error={error}
                       formData={formData}
                       handleInputChange={handleInputChange}
                       handlePhoneInputChange={handlePhoneInputChange}
            />
          </>
        )}

        {/*step3*/}
        {step === 3 && (<>
            <StepThree error={error}
                       formData={formData}
                       handleInputChange={handleInputChange}
                       handlePhoneInputChange={handlePhoneInputChange}
            />
          </>
        )}

        {/*step4*/}
        {step >= 4 && (<>
            <StepFour handleInputChange={handleInputChange} />
          </>
        )}

        <div className="d-flex justify-content-between mt-5">
          {step > 1 && (
            <p><a className="btn btn-secondary btn-previous" type="submit"
                  onClick={handlePrevious}>
              previous
            </a></p>
            // <button type="button" className="btn btn-secondary"
            //         onClick={handlePrevious}>
            //   previousss
            // </button>
          )}
          {step < 4 ? (
              <p><a className="btn btn-home-primary" type="submit"
                    onClick={handleNext}>
                Next
              </a></p>
            // <Button variant="primary" type="submit" onClick={handleNext}>
            //   Next
            // </Button>
          ) : (
            <p><a className="btn btn-home-primary" type="submit"
                  onClick={handleNext}>
              Submit
            </a></p>
            // <Button variant="primary"
            //         type="submit"
            //         onClick={() => {
            //           handleNext();
            //         }}
            // >
            //   Submit
            // </Button>
          )}
        </div>
      </form>
    </div>
  </>;
};
