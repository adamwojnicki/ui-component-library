import React from "react";
import "./Button.css";

export default ({ variant = "", color = "", children, ...rest }) => {
  return (
    <button
      className={`button ${variant} ${color} ${
        rest.disableShadow && "disableShadow"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
