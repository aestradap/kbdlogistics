import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import PhoneInput from "react-phone-input-2";


export const StepOne = ({ error, handleError }) => {

  const { store, actions } = useContext(Context);

  const { name, email, address, phone } = store.quote;
  const handleInputChange = (event) => {
    actions.setQuote(event.target.name, event.target.value);
    handleError(false);
  };
  const handlePhoneInputChange = (phone) => {
    actions.setQuote("phone", phone);
  };

  return <>
    <div className="row">
      <div className="col-sm-3">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input style={{ border: error && "2px solid red" }}
                 type="text" className="form-control"
                 id="validationDefault01"
                 name="name"
                 value={name}
                 onChange={event => {
                   handleInputChange(event);
                 }} required
          />
          <div id="nameHelp" className="form-text">
            How do you identify yourself or your company?
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control"
                 id="exampleInputEmail1"
                 style={{ border: error && "2px solid red" }}
                 aria-describedby="emailHelp"
                 name="email"
                 value={email}
                 onChange={event => {
                   handleInputChange(event);
                 }} required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="mb-3">
          <label htmlFor="exampleInputAddress" className="form-label">Address</label>
          <input style={{ border: error && "2px solid red" }}
                 type="text" className="form-control"
                 id="validationDefault02"
                 name="address"
                 value={address}
                 onChange={event => {
                   handleInputChange(event);
                 }}
                 required
          />
          <div id="nameHelp" className="form-text">
            With what address do you or your company register?
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone number
          </label>
          <div className="phone-input-container">
            <PhoneInput
              style={{
                border: error && "2px solid red",
                borderRadius: 4,
                width: "101%"
              }}
              country={"us"}
              name="phone"
              value={phone}
              onChange={(phone) => handlePhoneInputChange(phone)}
              required
            />
          </div>
          <div id="emailHelp" className="form-text">
            Provide a contact phone number.
          </div>
        </div>
      </div>
    </div>
  </>;
};


