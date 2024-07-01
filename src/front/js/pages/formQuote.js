import React, { useState, useEffect, useContext } from "react";
import { Form, Button, ProgressBar } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const FormQuote = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    console.log("FormData",formData);
  };


  return (
    <div className="container marketing">
      <div className="row">
        <form onSubmit={handleSubmit} className="mt-5">
          <h2 className="fw-normal">Request a quote</h2>
          <div className="progress mt-5" role="progressbar" aria-label="Success striped example" aria-valuenow="25"
               aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                 style={{width:step * 350}}/>
          </div>
          <div className="position-relative">
            <div className="position-absolute top-0 start-0">
              <h4 className="fw-normal" style={{color:'#00CF65'}}>Details</h4>
            </div>
            <div className="position-absolute top-0 start-50 translate-middle-x">
              <h4 className="fw-normal" style={{color:'#E9ECEF'}}>
                Preferences
              </h4>
            </div>
            <div className="position-absolute top-0 end-0">
              <h4 className="fw-normal" style={{color:'#E9ECEF'}}>
                Complete
              </h4>
            </div>
          </div>

          {step === 1 && (<>
              <div className="mb-3 mt-5">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <div className="mb-5 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
            </>
          )}
          {step === 2 && (<>
              <div className="input-group mb-3 mt-5">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
              </div>

              <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button">Button</button>
                <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="input-group mb-5">
                <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <button className="btn btn-outline-secondary" type="button">Button</button>
              </div>
            </>
          )}
          {step >= 3 && (<>
              <div className="form-floating my-5">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                          style={{height: 100}}
                          onChange={handleInputChange}
                />
                <label htmlFor="floatingTextarea2">Comments</label>
              </div>
            </>
          )}
          <div className="d-flex justify-content-between">
            {step > 1 && (
              <Button variant="secondary" onClick={handlePrevious}>
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button variant="primary" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button variant="primary"
                      type="submit"
                      onClick={() => {handleNext();}}
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>

  );
};
