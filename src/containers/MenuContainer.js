import React from "react";
import { Menu } from "semantic-ui-react";
import { algoMap } from "../util/algorithmHelper";

const MenuContainer = ({ menuSelect }) => {
  return (
    <Menu vertical fluid>
      {Object.keys(algoMap).map(name => (
        <Menu.Item
          name={name}
          key={name}
          onClick={() => menuSelect(name)}
        ></Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuContainer;
