import React from "react";
import PropTypes from "prop-types";

const Button = ({ variant = "default", ...props }) => {
  const variants = {
    primary: Primary,
    secondary: Secondary,
    transparent: Transparent,
    default: Default,
  };

  return React.createElement(variants[variant], props);
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "transparent", "default"]),
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
