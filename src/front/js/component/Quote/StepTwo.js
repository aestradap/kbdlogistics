import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { Dimension } from "../dimension";
import { Weight } from "../weight";
import { useTranslation } from "react-i18next";

export const StepTwo = ({ error, handleError }) => {

  const { t } = useTranslation();

  const { store, actions } = useContext(Context);
  const {
    originAddress, originZip,
    originCity, originState, originCountry
  } = store.quote;
  const {
    destinyAddress, destinyZip,
    destinyCity, destinyState, destinyCountry
  } = store.quote;

  const { service, movement } = store.quote;

  const handleInputChange = (event) => {
    actions.setQuote(event.target.name, event.target.value);
    handleError(false);
  };

  const handleServiceRadio = (event) => {
    actions.setQuote("service", event.target.value);
  };

  const handleMovementRadio = (event) => {
    actions.setQuote("movement", event.target.value);
  };

  return <>
    <div className="container">
      <div className="row">
        <div className="col">
          {/*Origen*/}
          <div className="card" style={{ minWidth: "15rem", padding: "2rem", marginBottom: "1rem" }}>
            <div className="container text-start" style={{ paddingLeft: 0 }}>
              <div className="row">
                <div className="col">
                  <h4 style={{ color: "#00A651" }}>
                    {t("origin")}
                  </h4>
                </div>
                <div className="col" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    {t("address")}
                  </label>
                  <input style={{ border: error && "2px solid red" }}
                         type="text" className="form-control"
                         name="originAddress"
                         value={originAddress}
                         onChange={event => {
                           handleInputChange(event);
                         }} required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          {/*Destino*/}
          <div className="card" style={{ minWidth: "15rem", padding: "2rem", marginBottom: "1rem" }}>
            <div className="container text-start" style={{ paddingLeft: 0 }}>
              <div className="row">
                <div className="col">
                  <h4 style={{ color: "#00A651" }}>
                    {t("destiny")}
                  </h4>
                </div>
                <div className="col" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputAddress" className="form-label">
                    {t("address")}
                  </label>
                  <input style={{ border: error && "2px solid red" }}
                         type="text" className="form-control"
                         name="destinyAddress"
                         value={destinyAddress}
                         onChange={event => {
                           handleInputChange(event);
                         }} required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="col">
              <div className="text-center flex-fill">
                <h4 className="fw-normal" style={{ color: "#00A651" }}>
                  {t("service")}
                </h4>
              </div>
            </div>

            <div className="col">
              <div className="form-check">
                <input className="form-check-input"
                       type="radio"
                       id="flexRadioService1"
                       name="service"
                       value="Ground"
                       checked={service === "Ground"}
                       onChange={event => {
                         handleInputChange(event);
                       }}
                />
                <label className="form-check-label" htmlFor="flexRadioService1">
                  {t("ground")}
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input"
                       type="radio"
                       id="flexRadioService2"
                       name="service"
                       value="Air"
                       checked={service === "Air"}
                       onChange={event => {
                         handleServiceRadio(event);
                       }}
                />
                <label className="form-check-label" htmlFor="flexRadioService2">
                  {t("air")}
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input"
                       type="radio"
                       id="flexRadioService3"
                       name="service"
                       value="Ocean"
                       checked={service === "Ocean"}
                       onChange={event => {
                         handleServiceRadio(event);
                       }}
                />
                <label className="form-check-label" htmlFor="flexRadioService3">
                  {t("ocean")}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 mt-3">
          <div className="row">
            <div className="col">
              <div className="text-center flex-fill">
                <h4 className="fw-normal" style={{ color: "#00A651" }}>
                  {t("movement")}
                </h4>
              </div>
            </div>

            <div className="col">
              <div className="form-check">
                <input className="form-check-input"
                       type="radio"
                       id="flexRadioMovement1"
                       name="movement"
                       value="Door-to-Door"
                       checked={movement === "Door-to-Door"}
                       onChange={event => {
                         handleMovementRadio(event);
                       }}
                />
                <label className="form-check-label" htmlFor="flexRadioMovement1">
                  {t("d_to_d")}
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input"
                       type="radio"
                       id="flexRadioMovement2"
                       name="movement"
                       value="Door-to-Port"
                       checked={movement === "Door-to-Port"}
                       onChange={event => {
                         handleMovementRadio(event);
                       }}
                />
                <label className="form-check-label" htmlFor="flexRadioMovement2">
                  {t("d_to_p")}
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input"
                       type="radio"
                       id="flexRadioMovement3"
                       name="movement"
                       value="Port-to-Port"
                       checked={movement === "Port-to-Port"}
                       onChange={event => {
                         handleMovementRadio(event);
                       }}
                />
                <label className="form-check-label" htmlFor="flexRadioMovement3">
                  {t("p_to_p")}
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input"
                       type="radio"
                       id="flexRadioMovement4"
                       name="movement"
                       value="Port-to-Door"
                       checked={movement === "Port-to-Door"}
                       onChange={event => {
                         handleMovementRadio(event);
                       }}
                />
                <label className="form-check-label" htmlFor="flexRadioMovement4">
                  {t("p_to_d")}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};


