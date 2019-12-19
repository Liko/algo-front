import React from "react";
import { Menu } from "semantic-ui-react";

const MenuContainer = ({ handleClick }) => {
  return (
    <Menu vertical fluid>
      <Menu.Item
        name="Bubble Sort"
        key={"Bubble Sort"}
        onClick={() => handleClick("Bubble Sort")}
      ></Menu.Item>
      <Menu.Item
        name="Quick Sort"
        key={"Quick Sort"}
        onClick={() => handleClick("Quick Sort")}
      ></Menu.Item>
      <Menu.Item
        name="Merge Sort"
        key={"Merge Sort"}
        onClick={() => handleClick("Merge Sort")}
      ></Menu.Item>
      <Menu.Item
        name="Radix Sort"
        key={"Radix Sort"}
        onClick={() => handleClick("Radix Sort")}
      ></Menu.Item>
      <Menu.Item
        name="Tree Sort"
        key={"Tree Sort"}
        onClick={() => handleClick("Tree Sort")}
      ></Menu.Item>
    </Menu>
  );
};

export default MenuContainer;
