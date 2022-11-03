import { Button, ClickAwayListener, MenuList, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import ListElement from "./ListElement";
import SelectedList from "./SelectedList";

const Autocomplete = (props) => {
  const {
    list,
    selectedList,
    onDelete,
    clearList,
    onClickElement,
    paging = 20,
    multiple = false,
    listName = "List",
  } = props;

  const [inputValue, setInputValue] = useState("");
  const [visibleList, setVisibleList] = useState(list.slice(0, paging));
  const [showList, setShowList] = useState(false);
  const [currentPaging, setPaging] = useState(paging);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const [displayShowMoreButton, setDisplayShowMoreButton] = useState(false);
  const [availableItems, setAvailableItems] = useState(list.length);
  const [selectedElement, setSelectedElement] = useState(null);

  useEffect(() => {
    if (inputValue.length > 0) {
      const filteredList = list.filter((listElement) =>
        listElement.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setAvailableItems(filteredList.length);
      setVisibleList(filteredList.slice(0, currentPaging));
    } else {
      setAvailableItems(list.length);
      setVisibleList(list.slice(0, currentPaging));
    }
  }, [inputValue, currentPaging, list]);

  const paginate = () => {
    if (listRef.current) {
      listRef.current.children[currentPaging - 1].focus();
    }
    setPaging(currentPaging + paging);
  };

  const resetList = () => {
    setVisibleList(list.slice(0, paging));
    setPaging(paging);
  };

  const onClick = (element) => {
    onClickElement(element);
    if (!multiple) {
      setShowList(false);
      resetList();
      setInputValue(element.name);
      setSelectedElement(element);
    }
  };

  const handleClickAway = () => {
    setShowList(false);
    resetList();
    if (!multiple) {
      if (inputValue.length === 0) {
        onClickElement(null);
        return;
      } else if (selectedElement) {
        setInputValue(selectedElement.name);
      }
    }
  };

  useEffect(() => {
    if (availableItems > paging) {
      setDisplayShowMoreButton(true);
    } else {
      setDisplayShowMoreButton(false);
    }
  }, [paging, availableItems]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("keydown", (keydown) => {
        if (keydown.keyCode === 40 && listRef.current.children.length > 0) {
          keydown.preventDefault();
          listRef.current.children[0].focus();
        }
      });

      return inputRef.current.removeEventListener("keydown", (keydown) => {
        if (keydown.keyCode === 40 && listRef.current.children.length > 0) {
          keydown.preventDefault();
          listRef.current.children[0].focus();
        }
      });
    }
  }, []);

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ width: 300, position: "relative" }}>
          <TextField
            sx={{ width: "100%" }}
            label={listName}
            onFocus={() => setShowList(true)}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            tabIndex={0}
            type="search"
            name="autocomplete"
            inputRef={inputRef}
          />
          {showList && (
            <MenuList
              ref={listRef}
              sx={{
                position: "absolute",
                width: "100%",
                zIndex: 1,
                background: "white",
                maxHeight: 500,
                overflowX: "auto",
                boxShadow: "0px 12px 16px -9px rgb(0 0 0 / 20%)",
                border: "1px solid rgba(0,0,0,0.2)",
                borderTop: 0,
                borderRadius: 1,
              }}
            >
              {visibleList.map((visibleElement, key) => (
                <ListElement
                  key={key}
                  listElement={visibleElement}
                  onClick={onClick}
                  multiple={multiple}
                />
              ))}

              {displayShowMoreButton && (
                <Box
                  component="li"
                  sx={{ p: 1, display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="text"
                    sx={{ width: "100%" }}
                    onClick={paginate}
                  >
                    {/* TODO correct translation here */}
                    Show more
                  </Button>
                </Box>
              )}
            </MenuList>
          )}
        </Box>
      </ClickAwayListener>

      {multiple && selectedList.length > 0 && (
        <SelectedList
          selectedList={selectedList}
          onClick={onDelete}
          clearList={clearList}
        />
      )}
    </>
  );
};

export default Autocomplete;
