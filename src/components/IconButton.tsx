import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";
import React from "react";

const IconButton: React.FC<IconButtonProps> = ({ ...rest }) => {
  return <MuiIconButton {...rest} />;
};

export default IconButton;
