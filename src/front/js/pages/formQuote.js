import React, { useContext, useRef } from "react";
import "react-phone-input-2/lib/style.css";
import "../../styles/ProgressBarSteps.css";

import { Context } from "../store/appContext";
import { StepOne } from "../component/Quote/StepOne";
import { StepTwo } from "../component/Quote/StepTwo";
import { StepThree } from "../component/Quote/StepThree";
import { StepFour } from "../component/Quote/StepFour";
import { Preview } from "../component/Quote/Preview";
import { useTranslation } from "react-i18next";

export const FormQuote = () => {
    const { t } = useTranslation();
    const { store, actions } = useContext(Context);
    const { step, error } = store;
    const modalPreview = useRef();

    const showModalPreview = () => {
      const modalEle = modalPreview.current;
      const bsModal = new bootstrap.Modal(modalEle, {
        backdrop: "static",
        keyboard: false
      });
      bsModal.show();
    };

    const hideModal = () => {
      const modalEle = modalPreview.current;
      const bsModal = bootstrap.Modal.getInstance(modalEle);
      bsModal.hide();
    };

    const handleNext = (event) => {
      event.preventDefault();
      const form = event.target.form;
      if (form.checkValidity() === false) {
        form.reportValidity();
        return;
      }
      if (step < 5) {
        actions.setStep(step + 1);
      }
    };

    const handlePrevious = () => {
      actions.setStep(step - 1);
      setError(false);
    };

    const setError = (boll) => {
      actions.updateStore("error", boll);
    };
    const handleError = () => {
      if (step === 1) {
        if (store.quote.name === "" ||
          store.quote.email === "" ||
          store.quote.address === "" ||
          store.quote.phone === "") {
          setError(true);
        } else {
          localStorage.setItem("name", store.quote.name);
          localStorage.setItem("address", store.quote.address);
          localStorage.setItem("email", store.quote.email);
          localStorage.setItem("phone", store.quote.phone);
        }
      } else if (step === 2) {
        if (store.quote.originAddress === "" ||
          store.quote.destinyAddress === "") {
          setError(true);
        } else {
          localStorage.setItem("originAddress", store.quote.originAddress);
          localStorage.setItem("destinyAddress", store.quote.destinyAddress);
          localStorage.setItem("movement", store.quote.movement);
          localStorage.setItem("service", store.quote.service);
        }
      } else if (step === 3 && store.quote.service === "Ground") {
        if (store.quote.groundCategory === "LTL") {
          if (store.quote.amount === "" ||
            store.quote.manyDifDimeCargo === "") {
            setError(true);
          } else {
            localStorage.setItem("groundCategory", store.quote.groundCategory);
            localStorage.setItem("amount", store.quote.amount);
            const dimensionsString = JSON.stringify(store.quote.manyDifDimeCargo);
            localStorage.setItem("manyDifDimeCargo", dimensionsString);
          }
        } else {
          localStorage.setItem("groundDrayageEquipmentSize",
            store.quote.groundDrayageEquipmentSize);
          localStorage.setItem("groundDrayageEquipmentType",
            store.quote.groundDrayageEquipmentType);
        }
      } else if (step === 3 && store.quote.service === "Air") {
        if (store.quote.airProductKind === "") {
          setError(true);
        } else {
          localStorage.setItem("airProductKind", store.quote.airProductKind);
          localStorage.setItem("amount", store.quote.amount);
          const dimensionsString = JSON.stringify(store.quote.manyDifDimeCargo);
          localStorage.setItem("manyDifDimeCargo", dimensionsString);
        }
      } else if (step === 3 && store.quote.service === "Ocean") {
        if (store.quote.oceanCategory === "LCL") {
          if (store.quote.oceanComority === "" ||
            store.quote.manyDifDimeCargo === "") {
            setError(true);
          } else {
            localStorage.setItem("oceanComority", store.quote.oceanComority);
            localStorage.setItem("amount", store.quote.amount);
            const dimensionsString = JSON.stringify(store.quote.manyDifDimeCargo);
            localStorage.setItem("manyDifDimeCargo", dimensionsString);
          }
        } else if (store.quote.oceanCategory === "Full Container") {
          if (store.quote.containerSize === "") {
            setError(true);
          } else {
            localStorage.setItem("containerSize",
              store.quote.containerSize);
          }
        }
      } else if (step === 4) {
        localStorage.setItem("comments", store.quote.comments);
      }
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      actions.updateStore("sending", true);
      const response = await actions.sendQuote();
      console.log("response: ",response);

      if (response) {
        actions.updateStore("sendingResult", "success");
        actions.cleanFinalQuote();
        actions.restoreQuote();
        localStorage.clear();
        actions.updateStore("sending", false);
        setTimeout(() => {
          hideModal();
          actions.setStep(1);
          actions.updateStore("sendingResult", "review");
        }, 3000);
      } else {
        actions.updateStore("sendingResult", "fail");
        actions.updateStore("sending", false);
        setTimeout(() => {
          hideModal();
          actions.setStep(step - 1);
          actions.updateStore("sendingResult", "review");
        }, 3000);

      }
    };
    return <>

      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
      </svg>

      <div className="container  mt-5" style={{ minHeight: "calc(100vh - 13rem)", marginBottom: "2rem" }}>
        {error &&
          <div className="alert alert-danger d-flex align-items-center
           justify-content-center" role="alert">
            <svg className="bi flex-shrink-0 me-2"
                 width="24" height="24" role="img" aria-label="Danger:">
              <use href="#exclamation-triangle-fill" />
            </svg>
            <div>
              {t("error_msg1")}
            </div>
          </div>
        }
        <h2 className="fw-normal" style={{ marginBottom: "2rem" }}>
          {t("request")}
        </h2>
        <div className="position-relative m-4">
          <div className="progress" role="progressbar"
               aria-label="Animated striped example" aria-valuenow="75"
               aria-valuemin="0" aria-valuemax="50">
            <div className="progress-bar progress-bar-striped
                    progress-bar-animated bg-success"
                 style={{
                   width: step === 1 ?
                     "0%" : step === 2 ?
                       "25%" : step === 3 ?
                         "50%" : step === 4 ?
                           "75%" : "100%"
                 }}></div>
          </div>
          <button type="button"
                  className="position-absolute top-0 btn-home-primary
                 translate-middle btn btn-sm btn-quote-progress rounded-pill"
                  style={{ left: "0%" }}
          >1
          </button>
          <button type="button"
                  className="position-absolute top-0 btn-home-primary
                 translate-middle btn btn-sm btn-quote-progress rounded-pill"
                  style={{ backgroundColor: step < 2 && "#6C757D", left: "25%" }}
          >2
          </button>
          <button className="position-absolute top-0 btn-home-primary
                translate-middle btn btn-sm btn-quote-progress rounded-pill"
                  style={{ backgroundColor: step < 3 && "#6C757D", left: "50%" }}
          >3
          </button>
          <button type="button"
                  className="position-absolute top-0 btn-home-primary
                translate-middle btn btn-sm btn-quote-progress rounded-pill"
                  style={{ backgroundColor: step < 4 && "#6C757D", left: "75%" }}
          >4
          </button>

        </div>
        <div className="d-flex justify-content-between position-relative">
          <div className="text-center flex-fill">
            <h4 className="fw-normal" style={{ color: "#00A651" }}>
              {t("info")}
            </h4>
          </div>
          <div className="text-center flex-fill">
            <h4 className="fw-normal" style={{ color: "#00A651" }}>
              {t("details")}
            </h4>
          </div>
          <div className="text-center flex-fill">
            <h4 className="fw-normal" style={{ color: "#00A651" }}>
              {t("preferences")}
            </h4>
          </div>
          <div className="text-center flex-fill">
            <h4 className="fw-normal" style={{ color: "#00A651" }}>
              {t("complete")}
            </h4>
          </div>
        </div>

        <form className="mt-5">

          {/*step1*/}
          {step === 1 && (<>
              <StepOne error={error} handleError={setError} />
            </>
          )}

          {/*step2*/}
          {step === 2 && (<>
              <StepTwo error={error} handleError={setError} />
            </>
          )}

          {/*step3*/}
          {step === 3 && (<>
              <StepThree error={error} handleError={setError} />
            </>
          )}

          {/*step4*/}
          {step >= 4 && (<>
              <StepFour error={error} handleError={setError} />
            </>
          )}

          <div className="d-flex justify-content-between mt-5">
            {step > 1 && (
              <button type="button" className="btn btn-secondary btn-previous"
                      onClick={handlePrevious}>
                {t("previous")}
              </button>
            )}
            {step < 4 ? (
                <button className="btn btn-home-primary"
                        onClick={(event) => {
                          handleError();
                          handleNext(event);
                        }}>
                  {t("next")}
                </button>
              ) :
              <button className="btn btn-home-primary"
                      onClick={(event) => {
                        handleError();
                        handleNext(event);
                        actions.buildFinalQuote();
                        showModalPreview();
                      }}
              >
                {t("preview")}
              </button>
            }
          </div>

          <div
               aria-hidden="true"
               className="modal fade"
               data-bs-backdrop="static"
               aria-labelledby="exampleModalLabel"
               ref={modalPreview}
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="nav-link active mb-0 p-0"
                      style={{ color: "#ffffff" }}
                      aria-current="page"
                  >
                    <b>K&BD</b> LOGISTICS INC
                  </h4>
                  <button type="button" className="btn-close"
                          disabled={store.sendingResult !== "review"}
                          onClick={handlePrevious}
                          data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <Preview hidePreview={hideModal} />
                </div>
                <div className="modal-footer">
                  {store.sending ?
                    <div className="spinner-border text-success" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div> :
                    <>
                      <button type="button" className="btn btn-secondary"
                              disabled={store.sendingResult !== "review"}
                              onClick={() => {
                                actions.cleanFinalQuote();
                                handlePrevious();
                              }}
                              data-bs-dismiss="modal">
                        {t("close")}
                      </button>
                      <button className="btn btn-home-primary"
                              disabled={store.sendingResult !== "review"}
                              onClick={handleSubmit}
                      >
                        {t("send")}
                      </button>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>;
  }
;
