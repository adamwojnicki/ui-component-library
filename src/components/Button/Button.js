import React from "react";
import "./Button.css";
import MaterialIcon from "material-icons-react";

export default ({ variant = "", color = "", size = "", children, ...rest }) => {
  return (
    <button
      className={`button 
        ${variant} 
        ${color} 
        ${size}
        ${rest.disableShadow && "disableShadow"}
        ${rest.startIcon && "startIcon"}
        ${rest.endIcon && "endIcon"}
      `}
      {...rest}
    >
      {rest.startIcon && (
        <MaterialIcon icon={rest.startIcon} color="#fff" size="18" />
      )}
      {children}
      {rest.endIcon && (
        <MaterialIcon icon={rest.endIcon} color="#fff" size="18" />
      )}
    </button>
  );
};
