import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Dimension = ({ error, formData,handlerInput }) => {

  const { store, actions } = useContext(Context);

  return <>
    <div className="row">
      <div className="col">
        <label htmlFor="exampleInputName" className="form-label">Long</label>
        <input style={{ border: error ? "2px solid red" : "" }}
               type="text" className="form-control"
               id="validationDefault01"
               name="long"
               value={formData.name}
               onChange={handlerInput}
        />
      </div>
      <div className="col">
        <label htmlFor="exampleInputName" className="form-label">High</label>
        <input style={{ border: error ? "2px solid red" : "" }}
               type="text" className="form-control"
               id="validationDefault01"
               name="high"
               value={formData.name}
               onChange={handlerInput}
        />
      </div>
      <div className="col">
        <label htmlFor="exampleInputName" className="form-label">Wide</label>
        <input style={{ border: error ? "2px solid red" : "" }}
               type="text" className="form-control"
               id="validationDefault01"
               name="wide"
               value={formData.name}
               onChange={handlerInput}
        />
      </div>
      {error ? (
        <div id="nameHelp" style={{ color: "red" }} className="form-text">This is a required field</div>
      ) : (
        <div id="nameHelp" className="form-text">Define cargo dimensions.</div>
      )}
    </div>
  </>;

};


