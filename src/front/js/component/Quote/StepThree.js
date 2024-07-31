import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { Weight } from "../weight";
import { Ground } from "./Ground";
import { Air } from "./Air";
import { Ocean } from "./Ocean";


export const StepThree = ({
                            error, formData, handleInputChange, currentService,
                            handlePhoneInputChange
                          }) => {

  const { store, actions } = useContext(Context);

  const [service, setService] = useState(formData.service);

  return <>
    <nav>
      <div className="nav nav-tabs"
           id="nav-tab" role="tablist"
      >
        {service === "ground" ?
          <button className="nav-link active" id="nav-ground-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-ground"
                  type="button" role="tab" aria-controls="nav-ground"
                  aria-selected="true">
            Ground
          </button> : <></>
        }
        {service === "air" ?
          <button className="nav-link active" id="nav-ground-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-ground"
                  type="button" role="tab" aria-controls="nav-ground"
                  aria-selected="true">
            Air
          </button> : <></>
        }
        {service === "ocean" ?
          <button className="nav-link active" id="nav-ground-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-ground"
                  type="button" role="tab" aria-controls="nav-ground"
                  aria-selected="true">
            Ocean
          </button> : <></>
        }
      </div>
    </nav>

    <div className="tab-content" id="nav-tabContent">
      {service === "ground" ?
        <Ground formData={formData}
                error={error}
                handleInputChange={handleInputChange}
        />
        : service === "air" ?
          <Air formData={formData}
               error={error}
               handleInputChange={handleInputChange}
          />
          : <Ocean formData={formData}
                   error={error}
                   handleInputChange={handleInputChange}
          />
      }
    </div>
  </>;
};


