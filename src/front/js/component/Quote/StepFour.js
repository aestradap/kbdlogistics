import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

export const StepFour = ({ error, formData, handleInputChange,
                          handlePhoneInputChange }) => {

  const { store, actions } = useContext(Context);
  const [groundCategory, setGroundCategory] = useState("LTL");
  const [oceanCategory, setOceanCategory] = useState("LCL");

  return <>
    <div className="form-floating" style={{ marginTop: "6rem" }}>
                    <textarea className="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea2"
                              style={{ height: 100 }}
                              onChange={handleInputChange}
                    />
      <label htmlFor="floatingTextarea2">Comments</label>
    </div>
  </>;
};


