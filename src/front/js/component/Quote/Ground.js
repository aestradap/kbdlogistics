import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { Weight } from "../weight";

export const Ground = ({
                         error, formData, handleInputChange, currentService,
                         handlePhoneInputChange
                       }) => {

  const { store, actions } = useContext(Context);
  const { amount } = store.quote;
  const [groundCategory, setGroundCategory] = useState("LTL");
  const [differentDimensions, setDifferentDimensions] = useState(false);
  const dimensions = {
    long: "",
    high: "",
    wide: "",
    weight: ""
  };
  const many = store.quote.ltlManyDifDimeCargo.length > 1 ? true : false;


  const handleAmount = (event) => {
    if (differentDimensions) {
      handleManyCargoes(event.target.value, differentDimensions);
      handleInputChange(event);
      actions.setAmount(event.target.value);
    } else {
      handleInputChange(event);
      actions.setAmount(event.target.value);
    }
  };

  const handleManyCargoes = (amount, manyDimensions) => {
    const cargoDimensions = [];
    if (amount == 1) {
      setDifferentDimensions(false);
    } else if (amount == 1 && !differentDimensions) {
      setDifferentDimensions(false);
    }
    if (manyDimensions && amount > 1) {

      for (let i = 1; i <= amount; i++) {
        cargoDimensions.push(dimensions);
      }
    } else {
      for (let i = 1; i <= amount; i++) {
        cargoDimensions.push(dimensions);
      }
      cargoDimensions.slice(0, 2);
    }
    actions.setLtlManyDifDimeCargo(cargoDimensions);
    console.log(cargoDimensions);
    console.log(store.quote.ltlManyDifDimeCargo);
  };

  const handleDimensions = (amount) => {
    if (amount == 1 && !differentDimensions) {
      actions.setAmount(2);
      handleManyCargoes(2, false);
      setDifferentDimensions(!differentDimensions);
    } else {
      setDifferentDimensions(!differentDimensions);
      handleManyCargoes(amount, !differentDimensions);
    }
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
                   setGroundCategory(event.target.value);
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
                   setGroundCategory(event.target.value);
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
                   setGroundCategory(event.target.value);
                 }}
          />
          <label className="form-check-label" htmlFor="flexGroundCategory3">
            Drayage
          </label>
        </div>
      </div>


      {groundCategory === "LTL" ? <>
          <div className="col-sm-4 mb-3 mt-5">
            <label className="form-label">Amount</label>
            <input style={{ border: error && "2px solid red" }}
                   type="number" className="form-control"
                   name="amount"
                   min="1"
                   value={amount}
                   onChange={event => {
                     handleAmount(event);
                   }}
            />
          </div>
          <div className="col-sm-6 mb-3 mt-5
           d-flex justify-content-center align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox"
                     checked={differentDimensions}
                     name="differentDimensions"
                     id="flexCheckDefault"
                     onChange={(event) => {
                       handleDimensions(amount);
                     }}

              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Different dimensions for cargoes
              </label>
            </div>
          </div>
          <div className="col mb-3 mt-5">
            <div className="scrollspy-example bg-body-tertiary p-3 rounded-2"
                 style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <ol className="list-group list-group-numbered">
                {differentDimensions && store.quote.ltlManyDifDimeCargo.length ?
                  store.quote.ltlManyDifDimeCargo.map((item, i) => (
                    <li className="list-group-item">
                      <Dimension error={error} formData={formData}
                                 handlerInput={handleInputChange}
                                 key={i}
                                 myKey={i}
                                 value={item}
                      />
                    </li>
                  ))
                  :
                  <li className="list-group-item">
                    <Dimension error={error} formData={formData}
                               myKey={0}
                    />
                  </li>
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
                    name="equipment" onChange={handleInputChange}
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
                    name="trailerSize" onChange={handleInputChange}
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
                    name="equipmentType" onChange={handleInputChange}
            >
              <option selected>Select One</option>
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
                    name="EquipmentSize" onChange={handleInputChange}
            >
              <option selected>Select One</option>
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
};
;


