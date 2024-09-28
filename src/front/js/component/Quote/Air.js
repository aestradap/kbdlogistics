import { Dimension } from "../dimension";
import { Weight } from "../weight";
import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { useTranslation } from "react-i18next";
import { ProductHandler } from "./productHandler";

export const Air = ({ error, handleError }) => {

  const { t } = useTranslation();
  const { store, actions } = useContext(Context);
  const { airProductKind, manyDifDimeCargo } = store.quote;
  const handleInputChange = (event) => {
    actions.setQuote(event.target.name, event.target.value);
    handleError(false);
  };

  return <>
    <div className="container mb-3 mt-5">
      <div className="row">
        <div className="col-4 mb-3 ">
          <label htmlFor="exampleInputName" className="form-label">
            {t("product")}
          </label>
          <input style={{ border: error && "2px solid red" }}
                 type="text" className="form-control"
                 id="validationDefault01"
                 name="airProductKind"
                 value={airProductKind}
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
        <ProductHandler error={error} handleError={handleError} />
      </div>
    </div>
  </>;
};
