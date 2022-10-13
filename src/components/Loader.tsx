import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import React from "react";

const Loader: React.FC<CircularProgressProps> = ({ ...rest }) => {
  return <CircularProgress {...rest} color="secondary" />;
};

export default Loader;
