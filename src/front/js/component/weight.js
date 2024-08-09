import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Weight = ({ error, formData, handlerInput }) => {

  const { store, actions } = useContext(Context);

  return <>
    <div className="row">
      <div className="col">
        <label className="form-label">Weight</label>
        <input type="text" className="form-control"
               style={{ border: error && "2px solid red" }}
               aria-describedby="weight"
        />
        {error ? (
          <div id="nameHelp" style={{ color: "red" }} className="form-text">This is a required field</div>
        ) : (
          <div id="emailHelp" className="form-text">What is the weight of the cargo?</div>
        )}
      </div>
    </div>

  </>;
};


