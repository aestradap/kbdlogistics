import { Dimension } from "../dimension";
import { Weight } from "../weight";
import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";

export const Air = ({ error, handleError }) => {

  const { store, actions } = useContext(Context);
  const { airProductKind, manyDifDimeCargo } = store.quote;
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

        </div>
        <div className="row">
          <div className="col mb-3 mt-3">
            <Dimension error={error}
                       handleError={handleError}
                       item={manyDifDimeCargo[0]}
                       myKey={0}
            />
          </div>
        </div>
      </div>
    </div>
  </>;
};
