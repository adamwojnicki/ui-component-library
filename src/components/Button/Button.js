import React from "react";
import "./Button.css";

export default ({ variant, children, ...rest }) => {
  return (
    <button
      className={`button ${variant} ${rest.disableShadow && "disableShadow"}`}
      {...rest}
    >
      {children}
    </button>
  );
};
