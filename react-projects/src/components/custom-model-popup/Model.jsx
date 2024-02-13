import React from "react";

const Model = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Model"} className="model">
      <div className="model-content">
        <div className="header">
          <span onClick={onClose} className="close-model-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our model</p>
            </div>
          )}
        </div>
        <div className="footer">{footer ? footer : <h2>footer</h2>}</div>
      </div>
    </div>
  );
};

export default Model;
