import React from "react";
import MenuLinks from "../menu-links/menu-links.component";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  listItems: {
    width: "31vw",
    display: "flex",
    flexFlow: "row wrap",
    padding: theme.spacing(1, 0, 1, 1),
    justifyContent: "start",
  },
}));
const TypeList = () => {
  const { listItems } = useStyles();
  return (
    <div className={listItems}>
      <MenuLinks link="/types/Canadian" text="Canadian" />
      <MenuLinks link="/types/CertClean" text="Certified Clean" />
      <MenuLinks link="/types/Chemical Free" text="Chemical Free" />
      <MenuLinks link="/types/Dairy Free" text="Dairy Free" />
      <MenuLinks link="/types/Dairy Free" text="Dairy Free" />
      <MenuLinks link="/types/EWG Verified" text="EWG Verified" />
      <MenuLinks link="/types/EcoCert" text="Eco Certified" />
      <MenuLinks link="/types/Fair Trade" text="Fair Trade" />
      <MenuLinks link="/types/Gluten Free" text="Gluten Free" />
      <MenuLinks link="/types/Hypoallergenic" text="Hypoallergenic" />
      <MenuLinks link="/types/Natural" text="Natural" />
      <MenuLinks link="/types/No Talc" text="No Talc" />
      <MenuLinks link="/types/Non-GMO" text="Non-GMO" />
      <MenuLinks link="/types/Organic" text="Organic" />
      <MenuLinks link="/types/Peanut Free Product" text="Peanut Free Product" />
      <MenuLinks link="/types/Sugar Free" text="Sugar Free" />
      <MenuLinks link="/types/USDA Organic" text="USDA Organic" />
      <MenuLinks link="/types/Vegan" text="Vegan" />
      <MenuLinks link="/types/alcohol free" text="alcohol free" />
      <MenuLinks link="/types/cruelty free" text="cruelty free" />
      <MenuLinks link="/types/oil free" text="oil free" />
      <MenuLinks link="/types/purpicks" text="purpicks" />
      <MenuLinks link="/types/Silicone Free" text="Silicone Free" />
      <MenuLinks link="/types/Water Free" text="Water Free" />
    </div>
  );
};

export default TypeList;
