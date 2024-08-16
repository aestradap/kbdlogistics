import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const Dimension = ({ error, handleError, item, myKey }) => {

  const { store, actions } = useContext(Context);
  const {
    manyDifDimeCargo
  } = store.quote;

  const [dimensions, setDimensions] = useState({
    long: item ? item.long : "",
    high: item ? item.high : "",
    wide: item ? item.wide : "",
    weight: item ? item.weight : ""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Actualiza el estado local
    setDimensions({
      ...dimensions,
      [name]: value
    });
    // Actualiza el store usando la acción
    actions.setItemManyDifDimeCargo(myKey, name, value);
    // Limpia el error si hay cambios
    handleError(false);
    console.log("manyDifDimeCargo", manyDifDimeCargo)
  };

  return <>
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <label htmlFor="exampleInputName" className="form-label">
            Long
          </label>
          <input style={{ border: error && "2px solid red" }}
                 type="text" className="form-control"
                 name="long"
                 value={dimensions.long}
                 onChange={handleInputChange} required
          />
          {!myKey ? (
            <div className="form-text">Define cargo dimensions.</div>
          ) : <label className="form-label" />
          }
        </div>
        <div className="col">
          <label className="form-label">
            High
          </label>
          <input style={{ border: error && "2px solid red" }}
                 type="text" className="form-control"
                 name="high"
                 value={dimensions.high}
                 onChange={handleInputChange} required
          />
        </div>
        <div className="col">
          <label className="form-label">
            Wide
          </label>
          <input style={{ border: error && "2px solid red" }}
                 type="text" className="form-control"
                 name="wide"
                 value={dimensions.wide}
                 onChange={handleInputChange} required
          />
        </div>
        <div className="col">
          <label className="form-label">
            Weight
          </label>
          <input type="text" className="form-control"
                 style={{ border: error && "2px solid red" }}
                 aria-describedby="weight"
                 name="weight"
                 value={dimensions.weight}
                 onChange={handleInputChange} required
          />
          {error ?
            <div className="form-text">Define weight of the cargo?</div>
            : <label className="form-label" />
          }
        </div>
      </div>
    </li>
  </>;

};


