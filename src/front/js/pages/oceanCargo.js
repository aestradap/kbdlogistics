import React from "react";
import { ExploringCargos } from "../component/exploringCargos";
import boat from "../../img/ship-drydock.jpg";
import truck from "../../img/green-truck1.jpg";
import plane from "../../img/cargo-plane-2377868775.jpg";

const myBody = <p style={{ textAlign: "justify" }}>
  At K&BD-LOGISTICS, we collaborate with some of the most trusted ocean carriers globally, ensuring that your shipments are
  handled with precision and care. Thanks to our partnerships with key players across multiple shipping alliances, we’re
  able to provide consistent availability for your cargo at highly competitive rates. Our priority is to ensure that
  your goods are not only transported efficiently but also delivered on schedule, giving you the confidence to focus on
  other aspects of your business. Whether you’re shipping large volumes or smaller loads, our solutions are designed to
  meet your needs without compromising on quality.
  <br />
  With our advanced tracking system, you can follow the journey of your cargo from departure to final destination,
  providing complete transparency throughout the supply chain. Being ranked among the top 10 largest Non-Vessel
  Operating Common Carriers (NVOCC) by Descartes underscores our expertise and commitment to excellence. This visibility
  and reliability ensure that you always know where your shipments are, reducing uncertainty and helping you make
  informed decisions every step of the way. At K&BD-LOGISTICS, we’re not just moving cargo—we’re streamlining your logistics for
  long-term success.
</p>;
export const OceanCargo = () => {
  return <ExploringCargos theme="Ocean Cargo Service"
                          title="Hassle-Free Ocean Freight Solutions"
                          body={myBody}
                          subject="ocean"
                          imageSubject={boat}
                          exploreImage1={plane}
                          exploreImage2={truck}
                          exploreTitle1="Explore air cargo"
                          exploreTitle2="Explore ground cargo" />;
};

