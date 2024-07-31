import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { Weight } from "../weight";


export const Ocean = ({error, formData, handleInputChange}) => {

  const { store, actions } = useContext(Context);
  const [oceanCategory, setOceanCategory] = useState("LCL");

  return <>
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
  </>;
};
