import MuiButton, { ButtonProps } from "@mui/material/Button";
import React from "react";

const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return <MuiButton {...rest} />;
};

export default Button;
