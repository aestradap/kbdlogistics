import React from "react";
import { ExploringCargos } from "../component/exploringCargos";
import cargoOcean from "../../img/ship-drydock.jpg";
import plane from "../../img/cargo-plane-2377868775.jpg";
import boat from "../../img/containers-boat-2421992563.jpg";
import truck from "../../img/green-truck1.jpg";

const myBody = <p style={{ textAlign: "justify" }}>
  At K&BD-LOGISTICS, we’ve built a strong network to ensure your deliveries arrive safely and on time. For
  years, we've worked diligently to create a system that guarantees no shipment is ever overlooked. By partnering with
  us, you can carry on with your business, confident that your products will always reach your clients as needed. Our
  reach extends throughout North America and parts of Europe, ensuring we can serve customers in key locations. Whether
  it's day or night, rain or shine, we are committed to delivering your goods without delay—because your satisfaction is
  our priority.
  <br />
  If your area isn't currently in our network, don’t hesitate to ask. We’re always open to exploring new opportunities
  and discussing how we can meet your shipping needs. We look forward to building a lasting partnership with you and
  helping your business thrive.
</p>;
export const TruckCargo = () => {
  return <ExploringCargos theme="Ground Cargo Service"
                          title="Reliable Roads to You"
                          body={myBody}
                          subject="ground"
                          imageSubject={truck}
                          exploreImage1={boat}
                          exploreImage2={plane}
                          exploreTitle1="Explore ocean cargo"
                          exploreTitle2="Explore air cargo" />;
};



