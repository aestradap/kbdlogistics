import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { Weight } from "../weight";
import { Ground } from "./Ground";
import { Air } from "./Air";
import { Ocean } from "./Ocean";


export const StepThree = ({ error, handleError }) => {

  const { store, actions } = useContext(Context);

  const { service } = store.quote;

  return <>
    <nav>
      <div className="nav nav-tabs"
           id="nav-tab" role="tablist"
      >
        {service === "Ground" && (
          <button className="nav-link active" id="nav-ground-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-ground"
                  type="button" role="tab" aria-controls="nav-ground"
                  aria-selected="true">
            Ground
          </button>)
        }
        {service === "Air" && (
          <button className="nav-link active" id="nav-ground-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-ground"
                  type="button" role="tab" aria-controls="nav-ground"
                  aria-selected="true">
            Air
          </button>)
        }
        {service === "Ocean" && (
          <button className="nav-link active" id="nav-ground-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-ground"
                  type="button" role="tab" aria-controls="nav-ground"
                  aria-selected="true">
            Ocean
          </button>)
        }
      </div>
    </nav>

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


