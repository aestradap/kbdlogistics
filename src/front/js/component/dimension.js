import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useTranslation } from "react-i18next";


export const Dimension = ({ error, handleError, item, myKey }) => {
  const { t } = useTranslation();
  const { store, actions } = useContext(Context);
  const [dimensions, setDimensions] = useState({
    long: item ? item.long : "",
    high: item ? item.high : "",
    wide: item ? item.wide : "",
    weight: item ? item.weight : ""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDimensions({
      ...dimensions,
      [name]: value
    });
    actions.setItemManyDifDimeCargo(myKey, name, value);
    handleError(false);
  };

  return <>
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <label htmlFor="exampleInputName" className="form-label">
            {t("long")}
          </label>
          <input style={{ border: error && "2px solid red" }}
                 type="text" className="form-control"
                 name="long"
                 value={dimensions.long}
                 onChange={handleInputChange} required
          />
          {/*{!myKey ? (*/}
          {/*  <div className="form-text">*/}
          {/*    {t("dimension_define")}*/}
          {/*  </div>*/}
          {/*) : <label className="form-label" />*/}
          {/*}*/}
        </div>
        <div className="col">
          <label className="form-label">
            {t("high")}
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
            {t("wide")}
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
            {t("weight")}
          </label>
          <input type="text" className="form-control"
                 style={{ border: error && "2px solid red" }}
                 aria-describedby="weight"
                 name="weight"
                 value={dimensions.weight}
                 onChange={handleInputChange} required
          />
          {error ?
            <div className="form-text">{t("dimension_weight")}</div>
            : <label className="form-label" />
          }
        </div>
      </div>
    </li>
  </>;

};


