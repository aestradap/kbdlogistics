import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Ocean } from "./Ocean";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Preview = ({ hidePreview }) => {
  const { t } = useTranslation();
  const { store, actions } = useContext(Context);
  // Info step
  const { name, email, phone, address } = store.quote;
  // Details step
  const { service, movement } = store.quote;
  // Origin Details step
  const { originAddress } = store.quote;
  // Destiny Details step
  const { destinyAddress } = store.quote;
  // Preferences Ground
  const {
    groundCategory, groundDrayageEquipmentSize, groundDrayageEquipmentType,
    groundFullTruckEquipment, groundFullTruckTrailerSize,
    amount, manyCargoes, manyDifDimeCargo
  } = store.quote;
  // Preferences Air
  const { airProductKind } = store.quote;
  // Preferences Ocean
  const { oceanCategory, oceanComority, containerSize } = store.quote;
  const { comments } = store.quote;

  return <>
    {
      store.sendingResult === "success" ?
        <div className="alert alert-success" role="alert">
          ¡Éxito! Hemos recibido tus datos y te responderemos lo antes posible.
        </div> : store.sendingResult === "fail" ?
          <div className="alert alert-danger" role="alert">
            Fallo al enviar el correo. Ocurrió un error inesperado. Por favor, vuelve a intentarlo más tarde.
            Si persiste el error, no dudes en
            <Link to="/contact"
                  style={{ color: "#00A651" }}
                  onClick={hidePreview}
            >
              <strong> Op02@kbdlogistics.com</strong>
            </Link>
          </div> :
          <div>
            <h2>{t("review")}</h2>
            <div className="scrollspy-example bg-body-tertiary rounded-2">

              {/*Info*/}
              <h4 className="nav-link active mb-0 p-0"
                  aria-current="page" href="#"
              >
                <b>{t("info")}</b>
              </h4>
              <hr style={{ color: "#00A651", marginTop: 5 }} />
              <p><strong>{t("name")}:</strong> {name}</p>
              <p><strong>{t("email")}:</strong> {email}</p>
              <p><strong>{t("address")}:</strong> {address}</p>
              <p><strong>{t("phone")}:</strong> {phone}</p>

              {/*Details*/}
              <h4 className="nav-link active mb-0 p-0"
                  aria-current="page" href="#"
              >
                <b>{t("details")}</b>
              </h4>
              <hr style={{ color: "#00A651", marginTop: 5 }} />
              <p><strong>{t("origin")}: </strong>{`${originAddress}.`}
              </p>
              <p><strong>{t("destiny")}: </strong>{`${destinyAddress}.`}
              </p>
              <p><strong>{t("service")}:</strong> {service}</p>
              <p><strong>{t("movement")}:</strong> {movement}</p>

              {/*Preferences*/}
              <h4 className="nav-link active mb-0 p-0"
                  aria-current="page" href="#"
              >
                <b>{t("preferences")}</b>
              </h4>
              <hr style={{ color: "#00A651", marginTop: 5 }} />
              {service === "Ground" &&
                <p><strong> <b>{t("category")}</b>: </strong>
                  {groundCategory}
                </p>}
              {service === "Ocean" &&
                <p><strong>{t("category")}: </strong>
                  {oceanCategory}
                </p>
              }
              {service === "Ground" && groundCategory === "LTL" ?
                <>
                  <p><strong>{t("amount")}: </strong>
                    {amount}
                  </p>
                  <p><strong>{t("dimensions")}: </strong>
                    <ol className={`list-group ${manyCargoes && "list-group-numbered"}`}>
                      {manyDifDimeCargo.map((item, key) =>
                        <li className="list-group-item">
                          <div className="container text-center">
                            <div className="row" key={key}>
                              <div className="col">
                                {t("high")}: {item.high}
                              </div>
                              <div className="col">
                                {t("long")}: {item.long}
                              </div>
                              <div className="col">
                                {t("weight")}: {item.weight}
                              </div>
                              <div className="col">
                                {t("wide")}: {item.wide}
                              </div>
                            </div>
                          </div>
                        </li>
                      )}
                    </ol>
                  </p>
                </> : service === "Ground" && groundCategory === "Full truck" ?
                  <>
                    <p><strong>{t("equipment")}: </strong>
                      {groundFullTruckEquipment}
                    </p>
                    <p><strong>{t("trailer_size")}: </strong>
                      {groundFullTruckTrailerSize}
                    </p>
                  </> : service === "Ground" && groundCategory === "Drayage" &&
                  <>
                    <p><strong>{t("equipment_size")}: </strong>
                      {groundDrayageEquipmentSize}
                    </p>
                    <p><strong>{t("equipment_type")}: </strong>
                      {groundDrayageEquipmentType}
                    </p>
                  </>
              }
              {service === "Ocean" && oceanCategory === "LCL" ?
                <>
                  <p><strong>{t("commodity")}: </strong>
                    {oceanComority}
                  </p>
                  <p><strong>{t("dimensions")}: </strong>
                    <ol className={`list-group ${manyCargoes && "list-group-numbered"}`}>
                      {manyDifDimeCargo.map((item, key) =>
                        <li className="list-group-item">
                          <div className="container text-center">
                            <div className="row" key={key}>
                              <div className="col">
                                {t("high")}: {item.high}
                              </div>
                              <div className="col">
                                {t("long")}: {item.long}
                              </div>
                              <div className="col">
                                {t("weight")}: {item.weight}
                              </div>
                              <div className="col">
                                {t("wide")}: {item.wide}
                              </div>
                            </div>
                          </div>
                        </li>
                      )}
                    </ol>
                  </p>
                </> : service === "Ocean" && oceanCategory === "Full Container" &&
                <>
                  <p><strong>{t("container_size")}: </strong>
                    {containerSize}
                  </p>
                </>
              }
              {service === "Air" &&
                <>
                  <p><strong>{t("commodity")}: </strong>
                    {airProductKind}
                  </p>
                  <p><strong>{t("dimensions")}: </strong>
                    <ol className={`list-group ${manyCargoes && "list-group-numbered"}`}>
                      {manyDifDimeCargo.map((item, key) =>
                        <li className="list-group-item">
                          <div className="container text-center">
                            <div className="row" key={key}>
                              <div className="col">
                                {t("high")}: {item.high}
                              </div>
                              <div className="col">
                                {t("long")}: {item.long}
                              </div>
                              <div className="col">
                                {t("weight")}: {item.weight}
                              </div>
                              <div className="col">
                                {t("wide")}: {item.wide}
                              </div>
                            </div>
                          </div>
                        </li>
                      )}
                    </ol>
                  </p>
                </>
              }
              {comments != "" &&
                <>
                  <h4 className="nav-link active mb-0 p-0"
                      aria-current="page" href="#"
                  >
                    <b>{t("comments")}</b>
                  </h4>
                  <hr style={{ color: "#00A651", marginTop: 5 }} />
                  <p>{comments}</p>
                </>
              }
            </div>
          </div>
    }
  </>;
};

