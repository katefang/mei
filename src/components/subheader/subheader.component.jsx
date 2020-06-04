import React from "react";
import { OutlinedInput } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  subheader: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  image: {
    width: "350px",
    filter:
      "invert(4%) sepia(96%) saturate(2391%) hue-rotate(246deg) brightness(104%) contrast(97%)",
  },
  searchWrapper: {
    display: "flex",
  },
  searchBar: {
    display: "inline",
    width: "400px",
    height: "45px",
    margin: theme.spacing(2),
  },
  shoppingCart: {
    display: "inline",
    marginTop: theme.spacing(3),
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
    <div className={subheader} style={{ position: "sticky" }}>
      <Link to="/">
        <img
          className={image}
          src={require("../../logos/logo-black.svg")}
          alt="The Good Beauty logo"
        />
      </Link>
      <div className={searchWrapper}>
        <OutlinedInput className={searchBar} placeholder="Search..." />
        <em className={shoppingCart}>
          0 items in <ShoppingCart />
        </em>
      </div>
    </div>
  );
};

export default SubHeader;
