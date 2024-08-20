import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Ocean } from "./Ocean";

export const Preview = ({ onSubmit }) => {

  const { store, actions } = useContext(Context);
  // Info step
  const { name, email, phone, address } = store.quote;
  // Details step
  const { service, movement } = store.quote;
  // Origin Details step
  const { originAddress, originCountry, originState, originCity, originZip } = store.quote;
  // Destiny Details step
  const { destinyAddress, destinyCountry, destinyState, destinyCity, destinyZip } = store.quote;
  // Preferences Ground
  const {
    groundCategory, groundDrayageEquipmentSize, groundDrayageEquipmentType,
    groundFullTruckEquipment, groundFullTruckTrailerSize,
    groundLtlAmount, groundLtlManyCargoes, manyDifDimeCargo
  } = store.quote;
  // Preferences Air
  const { airProductKind } = store.quote;
  // Preferences Ocean
  const { oceanCategory, oceanComority, transportationArea } = store.quote;
  const { comments } = store.quote;

  return (
    <div>
      <h2>Review Your Data</h2>
      <div className="scrollspy-example bg-body-tertiary rounded-2">

        {/*Info*/}
        <h4 className="nav-link active mb-0 p-0"
            aria-current="page" href="#"
        >
          <b>Info</b>
        </h4>
        <hr style={{ color: "#00A651", marginTop: 5 }} />
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Phone:</strong> {phone}</p>

        {/*Details*/}
        <h4 className="nav-link active mb-0 p-0"
            aria-current="page" href="#"
        >
          <b>Details</b>
        </h4>
        <hr style={{ color: "#00A651", marginTop: 5 }} />
        <p><strong>Origin: </strong>{`${originAddress}, ${originZip}, 
          ${originCity}, ${originState}, ${originCountry}.`}
        </p>
        <p><strong>Destiny: </strong>{`${destinyAddress}, ${destinyZip}, 
           ${destinyCity}, ${destinyState}, ${destinyCountry}.`}
        </p>
        <p><strong>Service:</strong> {service}</p>
        <p><strong>Movement:</strong> {movement}</p>

        {/*Preferences*/}
        <h4 className="nav-link active mb-0 p-0"
            aria-current="page" href="#"
        >
          <b>Preferences</b>
        </h4>
        <hr style={{ color: "#00A651", marginTop: 5 }} />
        {service === "Ground" &&
          <p><strong>Category: </strong>
            {groundCategory}
          </p>}
        {service === "Ocean" &&
          <p><strong>Category: </strong>
            {oceanCategory}
          </p>
        }
        {service === "Ground" && groundCategory === "LTL" ?
          <>
            <p><strong>Amount: </strong>
              {groundLtlAmount}
            </p>
            <p><strong>Dimensions: </strong>
              <ol className={`list-group ${groundLtlManyCargoes && "list-group-numbered"}`}>
                {manyDifDimeCargo.map((item, key) =>
                  <li className="list-group-item">
                    <div className="container text-center">
                      <div className="row" key={key}>
                        <div className="col">
                          High: {item.high}
                        </div>
                        <div className="col">
                          Long: {item.long}
                        </div>
                        <div className="col">
                          Weight: {item.weight}
                        </div>
                        <div className="col">
                          Wide: {item.wide}
                        </div>
                      </div>
                    </div>
                  </li>
                )}
              </ol>

            </p>
          </> : service === "Ground" && groundCategory === "Full truck" ?
            <>
              <p><strong>Equipment: </strong>
                {groundFullTruckEquipment}
              </p>
              <p><strong>Trailer size: </strong>
                {groundFullTruckTrailerSize}
              </p>
            </> : service === "Ground" && groundCategory === "Drayage" &&
            <>
              <p><strong>Equipment size: </strong>
                {groundDrayageEquipmentSize}
              </p>
              <p><strong>Equipment type: </strong>
                {groundDrayageEquipmentType}
              </p>
            </>
        }
        {service === "Ocean" && oceanCategory === "LTL" ?
          <>
            <p><strong>Comority: </strong>
              {oceanComority}
            </p>
            <p><strong>Dimensions: </strong>
              <ol className="list-group">
                <li className="list-group-item">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col">
                        High: {manyDifDimeCargo[0].high}
                      </div>
                      <div className="col">
                        Long: {manyDifDimeCargo[0].long}
                      </div>
                      <div className="col">
                        Weight: {manyDifDimeCargo[0].weight}
                      </div>
                      <div className="col">
                        Wide: {manyDifDimeCargo[0].wide}
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </p>
          </> : service === "Ocean" && oceanCategory === "Full Container" &&
          <>
            <p><strong>Transportation Area: </strong>
              {transportationArea}
            </p>
          </>
        }
        {service === "Air" &&
          <>
            <p><strong>Producto: </strong>
              {airProductKind}
            </p>
            <p><strong>Dimensions: </strong>
              <ol className="list-group">
                <li className="list-group-item">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col">
                        High: {manyDifDimeCargo[0].high}
                      </div>
                      <div className="col">
                        Long: {manyDifDimeCargo[0].long}
                      </div>
                      <div className="col">
                        Weight: {manyDifDimeCargo[0].weight}
                      </div>
                      <div className="col">
                        Wide: {manyDifDimeCargo[0].wide}
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </p>
          </>
        }
        {comments != "" &&
          <>
            <h4 className="nav-link active mb-0 p-0"
                aria-current="page" href="#"
            >
              <b>Comments</b>
            </h4>
            <hr style={{ color: "#00A651", marginTop: 5 }} />
            <p>{comments}</p>
          </>
        }
      </div>
    </div>
  );
};

