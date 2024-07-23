import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { Weight } from "../weight";

export const StepTwo = ({
                          error, formData, handleInputChange,
                          handlePhoneInputChange
                        }) => {

  const { store, actions } = useContext(Context);
  const [service, setService] = useState(formData.service);
  const [movement, setMovement] = useState("Door-to-Door");


  return <>
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col">
          {/*Origen*/}
          <div className="card" style={{ width: "25rem", padding: "2rem" }}>
            <div className="container text-start" style={{ paddingLeft: 0 }}>
              <div className="row">
                <div className="col">
                  <h4 style={{ color: "#00A651" }}>
                    Origin
                  </h4>
                </div>
                <div className="col" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    Address number
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         name="originNumber"
                         value={formData.originNumber}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div id="nameHelp" style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    Street
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         name="originStreet"
                         value={formData.originStreet}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div id="nameHelp" style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    Zip
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         id="validationDefault02"
                         name="originZip"
                         value={formData.originZip}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div id="nameHelp" style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    City
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         name="originCity"
                         value={formData.originCity}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div id="nameHelp" style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    State
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         name="originState"
                         value={formData.originState}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div id="nameHelp" style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    Country
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         name="originCountry"
                         value={formData.originCountry}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div id="nameHelp" style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          {/*Destino*/}
          <div className="card" style={{ width: "25rem", padding: "2rem" }}>
            <div className="container text-start" style={{ paddingLeft: 0 }}>
              <div className="row">
                <div className="col">
                  <h4 style={{ color: "#00A651" }}>
                    Destiny
                  </h4>
                </div>
                <div className="col" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    Address number
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         name="destinyNumber"
                         value={formData.destinyNumber}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    Street
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         name="destinyStreet"
                         value={formData.destinyStreet}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    Zip
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         name="destinyZip"
                         value={formData.destinyZip}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    City
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         name="destinyCity"
                         value={formData.destinyCity}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    State
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         name="destinyState"
                         value={formData.destinyState}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    Country
                  </label>
                  <input style={{ border: error ? "2px solid red" : "" }}
                         type="text" className="form-control"
                         id="validationDefault02"
                         name="name"
                         value={formData.address}
                         onChange={event => {
                           handleInputChange(event);
                         }}
                  />
                  {error ?
                    <div style={{ color: "red" }} className="form-text">
                      This is a required field
                    </div>
                    : <></>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="text-center flex-fill">
            <h4 className="fw-normal" style={{ color: "#00A651" }}>
              Type of Service
            </h4>
          </div>
        </div>

        <div className="col">
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   id="flexRadioService1"
                   name="service"
                   value="ground"
                   checked={service === "ground"}
                   onChange={event => {
                     handleInputChange(event);
                     setService(event.target.value);
                   }}
            />
            <label className="form-check-label" htmlFor="flexRadioService1">
             Ground
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   id="flexRadioService2"
                   name="service"
                   value="air"
                   checked={service === "air"}
                   onChange={event => {
                     handleInputChange(event);
                     setService(event.target.value);
                   }}
            />
            <label className="form-check-label" htmlFor="flexRadioService2">
              Air
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   id="flexRadioService3"
                   name="service"
                   value="ocean"
                   checked={service === "ocean"}
                   onChange={event => {
                     handleInputChange(event);
                     setService(event.target.value);
                   }}
            />
            <label className="form-check-label" htmlFor="flexRadioService3">
              Ocean
            </label>
          </div>
        </div>

        <div className="col">
          <div className="text-center flex-fill">
            <h4 className="fw-normal" style={{ color: "#00A651" }}>
              Movement Types
            </h4>
          </div>
        </div>

        <div className="col">
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   id="flexRadioMovement1"
                   name="movement"
                   value="Door-to-Door"
                   checked={movement === "Door-to-Door"}
                   onChange={event => {
                     handleInputChange(event);
                     setMovement(event.target.value);
                   }}
            />
            <label className="form-check-label" htmlFor="flexRadioMovement1">
              Door-to-Door
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   id="flexRadioMovement2"
                   name="movement"
                   value="Door-to-Port"
                   checked={movement === "Door-to-Port"}
                   onChange={event => {
                     handleInputChange(event);
                     setMovement(event.target.value);
                   }}
            />
            <label className="form-check-label" htmlFor="flexRadioMovement2">
              Door-to-Port
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   id="flexRadioMovement3"
                   name="movement"
                   value="Port-to-Port"
                   checked={movement === "Port-to-Port"}
                   onChange={event => {
                     handleInputChange(event);
                     setMovement(event.target.value);
                   }}
            />
            <label className="form-check-label" htmlFor="flexRadioMovement3">
              Port-to-Port
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   id="flexRadioMovement4"
                   name="movement"
                   value="Port-to-Door"
                   checked={movement === "Port-to-Door"}
                   onChange={event => {
                     handleInputChange(event);
                     setMovement(event.target.value);
                   }}
            />
            <label className="form-check-label" htmlFor="flexRadioMovement4">
              Port-to-Door
            </label>
          </div>
        </div>
      </div>
    </div>
  </>;
};


