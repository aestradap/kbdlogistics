import React from "react";
import aboutImage from "../../img/about-us-2104196294.jpg";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return <>
    <div className="cargo-banner"
         style={{
           height: "35rem",
           backgroundImage: `url(${aboutImage})`,
           backgroundSize: "cover",
           backgroundPosition: "center"
         }}>
      <div className="overlay">
        <h1>{t("about")}</h1>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10" style={{ textAlign: "justify", fontSize: "large" }}>
          <p> {t("text_1")} </p>
          <p> {t("text_2")} </p>
          <ul>
            <li>
              <strong>{t("strong_text_1")}</strong> {t("text_3")}
            </li>
            <li>
              <strong>{t("strong_text_2")}</strong> {t("text_4")}
            </li>
            <li>
              <strong>{t("strong_text_3")}</strong> {t("text_5")}
            </li>
          </ul>
          <p>
            {t("text_6")}
          </p>
          <ul>
            <li>
              <strong>{t("strong_text_4")}</strong> {t("text_7")}
            </li>
            <li>
              <strong>{t("strong_text_5")}</strong> {t("text_8")}
            </li>
            <li>
              <strong>{t("strong_text_6")}</strong> {t("text_9")}
            </li>
            <li>
              <strong>{t("strong_text_7")}</strong> {t("text_10")}
            </li>
          </ul>
          <p>
            {t("text_11")}
          </p>
          <p>
            {t("text_12")}
          </p>
        </div>
      </div>
    </div>
  </>;
};

export default AboutUs;