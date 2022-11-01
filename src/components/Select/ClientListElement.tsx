import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { Box, Icon } from "@mui/material";

const ClientListElement = (props) => {
  const { client, onClick } = props;
  const { fullName } = client;

  return (
    <Box
      component="li"
      sx={{
        p: 2,
        cursor: "pointer",
        "&:hover": { background: "rgba(0,0,0,0.2)" },
        display: "flex",
        gap: 1,
        alignItems: "center",
      }}
      onClick={() => onClick(client)}
    >
      <Icon>{client.selected ? <CheckBox /> : <CheckBoxOutlineBlank />}</Icon>
      <span>{fullName}</span>
    </Box>
  );
};

export default ClientListElement;
