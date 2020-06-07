import React from "react";
import MenuLinks from "../menu-links/menu-links.component";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  listItems: {
    width: "20vw",
    display: "flex",
    flexFlow: "row Wrap",
    padding: theme.spacing(1, 0, 1, 1),
    justifyContent: "start",
  },
}));

const CategoryList = () => {
  const { listItems } = useStyles();
  return (
    <div className={listItems} component="nav">
      <MenuLinks link="/category/blush" text="Blush" />
      <MenuLinks link="/category/eyebrow" text="Eyebrow" />
      <MenuLinks link="/category/eyeliner" text="Eyeliner" />
      <MenuLinks link="/category/eyeshadow" text="Eyeshadow" />
      <MenuLinks link="/category/foundation" text="Foundation" />
      <MenuLinks link="/category/lip liner" text="Lip Liner" />
      <MenuLinks link="/category/lipstick" text="Lipstick" />
      <MenuLinks link="/category/mascara" text="Mascara" />
      <MenuLinks link="/category/nail polish" text="Nail Polish" />
    </div>
  );
};

export default CategoryList;
