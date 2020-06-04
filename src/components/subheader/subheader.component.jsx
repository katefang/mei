import React from "react";
import { Box, OutlinedInput } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  subheader: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "20%",
    height: "auto",
  },
  searchWrapper: {
    display: "inline",
  },
  searchBar: {
    width: "300px",
    padding: theme.spacing(-1),
    margin: theme.spacing(2),
  },
  shoppingCart: {
    display: "inline",
  },
}));

const SubHeader = () => {
  const {
    subheader,
    image,
    shoppingCart,
    searchWrapper,
    searchBar,
  } = useStyles();
  return (
    <Box component="div" className={subheader}>
      <img
        className={image}
        src={require("../../logos/logo-black.svg")}
        alt="The Good Beauty logo"
      />
      <div className={searchWrapper}>
        <OutlinedInput
          className={searchBar}
          variant="outlined"
          placeholder="Search..."
        />
        <p className={shoppingCart}>
          0 items in <ShoppingCart />
        </p>
      </div>
    </Box>
  );
};

export default SubHeader;
