import React from "react";
import { ExploringCargos } from "../component/exploringCargos";
import plane from "../../img/cargo-plane-2377868775.webp";
import boat from "../../img/containers-boat-2421992563.webp";
import truck from "../../img/green-truck1.webp";
import { useTranslation } from "react-i18next";


export const TruckCargo = () => {
  const { t } = useTranslation();
  const myBody = <p style={{ textAlign: "justify" }}>
    {t("ground_cargo_msg1")}
    <br />
    {t("ground_cargo_msg2")}
  </p>;

  return <ExploringCargos theme={t("ground_cargo_theme")}
                          title={t("ground_cargo_title")}
                          body={myBody}
                          subject="ground"
                          imageSubject={truck}
                          exploreImage1={boat}
                          exploreImage2={plane}
                          exploreTitle1={t("explore_ocean")}
                          exploreTitle2={t("explore_air")} />;
};



