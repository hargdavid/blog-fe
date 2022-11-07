import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { clients } from "../../../__mocks__/clientList";

import Autocomplete from "./Autocomplete";

export default {
  title: "Test/Autocomplete",
  component: Autocomplete,
  argTypes: {},
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => {
  const [formattedClients, setFormattedClients] = useState(
    clients.map((client) => ({
      ...client,
      selected: false,
      name: client.fullName,
      id: client.clientId,
    }))
  );

  const [selectedClients, setSelectedClients] = useState([]);

  return (
    <Autocomplete
      list={formattedClients}
      setList={setFormattedClients}
      selectedList={selectedClients}
      setSelectedList={setSelectedClients}
      {...args}
    />
  );
};

//setting up variations of the component
export const Primary = Template.bind({});
Primary.args = {
  multiple: true,
  listName: "Clients",
  /*  setSelectedList: setSelectedClients,
  selectedList: selectedClients, */
};
