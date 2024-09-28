import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { Weight } from "../weight";
import { Ground } from "./Ground";
import { Air } from "./Air";
import { Ocean } from "./Ocean";
import { useTranslation } from "react-i18next";


export const StepThree = ({ error, handleError }) => {
  const { t } = useTranslation();
  const { store, actions } = useContext(Context);
  const { service } = store.quote;

  return <>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          {service === "Ground" && (
            <button className="nav-link active" id="nav-ground-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-ground"
                    type="button" role="tab" aria-controls="nav-ground"
                    aria-selected="true">
              <h4 className="fw-normal" style={{ color: "#00A651" }}>
                {t("ground")}
              </h4>
            </button>)
          }
          {service === "Air" && (
            <button className="nav-link active" id="nav-air-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-air"
                    type="button" role="tab" aria-controls="nav-air"
                    aria-selected="true">

              <h4 className="fw-normal" style={{ color: "#00A651" }}>
                {t("air")}
              </h4>
            </button>)
          }
          {service === "Ocean" && (
            <button className="nav-link active" id="nav-Ocean-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-ocean"
                    type="button" role="tab" aria-controls="nav-ocean"
                    aria-selected="true">
              <h4 className="fw-normal" style={{ color: "#00A651" }}>
                {t("ocean")}
              </h4>
            </button>)
          }
        </a>
      </li>
    </ul>
    <div className="tab-content" id="nav-tabContent">
      {service === "Ground" ?
        <Ground error={error} handleError={handleError} />
        : service === "Air" ?
          <Air error={error} handleError={handleError} />
          : <Ocean error={error} handleError={handleError} />
      }
    </div>
  </>;
};


