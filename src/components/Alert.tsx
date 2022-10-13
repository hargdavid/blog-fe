import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React from "react";

const Alert: React.FC<AlertProps> = ({ ...rest }) => {
  return <MuiAlert {...rest} />;
};

export default Alert;
