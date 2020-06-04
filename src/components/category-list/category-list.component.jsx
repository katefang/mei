import React from "react";
import MenuLinks from "../menu-links/menu-links.component";
import { List } from "@material-ui/core";

const CategoryList = () => {
  return (
    <List component="nav">
      <MenuLinks link="/category/blush" text="blush" />
      <MenuLinks link="/category/eyebrow" text="eyebrow" />
      <MenuLinks link="/category/eyeliner" text="eyeliner" />
      <MenuLinks link="/category/eyeshadow" text="eyeshadow" />
      <MenuLinks link="/category/foundation" text="foundation" />
      <MenuLinks link="/category/lip liner" text="lip liner" />
      <MenuLinks link="/category/lipstick" text="lipstick" />
      <MenuLinks link="/category/mascara" text="mascara" />
      <MenuLinks link="/category/nail polis" text="nail polis" />
    </List>
  );
};

export default CategoryList;
