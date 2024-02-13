import React, { useState } from "react";
import Model from "./Model";
import "./model.css";

const ModelText = () => {
  const [showModelPopup, setShowModelPopup] = useState(false);

  const handleToggleModelPopup = () => {
    setShowModelPopup(!showModelPopup);
  };

  const onClose = () => {
    setShowModelPopup(false);
  };

  return (
    <div>
      <button onClick={handleToggleModelPopup}>open model popup</button>
      {showModelPopup && (
        <Model onClose={onClose} body={<div> customized body </div>} />
      )}
    </div>
  );
};

export default ModelText;
