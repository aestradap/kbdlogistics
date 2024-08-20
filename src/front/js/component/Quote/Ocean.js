import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { Weight } from "../weight";


export const Ocean = ({ error, handleError }) => {

  const { store, actions } = useContext(Context);
  const { oceanCategory, oceanComority, manyDifDimeCargo } = store.quote;
  const handleInputChange = (event) => {
    actions.setQuote(event.target.name, event.target.value);
    handleError(false);
  };

  return <>
    <div className="row">
      <div className="col-sm-4 mb-3 mt-5">
        <div className="form-check">
          <input className="form-check-input"
                 type="radio"
                 id="flexRadioDefault3"
                 name="oceanCategory"
                 value="Full Container"
                 checked={oceanCategory === "Full Container"}
                 onChange={event => {
                   handleInputChange(event);
                 }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            Full Container
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input"
                 type="radio"
                 id="flexRadioDefault4"
                 name="oceanCategory"
                 value="LTL"
                 checked={oceanCategory === "LTL"}
                 onChange={event => {
                   handleInputChange(event);
                 }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault4">
            LTL
          </label>
        </div>
      </div>
      {oceanCategory === "LTL" ?
        <>
          <div className="col-sm-4 mb-3 mt-3" />
          <div className="col-sm-4 mb-3 mt-3">
            <label className="form-label">Comority</label>
            <input type="text" className="form-control"
                   style={{ border: error && "2px solid red" }}
                   aria-describedby="weight"
                   name="oceanComority"
                   value={oceanComority}
                   onChange={event => handleInputChange(event)}
            />
            {error ? (
              <div id="nameHelp" style={{ color: "red" }} className="form-text">
                This is a required
                field
              </div>
            ) : (
              <div id="emailHelp" className="form-text">
                Entender bien q es la comority?
              </div>
            )}
          </div>
          <div className="col-sm-4 mb-3 mt-5">
            <Dimension error={error} handleError={handleError}
                       item={manyDifDimeCargo[0]}
                       myKey={0}
            />
          </div>
        </> :
        <>
          <div className="col-sm-6 mb-3 mt-5">
            <select className="form-select" aria-label="Default select example"
                    name="transportationArea"
                    onChange={handleInputChange} required
            >
              <option selected>Transportation area</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </>
      }
    </div>
  </>;
};
