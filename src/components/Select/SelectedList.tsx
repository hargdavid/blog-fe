import { Chip, List } from "@mui/material";

const SelectedList = (props) => {
  const { selectedList, onClick, clearList } = props;

  return (
    <>
      {
        <List sx={{ gap: 1, display: "flex" }}>
          {selectedList.map((selectedElement, key) => (
            <Chip
              key={key}
              label={selectedElement.name}
              variant="outlined"
              onDelete={() => onClick(selectedElement)}
              onClick={() => onClick(selectedElement)}
            />
          ))}

          <Chip
            //TODO change to correct translation
            label={"Deselect all list"}
            variant="filled"
            onClick={clearList}
            onDelete={clearList}
          />
        </List>
      }
    </>
  );
};

export default SelectedList;
