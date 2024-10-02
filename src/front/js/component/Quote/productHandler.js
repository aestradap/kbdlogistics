import React, { useContext } from "react";
import { Dimension } from "../dimension";
import { useTranslation } from "react-i18next";
import { Context } from "../../store/appContext";

export const ProductHandler = ({ error, handleError }) => {
  const { t } = useTranslation();
  const { store, actions } = useContext(Context);
  const {
    amount, manyCargoes
  } = store.quote;
  const dimensions = {
    long: "",
    high: "",
    wide: "",
    weight: ""
  };
  const handleAmount = (event) => {
    console.log(event.target.value);
    console.log(amount);
    if (manyCargoes) {
      if (amount > event.target.value) {

        const cargoDimensions = [...store.quote.manyDifDimeCargo];
        const minusOne = cargoDimensions.slice(0, cargoDimensions.length - 1);
        actions.setManyDifDimeCargo(minusOne);

      } else if (amount < event.target.value) {
        handleManyCargoes(1);
      }
    }
    actions.setAmount(event.target.value);
  };

  const handleManyCargoes = (myAmount) => {
    let cargoDimensions = [...store.quote.manyDifDimeCargo];
    for (let i = 0; i < myAmount; i++) {
      cargoDimensions.push(dimensions);
    }
    actions.setManyDifDimeCargo(cargoDimensions);
  };

  const handleDimensions = (myAmount) => {
    let cargoDimensions = [...store.quote.manyDifDimeCargo];

    if (myAmount === 1) {
      if (!manyCargoes) {
        actions.setAmount(2);
        handleManyCargoes(1);
      } else {
        cargoDimensions = cargoDimensions.slice(0, 1);
        actions.setManyDifDimeCargo(cargoDimensions);
      }
    } else if (!manyCargoes) {
      handleManyCargoes(myAmount - 1);
    } else {
      cargoDimensions = cargoDimensions.slice(0, 1);
      actions.setManyDifDimeCargo(cargoDimensions);
    }

    actions.setQuote("manyCargoes", !manyCargoes);
  };

  return <>
    <div className="container">
      <div className="row">
        <div className="col-sm-2 mb-3">
          <label className="form-label">
            {t("amount")}
          </label>
          <input style={{ border: error && "2px solid red" }}
                 type="number" className="form-control"
                 name="amount"
                 min="1"
                 value={amount}
                 onChange={event => {
                   handleAmount(event);
                 }}
          />
        </div>
        <div className="col-sm-10 mb-3 d-flex justify-content-end align-items-end">
          <div className="form-check m-0 ">
            <input className="form-check-input" type="checkbox"
                   checked={manyCargoes}
                   name="manyCargoes"
                   onChange={event => {
                     handleDimensions(amount);
                   }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              {t("many_cargoes")}
            </label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col mb-3">
          <div className="scrollspy-example bg-body-tertiary rounded-2"
               style={{ maxHeight: "300px", overflowY: "auto" }}>
            <ol className="list-group list-group-numbered">
              { store.quote.manyDifDimeCargo.length ?
                store.quote.manyDifDimeCargo.map((item, i) => (
                  <Dimension error={error}
                             handleError={handleError}
                             key={i}
                             myKey={i}
                             item={item}
                  />
                ))
                :
                <Dimension error={error}
                           handleError={handleError}
                           myKey={0}
                />
              }
            </ol>
          </div>
        </div>
      </div>
    </div>
  </>;
};
