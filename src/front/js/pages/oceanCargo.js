import React from "react";
import { ExploringCargos } from "../component/exploringCargos";
import boat from "../../img/ship-drydock.jpg";
import truck from "../../img/back-truck-cargo.jpg";
import plane from "../../img/cargo-plane-2377868775.jpg";
import { useTranslation } from "react-i18next";


export const OceanCargo = () => {
  const { t } = useTranslation();
  const myBody = <p style={{ textAlign: "justify" }}>
    {t("ocean_cargo_msg1")}
    <br />
    {t("ocean_cargo_msg2")}
  </p>;

  return <ExploringCargos theme={t("ocean_cargo_theme")}
                          title={t("ocean_cargo_title")}
                          body={myBody}
                          subject="ocean"
                          imageSubject={boat}
                          exploreImage1={plane}
                          exploreImage2={truck}
                          exploreTitle1={t("explore_air")}
                          exploreTitle2={t("explore_ground")} />;
};

