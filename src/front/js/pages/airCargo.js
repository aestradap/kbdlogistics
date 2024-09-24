import React from "react";
import { ExploringCargos } from "../component/exploringCargos";
import cargoPlane from "../../img/cargo-plane.jpg";
import boat from "../../img/containers-boat-2421992563.jpg";
import truck from "../../img/back-truck-cargo.jpg";
import { useTranslation } from "react-i18next";


export const AirCargo = () => {
  const { t } = useTranslation();
  const myBody = <p style={{ textAlign: "justify" }}>
    {t("air_cargo_msg1")}
    <br />
    {t("air_cargo_msg2")}
    <br />
    {t("air_cargo_msg3")}
  </p>;

  return <ExploringCargos theme={t("air_cargo_theme")}
                          title={t("air_cargo_title")}
                          body={myBody}
                          subject="air"
                          imageSubject={cargoPlane}
                          exploreImage1={truck}
                          exploreImage2={boat}
                          exploreTitle1={t("explore_ground")}
                          exploreTitle2={t("explore_ocean")} />;
};

