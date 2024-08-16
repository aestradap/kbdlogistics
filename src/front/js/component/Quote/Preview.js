import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const Preview = ({ onSubmit }) => {

  const { store, actions } = useContext(Context);
  const { name, email, phone, address } = store.quote;
  return (
    <div>
      <h2>Review Your Data</h2>
      <div>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Phone:</strong> {phone}</p>
        {/*<p><strong>Equipment Size:</strong> {equipmentSize}</p>*/}
        {/* Agrega aquí más campos según sea necesario */}
      </div>
    </div>
  );
};

