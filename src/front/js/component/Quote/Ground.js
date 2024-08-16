import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { Weight } from "../weight";
import { target } from "bc-console/webpack.config";

export const Ground = ({ error, handleError }) => {

    const { store, actions } = useContext(Context);
    const {
      groundLtlAmount, groundCategory,
      groundLtlManyCargoes, manyDifDimeCargo
    } = store.quote;
    const dimensions = {
      long: "",
      high: "",
      wide: "",
      weight: ""
    };

    const many = store.quote.manyDifDimeCargo.length > 1 ? true : false;

    const handleInputChange = (event) => {
      actions.setQuote(event.target.name, event.target.value);
      handleError(false);
    };


    const handleAmount = (event) => {
      if (groundLtlManyCargoes) {
        if (groundLtlAmount > event.target.value) {

          const cargoDimensions = [...store.quote.manyDifDimeCargo];
          const minusOne = cargoDimensions.slice(0, cargoDimensions.length - 1);
          actions.setManyDifDimeCargo(minusOne);

        } else if (groundLtlAmount < event.target.value) {
          handleManyCargoes(1);
        }
      }
      actions.setAmount(event.target.value);

    };

    const handleManyCargoes = (groundAmount) => {
      let cargoDimensions = [...store.quote.manyDifDimeCargo];
      for (let i = 0; i < groundAmount; i++) {
        cargoDimensions.push(dimensions);
      }
      actions.setManyDifDimeCargo(cargoDimensions);
    };

    const handleDimensions = (groundAmount) => {
      let cargoDimensions = [...store.quote.manyDifDimeCargo];

      if (groundAmount === 1) {
        if (!groundLtlManyCargoes) {
          actions.setAmount(2);
          handleManyCargoes(1);
        } else {
          cargoDimensions = cargoDimensions.slice(0, 1);
          actions.setManyDifDimeCargo(cargoDimensions);
        }
      } else if (!groundLtlManyCargoes) {
        handleManyCargoes(groundAmount - 1);
      } else {
        cargoDimensions = cargoDimensions.slice(0, 1);
        actions.setManyDifDimeCargo(cargoDimensions);
      }

      actions.setQuote("groundLtlManyCargoes", !groundLtlManyCargoes);
    };


    return <>
      <div className="row">
        <div className="col-sm-2 mb-3 mt-5">
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   id="flexGroundCategory1"
                   name="groundCategory"
                   value="Full truck"
                   checked={groundCategory === "Full truck"}
                   onChange={event => {
                     handleInputChange(event);
                   }}
            />
            <label className="form-check-label" htmlFor="flexGroundCategory1">
              Full truck
            </label>

          </div>

          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   id="flexGroundCategory2"
                   name="groundCategory"
                   value="LTL"
                   checked={groundCategory === "LTL"}
                   onChange={event => {
                     handleInputChange(event);
                   }}
            />
            <label className="form-check-label" htmlFor="flexGroundCategory2">
              LTL
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   id="flexGroundCategory3"
                   name="groundCategory"
                   value="Drayage"
                   checked={groundCategory === "Drayage"}
                   onChange={event => {
                     handleInputChange(event);
                   }}
            />
            <label className="form-check-label" htmlFor="flexGroundCategory3">
              Drayage
            </label>
          </div>
        </div>

        {/*LTL*/}
        {groundCategory === "LTL" ? <>
            <div className="col-sm-4 mb-3 mt-5">
              <label className="form-label">Amount</label>
              <input style={{ border: error && "2px solid red" }}
                     type="number" className="form-control"
                     name="groundLtlAmount"
                     min="1"
                     value={groundLtlAmount}
                     onChange={event => {
                       handleAmount(event);
                     }}
              />
            </div>
            <div className="col-sm-6 mb-3 mt-5
           d-flex justify-content-center align-items-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox"
                       checked={groundLtlManyCargoes}
                       name="groundLtlManyCargoes"
                       id="flexCheckDefault"
                       onChange={(event) => {
                         handleDimensions(groundLtlAmount);
                       }}

                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Different dimensions for cargoes
                </label>
              </div>
            </div>
            <div className="col mb-3 mt-5">
              <div className="scrollspy-example bg-body-tertiary p-3 rounded-2"
                   style={{ maxHeight: "300px", overflowY: "auto" }}>
                <ol className="list-group list-group-numbered">
                  {manyDifDimeCargo && store.quote.manyDifDimeCargo.length ?
                    store.quote.manyDifDimeCargo.map((item, i) => (
                      <Dimension error={error}
                                 handleError={handleError}
                                 key={i}
                                 myKey={i}
                                 value={item}
                      />
                    ))
                    :
                    <Dimension error={error}
                               handleError={handleError}
                               myKey={0}
                    />
                  }
                </ol>
              </div>
            </div>
          </>
          : groundCategory === "Full truck" ? <>
            <div className="col-sm-4 mb-3 mt-5">
              <label className="form-label">
                Equipment
              </label>
              <select className="form-select" aria-label="Default select example"
                      name="groundFullTruckEquipment"
                      onChange={handleInputChange} required
              >
                <option selected>Select One</option>
                <option value="Dry Van / Truckload">Dry Van / Truckload</option>
                <option value="Flatbed / Stepdeck">Flatbed / Stepdeck</option>
                <option value="Temperature Controlled - Fresh">
                  Temperature Controlled - Fresh
                </option>
                <option value="Temperature Controlled - Frozen">
                  Temperature Controlled - Frozen
                </option>
                <option value="Over Dimensional / Other (RGN, DD, Conestoga, Power Only,Tanker, Hopper, Dump)">
                  Over Dimensional / Other (RGN, DD, Conestoga, Power Only,Tanker, Hopper, Dump)
                </option>
              </select>
            </div>
            <div className="col-sm-4 mb-3 mt-5">
              <label className="form-label">
                TrailerSize
              </label>
              <select className="form-select" aria-label="Default select example"
                      name="groundFullTruckTrailerSize"
                      onChange={handleInputChange} required
              >
                <option selected>Select One</option>
                <option value="40 feet">40 feet</option>
                <option value="45 feet">45 feet</option>
                <option value="48 feet">53 feet</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </> : <>  {/*Drayage*/}
            <div className="col-sm-4 mb-3 mt-5">
              <label className="form-label">
                Equipment Type
              </label>
              <select className="form-select" aria-label="Default select example"
                      name="groundDrayageEquipmentType"
                      style={{ border: error && "2px solid red" }}
                      onChange={handleInputChange}
                      required
              >
                <option value = "" selected>Select One</option>
                <option value="Standard">Standard</option>
                <option value="High Cube">High Cube</option>
                <option value="Refrigerated">Refrigerated</option>
                <option value="Open Top">Open Top</option>
                <option value="Flat Rack">Flat Rack</option>
                <option value="Out of Gauge">Out of Gauge</option>
                <option value="Van Trailer">Van Trailer</option>
              </select>
            </div>
            <div className="col-sm-4 mb-3 mt-5">
              <label className="form-label">
                Equipment Size
              </label>
              <select className="form-select" aria-label="Default select example"
                      name="groundDrayageEquipmentSize"
                      style={{ border: error && "2px solid red" }}
                      onChange={handleInputChange} required
              >
                <option value = "" selected>Select One</option>
                <option value="20 feet">20 feet</option>
                <option value="40 feet">40 feet</option>
                <option value="45 feet">45 feet</option>
                <option value="48 feet">48 feet</option>
                <option value="53 feet">53 feet</option>
              </select>
            </div>
          </>
        }
      </div>
    </>;
  }
;
;


