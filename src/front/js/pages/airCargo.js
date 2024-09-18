import React from "react";
import { ExploringCargos } from "../component/exploringCargos";
import cargoPlane from "../../img/cargo-plane-2377868775.jpg";
import boat from "../../img/containers-boat-2421992563.jpg";
import truck from "../../img/green-truck1.jpg";

const myBody = <p style={{ textAlign: "justify" }}>
  At K&BD-LOGISTICS, we understand the importance of your belongings and are committed to delivering each shipment
  with the utmost care to its destination. We are certified by the Transportation Security Administration (TSA) and
  the Federal Maritime Commission (FMC), as well as approved by the Indirect Air Carrier (IAC) and are members of the
  International Air Transport Association (IATA). Our air freight forwarding service is ideal for shipments over 150
  pounds that can’t be handled by traditional couriers. We offer both domestic and international shipping options,
  with domestic services typically taking one to two days—although weather-related delays can sometimes occur.
  <br />
  K&BD is dedicated to meeting our customers' needs, no matter the challenges. This is why we’ve partnered with some
  of the most reputable airlines to ensure shipments to and from the United States and Canada reach destinations
  worldwide. With access to over 300 locations, we provide exceptional global coverage. Our services are tailored to
  suit the diverse requirements and timeframes of our clients. We handpick the carriers that best match your specific
  shipping needs, setting us apart from many other air freight forwarding companies.
  <br />
  In addition, our knowledgeable logistics team will guide you through the process, informing you about regulations,
  such as which items are allowed and which are considered contraband in certain countries, ensuring that your
  shipments comply with all international laws.
</p>;


export const AirCargo = () => {
  return <ExploringCargos theme="Air Cargo Service"
                          title="Air Cargo Simplified"
                          body={myBody}
                          subject="air"
                          imageSubject={cargoPlane}
                          exploreImage1={truck}
                          exploreImage2={boat}
                          exploreTitle1="Explore ground cargo"
                          exploreTitle2="Explore ocean cargo" />;
};

