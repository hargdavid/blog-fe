import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { Icon, MenuItem } from "@mui/material";

const ListElement = (props) => {
  const { listElement, onClick, multiple } = props;
  const { name } = listElement;

  return (
    <MenuItem
      component="li"
      sx={{
        p: 2,
        cursor: "pointer",
        "&:hover": { background: "rgba(0,0,0,0.2)" },
        display: "flex",
        gap: 1,
        alignItems: "center",
      }}
      onClick={() => onClick(listElement)}
      tabIndex={0}
    >
      {multiple && (
        <Icon>
          {listElement.selected ? <CheckBox /> : <CheckBoxOutlineBlank />}
        </Icon>
      )}
      <span>{name}</span>
    </MenuItem>
  );
};

export default ListElement;
