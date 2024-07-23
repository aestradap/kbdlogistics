import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import PhoneInput from "react-phone-input-2";


export const StepOne = ({ error, formData, handleInputChange,
                          handlePhoneInputChange }) => {

  const { store, actions } = useContext(Context);

  return <>
    <div className="row">
      <div className="col-sm-3">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input style={{ border: error ? "2px solid red" : "" }}
                 type="text" className="form-control"
                 id="validationDefault01"
                 name="name"
                 value={formData.name}
                 onChange={event => {handleInputChange(event)}}
          />
          {error ? (
            <div id="nameHelp" style={{ color: "red" }} className="form-text">
              This is a required field
            </div>
          ) : (
            <div id="nameHelp" className="form-text">
              How do you identify yourself or your company?
            </div>
          )}
        </div>
      </div>
      <div className="col-sm-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="exampleInputEmail1"
                 style={{ border: error ? "2px solid red" : "" }}

                 aria-describedby="emailHelp" />
          {error ? (
            <div id="nameHelp" style={{ color: "red" }} className="form-text">
              This is a required field
            </div>
          ) : (
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          )}

        </div>
      </div>
      <div className="col-sm-3">
        <div className="mb-3">
          <label htmlFor="exampleInputAddress" className="form-label">Address</label>
          <input style={{ border: error ? "2px solid red" : "" }}
                 type="text" className="form-control"
                 id="validationDefault02"
                 name="name"
                 value={formData.address}
                 onChange={event => {handleInputChange(event)}}
          />
          {error ? (
            <div id="nameHelp" style={{ color: "red" }} className="form-text">
              This is a required field
            </div>
          ) : (
            <div id="nameHelp" className="form-text">
              With what address do you or your company register?
            </div>
          )}
        </div>
      </div>
      <div className="col-sm-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone number
          </label>
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 phone-input-container">
            <PhoneInput
              style={{ border: error ? "2px solid red" : "" }}
              country={"us"}
              value={formData.phone}
              onChange={(phone) => handlePhoneInputChange(phone)}
            />
          </div>
          {error ? (
            <div id="nameHelp" style={{ color: "red" }} className="form-text">
              This is a required field
            </div>
          ) : (
            <div id="emailHelp" className="form-text">
              Provide a contact phone number.
            </div>
          )}
        </div>
      </div>
    </div>
  </>;
};


