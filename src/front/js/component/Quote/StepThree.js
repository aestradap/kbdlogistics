import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { Weight } from "../weight";

export const StepThree = ({
                            error, formData, handleInputChange, currentService,
                            handlePhoneInputChange
                          }) => {

  const { store, actions } = useContext(Context);
  const [groundCategory, setGroundCategory] = useState("LTL");
  const [oceanCategory, setOceanCategory] = useState("LCL");
  const [service, setService] = useState(formData.service);

  return <>
    <nav>
      <div className="nav nav-tabs"
           id="nav-tab" role="tablist"
      >
        {service === "ground" ?
          <button className="nav-link active" id="nav-ground-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-ground"
                  type="button" role="tab" aria-controls="nav-ground"
                  aria-selected="true">
            Ground
          </button> : <></>
        }
        {service === "air" ?
          <button className="nav-link active" id="nav-ground-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-ground"
                  type="button" role="tab" aria-controls="nav-ground"
                  aria-selected="true">
            Air
          </button> : <></>
        }
        {service === "ocean" ?
          <button className="nav-link active" id="nav-ground-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-ground"
                  type="button" role="tab" aria-controls="nav-ground"
                  aria-selected="true">
            Ocean
          </button> : <></>
        }
      </div>
    </nav>

    <div className="tab-content" id="nav-tabContent">
      {service === "ground" ?
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
        : service === "air" ?
          <>
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
          </>
          : <>   {/*Ocean*/}
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

                    <div className="col-sm-4 mb-3 mt-3" />
                    <div className="col-sm-4 mb-3 mt-3">
                      <label className="form-label">Comority</label>
                      <input type="text" className="form-control"
                             style={{ border: error ? "2px solid red" : "" }}
                             aria-describedby="weight"
                      />
                      {error ? (
                        <div id="nameHelp" style={{ color: "red" }} className="form-text">This is a required
                          field</div>
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
          </>
      }
    </div>
  </>;
};


