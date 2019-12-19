import React from "react";
import { Menu } from "semantic-ui-react";

const MenuContainer = ({ handleClick }) => {
  return (
    <Menu vertical>
      <Menu.Item name="Bubble Sort" onClick={handleClick}></Menu.Item>
      <Menu.Item name="Quick Sort" onClick={handleClick}></Menu.Item>
      <Menu.Item name="Merge Sort" onClick={handleClick}></Menu.Item>
    </Menu>
  );
};

export default MenuContainer;
