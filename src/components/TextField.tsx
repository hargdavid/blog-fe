import MuiTextField, { TextFieldProps } from "@mui/material/TextField";
import React from "react";

const TextField: React.FC<TextFieldProps> = ({ ...rest }) => {
  return <MuiTextField {...rest} />;
};

export default TextField;
