import {
  Box,
  Button,
  Chip,
  ClickAwayListener,
  List,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import ClientListElement from "./ClientListElement";

const Autocomplete = (props) => {
  const {
    clients,
    selectedClients,
    onDelete,
    clearList,
    toggleElement,
    paging = 20,
  } = props;

  const [inputValue, setInputValue] = useState("");
  const [visibleClients, setVisibleClients] = useState(
    clients.slice(0, paging)
  );
  const [showList, setShowList] = useState(false);
  const [currentPaging, setPaging] = useState(paging);

  useEffect(() => {
    if (inputValue.length > 0) {
      //TODO fix this searchFunction
      const filteredClients = clients.filter((client) =>
        client.fullName.includes(inputValue)
      );
      setVisibleClients(filteredClients);
    } else {
      setVisibleClients(clients.slice(0, currentPaging));
    }
  }, [inputValue, currentPaging, clients]);

  const paginate = () => {
    setPaging(currentPaging + paging);
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => setShowList(false)}>
        <Box sx={{ width: 300, position: "relative" }}>
          <TextField
            sx={{ width: "100%" }}
            label="Clients"
            onFocus={() => setShowList(true)}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {showList && (
            <List
              sx={{
                position: "absolute",
                width: "100%",
                zIndex: 1,
                background: "white",
                height: 500,
                overflowX: "auto",
                boxShadow: "1px 20px 20px 0px rgba(0 0 0, 0.2)",
              }}
            >
              {visibleClients.map((visibleClient) => (
                <ClientListElement
                  key={visibleClient.clientId}
                  client={visibleClient}
                  onClick={toggleElement}
                />
              ))}
              {currentPaging < clients.length && (
                <Box
                  component="li"
                  sx={{ p: 1, display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="text"
                    sx={{ width: "100%" }}
                    onClick={paginate}
                  >
                    Show more
                  </Button>
                </Box>
              )}
            </List>
          )}
        </Box>
      </ClickAwayListener>

      {selectedClients.length > 0 && (
        <List sx={{ gap: 1, display: "flex" }}>
          {selectedClients.map((selectedClient, key) => (
            <Chip
              key={key}
              label={selectedClient.fullName}
              variant="outlined"
              onDelete={() => onDelete(selectedClient)}
              onClick={() => onDelete(selectedClient)}
            />
          ))}

          <Chip
            //TODO change to correct translation
            label={"Deselect all clients"}
            variant="filled"
            onClick={clearList}
            onDelete={clearList}
          />
        </List>
      )}
    </>
  );
};

export default Autocomplete;
