import { Dimension } from "../dimension";
import { Weight } from "../weight";
import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

export const Air = ({ error, handleError }) => {

  const { store, actions } = useContext(Context);
  const { airProductKind } = store.quote;
  const handleInputChange = (event) => {
    actions.setQuote(event.target.name, event.target.value);
    handleError(false);
  };

  return <>
    <div className="container mb-3 mt-5">
      <div className="row">
        <div className="col mb-3 ">
          <label htmlFor="exampleInputName" className="form-label">
            Product
          </label>
          <input style={{ border: error && "2px solid red" }}
                 type="text" className="form-control"
                 id="validationDefault01"
                 name="airProductKind"
                 value={airProductKind}
                 onChange={handleInputChange} required
          />
          <div id="nameHelp" className="form-text">
            Define, what kind of product?
          </div>
        </div>
        <div className="col mb-3 ">
          {/*<label htmlFor="exampleInputName" className="form-label">4-OPCT</label>*/}
          {/*<select className="form-select" aria-label="Default select example">*/}
          {/*  <option selected>Transportation area</option>*/}
          {/*  <option value="1">One</option>*/}
          {/*  <option value="2">Two</option>*/}
          {/*  <option value="3">Three</option>*/}
          {/*</select>*/}
        </div>
        <div className="row">
          <div className="col mb-3 mt-3">
            <Dimension error={error}
                       handleError={handleError}
                       myKey={0}
            />
          </div>
        </div>
      </div>
    </div>
  </>;
};
