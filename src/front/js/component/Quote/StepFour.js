import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

export const StepFour = ({
                           error, handleError
                         }) => {

  const { store, actions } = useContext(Context);
  const { comments } = store.quote;
  const handleInputChange = (event) => {
    actions.setQuote(event.target.name, event.target.value);
    handleError(false);
  };

  return <div className="container text-center">
    <label className="form-label" style={{ color: "#00A651" }}>
      "Before submitting, please feel free to provide any details or comments you think we should consider."
    </label>
    <div className="form-floating">
      <textarea className="form-control mt-5"
                placeholder="Leave a comment here" id="floatingTextarea2"
                style={{ height: 100 }}
                name="comments"
                value={comments}
                onChange={handleInputChange}
      />
      <label htmlFor="floatingTextarea2">Comments</label>
    </div>
  </div>;
};


