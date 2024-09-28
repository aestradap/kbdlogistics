import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { Weight } from "../weight";
import { useTranslation } from "react-i18next";
import { ProductHandler } from "./productHandler";


export const Ocean = ({ error, handleError }) => {

  const { t } = useTranslation();
  const { store, actions } = useContext(Context);
  const {
    oceanCategory, oceanComority, containerSize,
    manyDifDimeCargo, transportationArea
  } = store.quote;
  const handleInputChange = (event) => {
    actions.setQuote(event.target.name, event.target.value);
    handleError(false);
  };

  return <>
    <div className="container mb-3 mt-5">
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
              {t("full_container")}
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
                   }}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              {t("lcl")}
            </label>
          </div>
        </div>
        {oceanCategory === "LCL" ?
          <>
            <div className="col-4 mb-3 mt-5">
              <label className="form-label">
                {t("commodity")}
              </label>
              <input style={{ border: error && "2px solid red" }}
                     type="text" className="form-control"
                     name="oceanComority"
                     value={oceanComority}
                     onChange={handleInputChange} required
              />
              {error ?
                <div id="nameHelp" style={{ color: "red" }} className="form-text">
                  {t("error_msg2")}
                </div> :
                <div id="nameHelp" className="form-text">
                  {t("product_define")}
                </div>
              }
            </div>
            <div className="col-sm-4 mb-3 mt-3" />
            <ProductHandler error={error} handleError={handleError} />
          </> :
          <>
            <div className="col-sm-4 mb-3 mt-5">
              <label className="form-label">
                {t("container_size")}
              </label>
              <select className="form-select" aria-label="Default select example"
                      name="groundFullTruckTrailerSize"
                      value={containerSize}
                      onChange={handleInputChange} required
              >
                <option value="20'" selected>20'</option>
                <option value="40'">40'</option>
                <option value="45'">45'</option>
                <option value="40HQ'">40HQ'</option>
                <option value="open top'">open top'</option>
                <option value="refrigerated">refrigerated</option>
                <option value="Other">{t("other")}</option>

              </select>
            </div>
          </>
        }
      </div>
    </div>
  </>;
};
