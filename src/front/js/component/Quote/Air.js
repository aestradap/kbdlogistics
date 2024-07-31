import { Dimension } from "../dimension";
import { Weight } from "../weight";
import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

export const Air = ({error, formData, handleInputChange}) => {

  const { store, actions } = useContext(Context);

  return <>
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
  </>;
};
