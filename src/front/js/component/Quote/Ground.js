import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { useTranslation } from "react-i18next";
import { ProductHandler } from "./productHandler";

export const Ground = ({ error, handleError }) => {
    const { t } = useTranslation();
    const { store, actions } = useContext(Context);
    const {
      groundLtlAmount, groundCategory, groundDrayageEquipmentType,
      groundLtlManyCargoes, groundDrayageEquipmentSize, manyDifDimeCargo,
      groundFullTruckEquipment, groundFullTruckTrailerSize
    } = store.quote;
    const dimensions = {
      long: "",
      high: "",
      wide: "",
      weight: ""
    };

    const many = store.quote.manyDifDimeCargo.length > 1 ? true : false;

    const handleInputChange = (event) => {
      actions.setQuote(event.target.name, event.target.value);
      handleError(false);
    };

    return <>
      <div className="container mb-3 mt-5">
        <div className="row">
          <div className="col-sm-2 mb-3 mt-5">
            <div className="form-check">
              <input className="form-check-input"
                     type="radio"
                     id="flexGroundCategory1"
                     name="groundCategory"
                     value="Full truck"
                     checked={groundCategory === "Full truck"}
                     onChange={event => {
                       handleInputChange(event);
                     }}
              />
              <label className="form-check-label" htmlFor="flexGroundCategory1">
                {t("full_truck")}
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input"
                     type="radio"
                     id="flexGroundCategory2"
                     name="groundCategory"
                     value="LTL"
                     checked={groundCategory === "LTL"}
                     onChange={event => {
                       handleInputChange(event);
                     }}
              />
              <label className="form-check-label" htmlFor="flexGroundCategory2">
                {t("ltl")}
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input"
                     type="radio"
                     id="flexGroundCategory3"
                     name="groundCategory"
                     value="Drayage"
                     checked={groundCategory === "Drayage"}
                     onChange={event => {
                       handleInputChange(event);
                     }}
              />
              <label className="form-check-label" htmlFor="flexGroundCategory3">
                {t("drayage")}
              </label>
            </div>
          </div>

          {/*LTL*/}
          {groundCategory === "LTL" ? <>
              <ProductHandler error={error} handleError={handleError} />
            </>
            : groundCategory === "Full truck" ? <>
              <div className="col-sm-4 mb-3 mt-5">
                <label className="form-label">
                  {t("equipment")}
                </label>
                <select className="form-select" aria-label="Default select example"
                        name="groundFullTruckEquipment"
                        value={groundFullTruckEquipment}
                        onChange={handleInputChange} required
                >
                  <option value="Flatbed / Stepdeck">
                    Flatbed / Stepdeck
                  </option>
                  <option value="Temperature Controlled - Reefer">
                    Temperature Controlled - Reefer
                  </option>
                  <option value="Dry Van / Truckload">
                    Dry Van / Truckload
                  </option>
                  <option value="Over Dimensional / Other (RGN, DD, Conestoga, Power Only,Tanker, Hopper, Dump)">
                    Over Dimensional / Other (RGN, DD, Conestoga, Power Only,Tanker, Hopper, Dump)
                  </option>
                </select>
              </div>
              <div className="col-sm-4 mb-3 mt-5">
                <label className="form-label">
                  {t("trailer_size")}
                </label>
                <select className="form-select" aria-label="Default select example"
                        name="groundFullTruckTrailerSize"
                        value={groundFullTruckTrailerSize}
                        onChange={handleInputChange} required
                >
                  <option value="20'" selected>20'</option>
                  <option value="26'">26'</option>
                  <option value="40'">40'</option>
                  <option value="45'">45'</option>
                  <option value="48'">53'</option>
                  <option value="other">{t("other")}</option>
                </select>
              </div>
            </> : <>  {/*Drayage*/}
              <div className="col-sm-4 mb-3 mt-5">
                <label className="form-label">
                  {t("equipment_type")}
                </label>
                <select className="form-select" aria-label="Default select example"
                        name="groundDrayageEquipmentType"
                        value={groundDrayageEquipmentType}
                        style={{ border: error && "2px solid red" }}
                        onChange={handleInputChange} required
                >
                  <option value="Standard" selected>Standard</option>
                  <option value="High Cube">High Cube</option>
                  <option value="Refrigerated">Refrigerated</option>
                  <option value="Open Top">Open Top</option>
                  <option value="Flat Rack">Flat Rack</option>
                  <option value="Out of Gauge">Out of Gauge</option>
                </select>
              </div>
              <div className="col-sm-4 mb-3 mt-5">
                <label className="form-label">
                  {t("equipment_size")}
                </label>
                <select className="form-select" aria-label="Default select example"
                        name="groundDrayageEquipmentSize"
                        value={groundDrayageEquipmentSize}
                        style={{ border: error && "2px solid red" }}
                        onChange={handleInputChange} required
                >
                  <option value="20 feet" selected>20'</option>
                  <option value="40 feet">40'</option>
                  <option value="20 feet">40HQ</option>
                  <option value="45 feet">45'</option>
                  <option value="48 feet">48'</option>
                  <option value="other">{t("other")}</option>
                </select>
              </div>
            </>
          }
        </div>
      </div>
    </>;
  }
;
;


