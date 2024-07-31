import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

export const StepFour = ({
                           error, formData, handleInputChange,
                           handlePhoneInputChange
                         }) => {

  const { store, actions } = useContext(Context);
  const [groundCategory, setGroundCategory] = useState("LTL");
  const [oceanCategory, setOceanCategory] = useState("LCL");

  return <div className='container text-center'>
    <label className="form-label" style={{color:'#00A651'}}>
      "Before submitting, please feel free to provide any details or comments you think we should consider."
    </label>
    <div className="form-floating">
      <textarea className="form-control mt-5"
                placeholder="Leave a comment here" id="floatingTextarea2"
                style={{ height: 100 }}
                onChange={handleInputChange}
      />
      <label htmlFor="floatingTextarea2">Comments</label>
    </div>
  </div>;
};


