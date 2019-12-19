import React from "react";
import { Menu } from "semantic-ui-react";

const MenuContainer = ({ menuSelect }) => {
  return (
    <Menu vertical fluid>
      <Menu.Item
        name="Bubble Sort"
        key={"Bubble Sort"}
        onClick={() => menuSelect("Bubble Sort")}
      ></Menu.Item>
      <Menu.Item
        name="Quick Sort"
        key={"Quick Sort"}
        onClick={() => menuSelect("Quick Sort")}
      ></Menu.Item>
      <Menu.Item
        name="Merge Sort"
        key={"Merge Sort"}
        onClick={() => menuSelect("Merge Sort")}
      ></Menu.Item>
      <Menu.Item
        name="Radix Sort"
        key={"Radix Sort"}
        onClick={() => menuSelect("Radix Sort")}
      ></Menu.Item>
      <Menu.Item
        name="Tree Sort"
        key={"Tree Sort"}
        onClick={() => menuSelect("Tree Sort")}
      ></Menu.Item>
    </Menu>
  );
};

export default MenuContainer;
