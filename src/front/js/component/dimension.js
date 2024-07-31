import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Dimension = ({ error, formData, handlerInput, many, item }) => {

  const { store, actions } = useContext(Context);

  return <>
    <div className="row">
      <div className="col">
        {!many ?
          <label htmlFor="exampleInputName" className="form-label">
            Long
          </label> : <></>
        }
        <input style={{ border: error ? "2px solid red" : "" }}
               type="text" className="form-control"
               name="dimensionLong"
               value={item ? item.long : formData.dimensionLong}
               onChange={handlerInput}
        />
        {error ? (
          <div style={{ color: "red" }} className="form-text">
            This is a required field
          </div>
        ) : !many ? (
          <div className="form-text">Define cargo dimensions.</div>
        ) : <> </>
        }
      </div>
      <div className="col">
        {!many ?
          <label className="form-label">
            High
          </label> : <></>
        }
        <input style={{ border: error ? "2px solid red" : "" }}
               type="text" className="form-control"
               name="dimensionHigh"
               value={item ? item.high : formData.dimensionHigh}
               onChange={handlerInput}
        />
      </div>
      <div className="col">
        {!many ?
          <label className="form-label">
            Wide
          </label> : <></>
        }
        <input style={{ border: error ? "2px solid red" : "" }}
               type="text" className="form-control"
               name="dimensionWide"
               value={item ? item.wide : formData.dimensionWide}
               onChange={handlerInput}
        />
      </div>
      <div className="col">
        {!many ?
          <label className="form-label">
            Weight
          </label> : <></>
        }
        <input type="text" className="form-control"
               style={{ border: error ? "2px solid red" : "" }}
               aria-describedby="weight"
               name='dimensionWeight'
               value={item ? item.weight : formData.weight}
        />
        {error ? (
          <div style={{ color: "red" }} className="form-text">
            This is a required field
          </div>
        ) : !many ? (
          <div className="form-text">What is the weight of the cargo?</div>
        ) : <> </>
        }
      </div>
    </div>
  </>;

};


